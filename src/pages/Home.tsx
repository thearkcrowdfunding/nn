import { lazy, Suspense } from 'react';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import heroBackground from "@/assets/images/hero-background.jpg";

const NonprofitNavComponent = lazy(() => import("@/components/nonprofit-nav").then(module => ({ default: module.NonprofitNavComponent })));
const HeroComponent = lazy(() => import("@/components/hero").then(module => ({ default: module.HeroComponent })));
const DonationFormComponent = lazy(() => import("@/components/donation-form").then(module => ({ default: module.DonationFormComponent })));
const UnionTacStatsComponent = lazy(() => import("@/components/union-tac-stats").then(module => ({ default: module.UnionTacStatsComponent })));
const NonprofitDescriptionComponent = lazy(() => import("@/components/nonprofit-description").then(module => ({ default: module.NonprofitDescriptionComponent })));
const DonationAppealComponent = lazy(() => import("@/components/donation-appeal").then(module => ({ default: module.DonationAppealComponent })));
const DeliveryProcessComponent = lazy(() => import("@/components/delivery-process").then(module => ({ default: module.DeliveryProcessComponent })));

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <NonprofitNavComponent />
        <HeroComponent backgroundImage={heroBackground} />
        <div id="next-section">
          <NonprofitDescriptionComponent />
          <DonationAppealComponent />
          <UnionTacStatsComponent />
          <DeliveryProcessComponent />
          <Elements stripe={stripePromise}>
            <div id="donation-form">
              <DonationFormComponent />
            </div>
          </Elements>
        </div>
      </div>
    </Suspense>
  );
}
