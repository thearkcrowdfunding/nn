import { HeroComponent } from '../components/hero'
import { CtaComponent } from '../components/cta'
import { HelpCardComponent } from '../components/help-card'
import { TestimonialCard } from '../components/testimonial-card'

const helpCardsData = [
  {
    title: "Юридическая помощь",
    imageSrc: "/path/to/image1.jpg",
    statistic1: { number: "В РФ", text: "И за ее пределами<br />Онлайн и очно" },
    statistic2: { number: "XXX XXX", text: "получили юридическую помощь" },
    description: "Помогаем составить заявление в полицию и жалобу в прокуратуру, консультируем по вопросам развода и алиментов, лишения и ограничения родительских прав, и так далее."
  },
  {
    title: "Психологическая помощь<br />и группы поддержки",
    imageSrc: "/path/to/image2.jpg",
    statistic1: { number: "X XXX", text: "пострадавших<br />получили помощь психологов" },
    statistic2: { number: "5", text: "психологов<br />в нашей команде" },
    description: "Проводим индивидуальные психологические консультации для пострадавших и авторов насилия, а также группы поддержки — онлайн и очно."
  },
  {
    title: "Экстренное убежище",
    imageSrc: "/path/to/image3.jpg",
    statistic1: { number: "XXXX", text: "пострадавших<br />смогли укрыться" },
    statistic2: { number: "XX", text: "партнерских шелтеров<br />по всей России" },
    description: "Помогаем женщинам экстренно заселиться в безопасное место,  укрыться от физического насилия, преследования или угроз, и продумать дальнейшие действия в спокойной обстановке."
  }
]

const testimonialData = [
  {
    imageSrc: "/path/to/testimonial1.jpg",
    quote: "Благодаря поддержке Насилию.Нет я смогла начать новую жизнь. Их помощь была неоценима в самый трудный период моей жизни.",
    author: "Анна, 34 года"
  },
  {
    imageSrc: "/path/to/testimonial2.jpg",
    quote: "Психологическая поддержка, которую я получила, помогла мне восстановить веру в себя и свои силы. Я благодарна за эту возможность.",
    author: "Мария, 28 лет"
  }
]

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <HeroComponent />
      <CtaComponent />
      <div className="bg-black py-12 px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-8 uppercase">
          Как помогает Насилию.Нет
        </h2>
        <div className="flex flex-col gap-8 items-center"> {/* Changed from gap-12 to gap-8 */}
          <HelpCardComponent {...helpCardsData[0]} />
          <TestimonialCard {...testimonialData[0]} />
          <HelpCardComponent {...helpCardsData[1]} />
          <TestimonialCard {...testimonialData[1]} />
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
