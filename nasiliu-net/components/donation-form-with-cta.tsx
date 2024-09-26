"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"

interface DonationFormProps {
  showCTA?: boolean;
}

export function DonationFormWithCta({ showCTA = false }: DonationFormProps) {
  const [amount, setAmount] = useState<string>('15')

  const handleAmountClick = (value: string) => {
    setAmount(value)
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      {showCTA && (
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          НЕ ПРОХОДИТЕ МИМО ТЕХ<br />
          КТО ОТЧАЯННО НУЖДАЕТСЯ<br />
          В ПОМОЩИ
        </h2>
      )}
      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <h3 className="text-xl md:text-2xl font-bold mb-4">
          ПОМОГИТЕ ЖЕРТВАМ ДОМАШНЕГО НАСИЛИЯ
        </h3>
        <p className="text-gray-600 mb-4">
          Без вашей помощи они не справятся
        </p>
        <p className="mb-4">
          Подпишитесь на <span className="font-bold">ежемесячные</span> пожертвования
        </p>
        <p className="mb-6">
          Чтобы НН могло помогать им так так и так<br />
          и так<br />
          и так
        </p>
        <div className="grid grid-cols-3 gap-4 mb-6">
          {['10', '15', '25'].map((value) => (
            <Button
              key={value}
              variant={amount === value ? "default" : "outline"}
              onClick={() => handleAmountClick(value)}
              className={`w-full ${
                amount === value 
                  ? 'bg-red-400 hover:bg-red-500 text-white' 
                  : 'hover:bg-red-100'
              }`}
            >
              ${value}
            </Button>
          ))}
        </div>
        <Button 
          className="w-full bg-red-500 hover:bg-red-600 text-white mb-4 text-lg py-3 rounded-md"
          onClick={() => console.log(`Donating $${amount}`)}
        >
          Помочь сейчас!
        </Button>
        <p className="text-xs text-gray-500">
          Нажимая кнопку, вы соглашаетесь с условиями обработки данных и подтверждаете добровольное пожертвование в НН (в общем, текст короче и все лигалы увести в ссылки)
        </p>
      </div>
    </div>
  )
}
