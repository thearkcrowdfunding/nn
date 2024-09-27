"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface DonationFormProps {
  showCTA?: boolean;
  ctaText?: string;
}

const paymentLinks = {
  "10": "https://buy.stripe.com/test_00geVC122fOC7S0eUU",
  "15": "https://buy.stripe.com/test_14k5l2dOO0TI7S0cMN",
  "25": "https://buy.stripe.com/test_8wM6p6bGG0TIfkscMO"
};

export function DonationFormWithCta({ showCTA = false, ctaText }: DonationFormProps) {
  const [amount, setAmount] = useState<string>("15")

  const handleAmountClick = (value: string) => {
    setAmount(value)
  }

  const handleDonateClick = () => {
    window.open(paymentLinks[amount as keyof typeof paymentLinks], "_blank")
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md p-6 border-4 border-red-500">
        {showCTA && ctaText && (
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center" dangerouslySetInnerHTML={{ __html: ctaText }}></h2>
        )}
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center text-red-500">
          ПОМОГИТЕ ЖЕРТВАМ ДОМАШНЕГО НАСИЛИЯ
        </h3>
        <p className="text-base mb-3 text-center">
          Получить экстренное убежище, психологическую помощь, комплексное сопровождение и вырваться из замкнутого круга
        </p>
        <p className="text-lg mb-3 text-center font-semibold">
          Подпишитесь на ежемесячные пожертвования
        </p>
        <p className="text-lg mb-6 text-center">
          Без вашей помощи они не справятся
        </p>
        <div className="grid grid-cols-3 gap-4 mb-6">
          {Object.keys(paymentLinks).map((value) => (
            <Button
              key={value}
              variant={amount === value ? "default" : "outline"}
              onClick={() => handleAmountClick(value)}
              className={`w-full text-xl py-3 ${
                amount === value 
                  ? "bg-red-500 text-white hover:bg-red-600" 
                  : "bg-transparent border-2 border-red-500 text-red-500 hover:bg-red-50"
              }`}
            >
              ${value}
            </Button>
          ))}
        </div>
        <Button 
          className="w-full bg-red-500 text-white hover:bg-red-600 mb-4 text-xl font-bold py-10 rounded-md"
          onClick={handleDonateClick}
        >
          Помочь сейчас!
        </Button>
        <p className="text-sm text-center">
          Нажимая кнопку, вы соглашаетесь с условиями обработки данных и подтверждаете добровольное пожертвование в НН (в общем, текст короче и все лигалы увести в ссылки)
        </p>
      </div>
    </div>
  )
}
