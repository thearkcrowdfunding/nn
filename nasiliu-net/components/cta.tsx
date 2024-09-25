'use client'

export function CtaComponent() {
  // The content of this function remains the same as in the original StatisticsCardComponent
  return (
    <div className="h-[600px] md:h-[800px] flex items-center justify-center bg-gradient-to-r from-red-600 to-red-800 p-4 md:p-8">
      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 max-w-[800px] w-full">
        <div className="text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Сотни тысяч женщин</h2>
          <p className="text-base md:text-lg mb-4">
            подвергаются насилию в России.
          </p>
          <p className="text-base md:text-lg mb-4">
            18000 женщин бы убиты только в 2021 году . Гораздо больше – подверглись избиениям и сексуальному насилию. И ситуация становится все хуже.
          </p>
          <p className="text-base md:text-lg mb-4">
            Чаще всего насильники — это самые близкие люди — мужья, сыновья, отцы, близкие родственники.
          </p>
          <p className="text-base md:text-lg mb-6">
            Женщины беззащитны перед ними. Им некуда уйти, за них некому заступиться.
          </p>
          <p className="text-2xl md:text-3xl font-bold">Им нужна ваша помощь!</p>
        </div>
      </div>
    </div>
  )
}
