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
            <strong>18{"\u00A0"}000 женщин</strong> были убиты только в{"\u00A0"}2021 году.<br />
            <strong>Гораздо больше</strong> — подверглись избиениям и{"\u00A0"}сексуальному насилию.<br />
            И{"\u00A0"}ситуация становится только хуже.
          </p>
          <p className="text-base md:text-lg mb-4">
            Чаще всего <strong>агрессоры — это самые близкие люди</strong><br />
            — мужья, сыновья, отцы. <strong>Более 70% всех убийств женщин</strong> в{"\u00A0"}России совершается партнерами и{"\u00A0"}родственниками.
          </p>
          <p className="text-base md:text-lg mb-4">
            <strong>Женщины беззащитны перед ними.</strong> Им некуда уйти, за{"\u00A0"}них некому заступиться.
          </p>
          <p className="text-base md:text-lg mb-4"><strong>Им нужна ваша помощь!</strong></p>
        </div>
      </div>
    </div>
  )
}
