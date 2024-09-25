// vite.server.ts

/**
 * @file vite.server.ts
 * @description Configures the Vite development server with custom middlewares, ensuring proper handling of Stripe webhook endpoints.
 */

import { ViteDevServer } from 'vite';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

// Create an Express app to handle API routes
const apiApp = express();

// Enable CORS
apiApp.use(cors());

// Use JSON parsing for routes
apiApp.use(express.json());

/**
 * Configures the Vite development server with the Express API routes.
 * @param server - The Vite development server instance
 */
export function configureServer(server: ViteDevServer): void {
  // Use the Express app as middleware in Vite's server
  server.middlewares.use(apiApp);
}
