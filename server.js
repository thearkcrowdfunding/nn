import express from "express";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import Stripe from "stripe";
import { createServer as createViteServer } from "vite";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

dotenv.config();

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 5173;

// Ensure Stripe secret key is available
const STRIPE_SECRET_KEY = process.env.VITE_STRIPE_SECRET_KEY;
if (!STRIPE_SECRET_KEY) {
  throw new Error("Stripe Secret Key not defined in environment variables");
}

// Initialize Stripe client
const stripe = new Stripe(STRIPE_SECRET_KEY, {
  apiVersion: "2024-06-20",
});

const BASE_URL =
  process.env.NODE_ENV === "production" &&
  process.env.DEPLOY_ENV === "production"
    ? "https://uniontac.projectdrop.click"
    : `http://localhost:${PORT}`;

/**
 * Creates a new Stripe Checkout Session.
 * @param req - Express request object
 * @param res - Express response object
 */
async function createCheckoutSession(req, res) {
  try {
    const { amount, success_url, cancel_url } = req.body;

    // Validate the request body
    if (!amount || !success_url || !cancel_url) {
      return res.status(400).json({ error: "Missing required fields in request body" });
    }

    // Use a predefined product ID for monthly donations
    const MONTHLY_DONATION_PRODUCT_ID = 'prod_Qu46ZVkA9DbcrM';

    // Create a new price object for the subscription
    const price = await stripe.prices.create({
      unit_amount: amount,
      currency: 'usd',
      recurring: { interval: 'month' },
      product: MONTHLY_DONATION_PRODUCT_ID,
    });

    // Create a new checkout session for subscription
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "subscription",
      line_items: [
        {
          price: price.id,
          quantity: 1,
        },
      ],
      success_url: success_url,
      cancel_url: cancel_url,
    });

    // Respond with the session ID
    res.json({ sessionId: session.id });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the checkout session" });
  }
}

/**
 * Retrieves checkout session details.
 * @param req - Express request object
 * @param res - Express response object
 */
async function getCheckoutSession(req, res) {
  try {
    const { sessionId } = req.query;

    if (!sessionId) {
      return res.status(400).json({ error: "Missing sessionId in request query" });
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId);
    res.json({ session });
  } catch (error) {
    console.error("Error retrieving checkout session:", error);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving the checkout session" });
  }
}

/**
 * Creates and configures the Express server.
 * @returns The configured Express app
 */
async function createServer() {
  console.log("NODE_ENV:", process.env.NODE_ENV);
  console.log(
    "VITE_STRIPE_PUBLIC_KEY defined:",
    !!process.env.VITE_STRIPE_PUBLIC_KEY
  );
  console.log(
    "VITE_STRIPE_SECRET_KEY defined:",
    !!process.env.VITE_STRIPE_SECRET_KEY
  );
  console.log(
    "STRIPE_WEBHOOK_SECRET defined:",
    !!process.env.STRIPE_WEBHOOK_SECRET
  );

  // Enable CORS for all routes
  app.use(cors());

  // Use JSON parsing for all routes
  app.use(express.json());

  // Define the create checkout session route
  app.post("/api/create-checkout-session", createCheckoutSession);

  // Define the route for retrieving checkout session details
  app.get("/api/get-checkout-session", getCheckoutSession);

  if (process.env.NODE_ENV === "production") {
    // Serve static files
    app.use(express.static(path.join(__dirname, "dist")));

    // Serve index.html for all other GET requests
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  } else {
    // Create Vite server in middleware mode for development
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "custom",
    });

    // Use Vite's middleware
    app.use(vite.middlewares);
  }

  return app;
}

// Start the server
createServer().then((app) => {
  app.listen(PORT, () => {
    console.log(`Server running on ${BASE_URL}`);
  });
});
