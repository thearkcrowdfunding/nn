"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { analytics } from '@/utils/analytics'

type CardType = 'foreign' | 'russian';

const paymentLinks = {
  foreign: {
    "15": "https://buy.stripe.com/9AQ4iQ0sJguNdhe3cf",
    "20": "https://buy.stripe.com/8wMaHe6R7bat5OM6oq",
    "25": "https://buy.stripe.com/aEUeXu4IZfqJ90Y7sw"
  },
  russian: {
    "500": "https://auth.robokassa.ru/RecurringSubscriptionPage/Subscription/Subscribe?SubscriptionId=2ac6907a-bb40-446f-b015-a3394a9f9ef9",
    "1000": "https://auth.robokassa.ru/RecurringSubscriptionPage/Subscription/Subscribe?SubscriptionId=6da6655c-15ba-46c4-8e6c-e2e40cbfef52",
    "1500": "https://auth.robokassa.ru/RecurringSubscriptionPage/Subscription/Subscribe?SubscriptionId=fb1b380b-96ad-47ea-957c-a39887d2e9a2"
  }
} as const;

interface DonationFormProps {
  formId?: string;
}

export function DonationForm({ formId = 'default' }: DonationFormProps) {
  const [cardType, setCardType] = useState<CardType>('foreign')
  const [amount, setAmount] = useState<string>(cardType === 'foreign' ? "20" : "1000")

  const handleCardTypeChange = (type: CardType) => {
    setCardType(type)
    setAmount(type === 'foreign' ? "20" : "1000")
    analytics.trackDonationForm({
      action: 'Card Type Change',
      label: type,
      formId,
      paymentMethod: type,
      currency: type === 'foreign' ? 'USD' : 'RUB'
    });
  }

  const handleAmountClick = (value: string) => {
    setAmount(value)
    analytics.trackDonationForm({
      action: 'Payment Option Click',
      label: cardType === 'foreign' ? `$${value}` : `${value}₽`,
      formId,
      paymentMethod: cardType,
      currency: cardType === 'foreign' ? 'USD' : 'RUB'
    });
  }

  const handleDonateClick = () => {
    const numericAmount = parseInt(amount, 10);
    if (!isNaN(numericAmount) && numericAmount > 0) {
      analytics.trackDonationForm({
        action: 'Donate Button Click',
        label: cardType === 'foreign' ? `$${amount}` : `${amount}₽`,
        formId,
        donationAmount: numericAmount,
        paymentMethod: cardType,
        currency: cardType === 'foreign' ? 'USD' : 'RUB'
      });

      const paymentLink = paymentLinks[cardType][amount as keyof typeof paymentLinks[typeof cardType]];
      if (paymentLink) {
        window.location.href = paymentLink;
      } else {
        console.error('Invalid payment link for amount:', amount);
      }
    }
  }

  const handleLegalLinkClick = (linkName: string) => {
    analytics.trackDonationForm({
      action: 'Legal Link Click',
      label: linkName,
      formId,
      paymentMethod: cardType,
      currency: cardType === 'foreign' ? 'USD' : 'RUB'
    });
  }

  const currentAmounts = Object.keys(paymentLinks[cardType]);

  return (
    <div className="bg-white rounded-lg p-4 border-4 border-red-500 w-full">
      <h3 className="text-3xl md:text-3xl font-bold mb-4 text-left">
        <span className="text-red-500">ПОМОГИТЕ ЖЕНЩИНАМ,</span><br />
        <span className="text-black">СТРАДАЮЩИМ ОТ{"\u00A0"}ДОМАШНЕГО НАСИЛИЯ</span>
      </h3>
      <p className="text-base mb-6 text-left">
        Получить <strong>экстренное убежище, психологическую помощь, комплексное сопровождение</strong> и{"\u00A0"}вырваться из{"\u00A0"}замкнутого круга
      </p>
      
      <p className="text-base mb-6 text-center font-semibold">
        Подпишитесь на{"\u00A0"}ежемесячные пожертвования
      </p>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <Button
          onClick={() => handleCardTypeChange('foreign')}
          className={`flex-1 px-4 py-2 h-auto min-h-[44px] sm:min-h-[48px] ${
            cardType === 'foreign'
              ? "bg-gray-800 text-white hover:bg-gray-800"
              : "bg-transparent border-2 border-black text-black hover:bg-gray-100"
          }`}
        >
          <span className="whitespace-normal text-center sm:whitespace-nowrap">
            C иностранной карты
          </span>
        </Button>
        <Button
          onClick={() => handleCardTypeChange('russian')}
          className={`flex-1 px-4 py-2 h-auto min-h-[44px] sm:min-h-[48px] ${
            cardType === 'russian'
              ? "bg-gray-800 text-white hover:bg-gray-800"
              : "bg-transparent border-2 border-black text-black hover:bg-gray-100"
          }`}
        >
          <span className="whitespace-normal text-center sm:whitespace-nowrap">
            C российской карты
          </span>
        </Button>
      </div>
      
      <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8">
        {currentAmounts.map((value) => (
          <Button
            key={value}
            variant={amount === value ? "default" : "outline"}
            onClick={() => handleAmountClick(value)}
            className={`w-full text-lg sm:text-xl py-2 h-auto min-h-[44px] ${
              amount === value 
                ? "bg-gray-800 text-white hover:bg-gray-800" 
                : "bg-transparent border-2 border-black text-black hover:bg-gray-100"
            }`}
          >
            {cardType === 'foreign' ? `$${value}` : `${value}₽`}
          </Button>
        ))}
      </div>

      <Button 
        className="w-full bg-red-500 text-white hover:bg-red-600 mb-6 text-xl font-bold py-10 rounded-md"
        onClick={handleDonateClick}
      >
        Помочь сейчас!
      </Button>
      
      <p className="text-base mb-8 text-center">
        Без вашей помощи они не{"\u00A0"}справятся. Даже {cardType === 'foreign' ? "20$" : "1000₽"} могут спасти чью-то жизнь.
      </p>
      
      <p className="text-sm text-center">
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
        </Link>
      </p>
    </div>
  )
}
