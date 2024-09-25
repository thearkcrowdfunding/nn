'use client'

import { HelpCardComponent } from './help-card'

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
    description: "Помогаем женщинам экстренно заселиться в безопасное место,  укрыться от физического насилия, преследования или угроз, и продумать дальнейшие действия в спокойной обстановке."
  }
]

export function HelpCardsSection() {
  return (
    <div className="bg-black py-12 px-4 md:px-8">
      <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 uppercase">
        Как помогает Насилию.Нет
      </h2>
      <div className="flex flex-col gap-12 items-center">
        {helpCardsData.map((cardData, index) => (
          <HelpCardComponent key={index} {...cardData} />
        ))}
      </div>
    </div>
  )
}
