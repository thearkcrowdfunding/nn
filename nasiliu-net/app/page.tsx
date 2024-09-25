import { HeroComponent } from '../components/hero'
import { CtaComponent } from '../components/cta'

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <HeroComponent />
      <CtaComponent />
    </div>
  );
}
