'use client'

export function CtaComponent() {
  return (
    <div className="flex flex-col items-center bg-red-500 py-8 px-4 md:px-8">
      <div className="bg-white rounded-2xl p-6 md:p-10 max-w-[800px] w-full">
        <div className="text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Сотни тысяч женщин</h2>
          <p className="text-base md:text-lg mb-4">
            подвергаются насилию в{"\u00A0"}России.
          </p>
          <p className="text-base md:text-lg mb-4">
            Более 70% всех убийств женщин в России совершается партнерами и родственниками. 18{"\u00A0"}000 женщин бы убиты только в{"\u00A0"}2021 году. Гораздо больше — подверглись избиениям и{"\u00A0"}сексуальному насилию. И{"\u00A0"}ситуация становится только хуже.
          </p>
          <p className="text-base md:text-lg mb-4">
            Чаще всего агрессоры — это самые близкие люди — мужья, сыновья, отцы и близкие родственники.
          </p>
          <p className="text-base md:text-lg mb-6">
            Женщины беззащитны перед ними. Им некуда уйти, за{"\u00A0"}них некому заступиться.
          </p>
          <p className="text-2xl md:text-3xl font-bold">Им нужна ваша помощь!</p>
        </div>
      </div>
    </div>
  )
}
