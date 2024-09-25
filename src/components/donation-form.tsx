import { useState } from "react"
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui"
import { loadStripe } from "@stripe/stripe-js";
import { DonationOptions } from "./donation-form/donation-options"
import { subscriptionOptions } from "./donation-form/subscription-options"
import { CustomAmountInput } from "./donation-form/custom-amount-input"

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

export function DonationFormComponent() {
  const [selectedOption, setSelectedOption] = useState("monthly-10")
  const [customAmount, setCustomAmount] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numValue = parseInt(value, 10);
    if (value === "" || (numValue >= 3 && numValue <= 100000)) {
      setCustomAmount(value);
      setSelectedOption(""); // Deselect predefined options when custom amount is entered
    }
  };

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
    const option = subscriptionOptions.find(opt => opt.value === value);
    if (option) {
      setCustomAmount((option.amount / 100).toString()); // Set custom amount to selected predefined amount
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    setLoading(true);

    const stripe = await stripePromise;

    if (!stripe) {
      setError("Stripe has not been initialized.");
      setLoading(false);
      return;
    }

    let amount: number;
    if (customAmount) {
      amount = parseInt(customAmount, 10) * 100; // Convert to cents
    } else {
      const selectedSubscriptionOption = subscriptionOptions.find(option => option.value === selectedOption);
      amount = selectedSubscriptionOption ? selectedSubscriptionOption.amount : 0;
    }

    if (amount < 300 || amount > 10000000) {
      setError("Invalid amount. Must be between $3 and $100,000.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: amount,
          success_url: `${window.location.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${window.location.origin}/cancel`,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Unknown error');
      }

      const { sessionId } = await response.json();

      const { error: stripeError } = await stripe.redirectToCheckout({
        sessionId,
      });

      if (stripeError) {
        throw new Error(stripeError.message || "An error occurred while redirecting to Stripe Checkout.");
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : "An unexpected error occurred");
    }

    setLoading(false);
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Donate Now</CardTitle>
        <CardDescription className="text-center">Your support makes a difference</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <DonationOptions selectedOption={selectedOption} onOptionChange={handleOptionChange} />
          <CustomAmountInput customAmount={customAmount} onCustomAmountChange={handleCustomAmountChange} />
          {error && <div className="text-red-500">{error}</div>}
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Processing..." : "Donate Now"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
