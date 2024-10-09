'use client'

export function StatisticsComponent() {
  return (
    <div className="bg-white p-6 md:p-10 rounded-lg max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">НАСИЛИЮ.НЕТ — ЭТО</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col">
          <span className="text-4xl md:text-5xl font-bold">6</span>
          <span className="text-lg md:text-xl">лет работы</span>
        </div>
        
        <div className="flex flex-col">
          <span className="text-4xl md:text-5xl font-bold">12 352</span>
          <span className="text-lg md:text-xl">пострадавших<br />получили помощь</span>
        </div>
        
        <div className="flex flex-col">
          <span className="text-4xl md:text-5xl font-bold">24</span>
          <span className="text-lg md:text-xl">человекa в команде</span>
        </div>
        
        <div className="flex flex-col">
          <span className="text-4xl md:text-5xl font-bold">837</span>
          <span className="text-lg md:text-xl">волонтеров<br />работают с Насилию.нет</span>
        </div>
      </div>
    </div>
  )
}
