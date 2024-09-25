import { HeroComponent } from '../components/hero'
import { CtaComponent } from '../components/cta'
import { HelpCardsSection } from '../components/help-cards-section'

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <HeroComponent />
      <CtaComponent />
      <HelpCardsSection />
    </div>
  );
}
