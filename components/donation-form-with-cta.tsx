"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { analytics } from '@/utils/analytics'

const paymentLinks = {
  "15": "https://buy.stripe.com/9AQ4iQ0sJguNdhe3cf",
  "20": "https://buy.stripe.com/8wMaHe6R7bat5OM6oq",
  "25": "https://buy.stripe.com/aEUeXu4IZfqJ90Y7sw"
};

export function DonationForm({ formId = 'default' }: { formId?: string }) {
  const [amount, setAmount] = useState<string>("20")

  const handleAmountClick = (value: string) => {
    setAmount(value)
    analytics.trackDonationForm('Payment Option Click', value, formId);
  }

  const handleDonateClick = () => {
    analytics.trackDonationForm('Donate Button Click', amount, formId, parseInt(amount));
    window.open(paymentLinks[amount as keyof typeof paymentLinks], "_blank")
  }

  const handleLegalLinkClick = (linkName: string) => {
    analytics.trackDonationForm('Legal Link Click', linkName, formId);
  }

  return (
    <div className="bg-white rounded-lg p-4 border-4 border-red-500 w-full"> {/* Added w-full */}
      <h3 className="text-3xl md:text-3xl font-bold mb-4 text-left">
        <span className="text-red-500">ПОМОГИТЕ ЖЕНЩИНАМ,</span><br />
        <span className="text-black">СТРАДАЮЩИМ ОТ{"\u00A0"}ДОМАШНЕГО НАСИЛИЯ</span>
      </h3>
      <p className="text-base mb-6 text-left">
        Получить <strong>экстренное убежище, психологическую помощь, комплексное сопровождение</strong> и{"\u00A0"}вырваться из{"\u00A0"}замкнутого круга
      </p>
      <p className="text-base mb-3 text-center font-semibold">
        Подпишитесь на{"\u00A0"}ежемесячные пожертвования
      </p>
      
      <div className="mt-12 mb-8 grid grid-cols-3 gap-4">
        {Object.keys(paymentLinks).map((value) => (
          <Button
            key={value}
            variant={amount === value ? "default" : "outline"}
            onClick={() => handleAmountClick(value)}
            className={`w-full text-xl py-3 ${
              amount === value 
                ? "bg-gray-800 text-white hover:bg-gray-800" 
                : "bg-transparent border-2 border-black text-black hover:bg-gray-100"
            }`}
          >
            ${value}
          </Button>
        ))}
      </div>
      <Button 
        className="w-full bg-red-500 text-white hover:bg-red-600 mb-12 text-xl font-bold py-10 rounded-md"
        onClick={handleDonateClick}
      >
        Помочь сейчас!
      </Button>
      
      <p className="text-base mb-6 text-center">
        Без вашей помощи они не{"\u00A0"}справятся. Даже 20$ могут спасти чью-то жизнь.
      </p>
      
      <p className="text-xs text-center">
        Нажимая кнопку, вы соглашаетесь с{" "}
        <Link 
          href="https://nasiliu.net/wp-content/uploads/2024/03/oferta-nn_eu.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="underline"
          onClick={() => handleLegalLinkClick('оферта')}
        >
          офертой
        </Link>{" "}
        и{" "}
        <Link 
          href="https://nasiliu.net/wp-content/uploads/2024/03/politika-konfidenczialnosti-nn_eu.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="underline"
          onClick={() => handleLegalLinkClick('обработкой персональных данных')}
        >
          обработкой персональных данных
        </Link>{" "}
      </p>
    </div>
  )
}
