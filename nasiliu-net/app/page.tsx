import { HeroComponent } from '../components/hero'
import { CtaComponent } from '../components/cta'
import { HelpCardComponent } from '../components/help-card'
import { TestimonialCard } from '../components/testimonial-card'
import { testimonials } from '../data/testimonials'
import { helpCardsData } from '../data/helpCardsData'

export default function Home() {
  console.log('Testimonials:', testimonials);

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <HeroComponent />
      <CtaComponent />
      <div className="bg-black py-12 px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-8 uppercase">
          Как помогает Насилию.Нет
        </h2>
        <div className="flex flex-col gap-8 items-center">
          <HelpCardComponent {...helpCardsData[0]} />
          <TestimonialCard testimonial={testimonials[0]} />
          <HelpCardComponent {...helpCardsData[1]} />
          <TestimonialCard testimonial={testimonials[1]} />
          <HelpCardComponent {...helpCardsData[2]} />
        </div>
        <p className="text-4xl md:text-5xl text-white text-center mt-12">
          А также HR-поддержка,<br />
          сопровождение,<br />инструкции для пострадавших<br />и многое другое
        </p>
      </div>
    </div>
  );
}
