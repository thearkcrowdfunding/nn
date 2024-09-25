import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

interface CheckoutSession {
  payment_status: string;
  // Add other properties as needed
}

export default function PaymentSuccess() {
  const [searchParams] = useSearchParams();
  const [session, setSession] = useState<CheckoutSession | null>(null);
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    if (sessionId) {
      fetch(`/api/get-checkout-session?sessionId=${sessionId}`)
        .then((res) => res.json())
        .then((data) => {
          setSession(data.session);
          // Handle successful payment confirmation
        })
        .catch((error) => {
          console.error("Error fetching checkout session:", error);
        });
    }
  }, [sessionId]);

  if (!session) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Payment Successful</h1>
      <p>Thank you for your purchase!</p>
      <p>Payment Status: {session.payment_status}</p>
      {/* Display additional session details if needed */}
    </div>
  );
}
