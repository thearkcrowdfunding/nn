import { HeroComponent } from '../components/hero'
import { CtaComponent } from '../components/cta'
import { HelpCardComponent } from '../components/help-card'
import { TestimonialCard } from '../components/testimonial-card'
import { NonprofitNavComponent } from '../components/nonprofit-nav'
import { StatisticsComponent } from '../components/statistics'
import { Team } from '../components/team'
import { testimonials } from '../data/testimonials'
import { helpCardsData } from '../data/helpCardsData'
import { DonationForm } from '../components/donation-form-with-cta'
import { MediaMentionsComponent } from '../components/media-mentions'
import { FooterComponent } from '../components/footer'
import { Ebala } from '../components/ebala'

export default function Home() {
  console.log('Testimonials:', testimonials);

  const urgentCtaText = `ЧТОБЫ ОКАЗЫВАТЬ ПОМОЩЬ<br />И СПАСАТЬ ЛЮДЕЙ — НУЖНА ВАША ПОДДЕРЖКА`;

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Ebala />
      <div className="relative">
        <NonprofitNavComponent />
        <HeroComponent />
      </div>
      <div id="learn-more">
        <CtaComponent />
      </div>
      <div className="py-8 px-4 md:px-8">
        <TestimonialCard testimonial={testimonials[1]} />
      </div>
      <div id="donate-now" className="max-w-[800px] mx-auto px-6 py-12">
        <DonationForm formId="form1" />
      </div>
      <div className="bg-black py-12 px-4 md:px-8">
        <div className="max-w-[800px] mx-auto">
        <div className="p-4"><h2 className="text-4xl md:text-5xl font-bold text-white text-left mb-8 uppercase">
            Насилию.нет 6{"\u00A0"}лет помогает женщинам
          </h2>
        </div>
          <div className="flex flex-col gap-16 items-center"> {/* Increased gap */}
            <HelpCardComponent {...helpCardsData[0]} />
            <TestimonialCard testimonial={testimonials[0]} />
            <HelpCardComponent {...helpCardsData[1]} />
            <HelpCardComponent {...helpCardsData[2]} />
            <TestimonialCard testimonial={testimonials[2]} />
            <HelpCardComponent {...helpCardsData[3]} />
          </div>
        </div>
      </div>
      <div className="max-w-[800px] mx-auto px-6 py-6">
        <div className="p-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-left" dangerouslySetInnerHTML={{ __html: urgentCtaText }}></h2>
        </div>
        <DonationForm formId="form2" />
      </div>
      <div className="max-w-[800px] mx-auto px-6 py-6">
        <StatisticsComponent />
      <Team />
      <MediaMentionsComponent />
      </div>
      <div className="max-w-[800px] mx-auto px-6 py-6">
        <DonationForm formId="form3" />
      </div>
      <FooterComponent /> 
    </div>
  );
}
