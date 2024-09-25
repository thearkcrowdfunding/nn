import Stripe from "stripe";
import { config } from "dotenv";

// Load environment variables from .env file
config();

const stripe = new Stripe(process.env.VITE_STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-06-20",
});

const testTokens = [
  { token: "tok_visa", brand: "Visa" },
  { token: "tok_visa_debit", brand: "Visa (debit)" },
  { token: "tok_mastercard", brand: "Mastercard" },
  { token: "tok_mastercard_debit", brand: "Mastercard (debit)" },
  { token: "tok_mastercard_prepaid", brand: "Mastercard (prepaid)" },
  { token: "tok_amex", brand: "American Express" },
  { token: "tok_discover", brand: "Discover" },
  { token: "tok_diners", brand: "Diners Club" },
  { token: "tok_jcb", brand: "JCB" },
  { token: "tok_unionpay", brand: "UnionPay" },
  // Add more test tokens as needed
];

describe("Stripe Test Tokens", () => {
  testTokens.forEach((card) => {
    it(`should successfully create a payment intent with ${card.brand}`, async () => {
      const paymentMethod = await stripe.paymentMethods.create({
        type: "card",
        card: {
          token: card.token,
        },
      });

      const paymentIntent = await stripe.paymentIntents.create({
        amount: 500,
        currency: "usd",
        payment_method: paymentMethod.id,
        confirm: true,
      });

      expect(paymentIntent.status).toBe("succeeded");
    });
  });
});
