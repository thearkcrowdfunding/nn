"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { analytics } from '@/utils/analytics'

type CardType = 'foreign' | 'russian';


const oneTimePaymentLinks = {
  foreign: {
    "15": "https://donate.stripe.com/8wMbLi7Vb1zTb96fZ4",
    "20": "https://donate.stripe.com/cN2bLigrH4M56SQ14b",
    "25": "https://donate.stripe.com/dR67v2grHcex2CAbIQ"
  },

  // Russian cards for One Time Donations are not supported
  russian: {
    "500": "",
    "1000": "",
    "1500": ""
  }
} as const;

const recurrentPaymentLinks = {
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
  noBorder?: boolean;
}

export function DonationForm({ formId = 'default', noBorder = false }: DonationFormProps) {


  const [isOneTimeDonation, setIsOneTimeDonation] = useState(false);
  const [cardType, setCardType] = useState<CardType>('foreign')
  const [amount, setAmount] = useState<string>(cardType === 'foreign' ? "20" : "1000");

  useEffect(() => {
    if (isOneTimeDonation) {
      setCardType('foreign');
    }
  }, [isOneTimeDonation])

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

    if (isOneTimeDonation && cardType === 'russian') {
      return;
    }

    if (isOneTimeDonation) {
      if (!isNaN(numericAmount) && numericAmount > 0) {
        analytics.trackDonationInitiation({
          action: 'One Time Donate Button Click',
          label: cardType === 'foreign' ? `$${amount}` : `${amount}₽`,
          formId,
          donationAmount: numericAmount,
          paymentMethod: cardType,
          currency: cardType === 'foreign' ? 'USD' : 'RUB'
        });

        const paymentLink = oneTimePaymentLinks[cardType][amount as keyof typeof oneTimePaymentLinks[typeof cardType]];
        if (paymentLink) {
          window.location.href = paymentLink;
        } else {
          console.error('Invalid payment link for amount:', amount);
        }
      }
      return;
    }

    if (!isNaN(numericAmount) && numericAmount > 0) {
      analytics.trackDonationInitiation({
        action: 'Donate Button Click',
        label: cardType === 'foreign' ? `$${amount}` : `${amount}₽`,
        formId,
        donationAmount: numericAmount,
        paymentMethod: cardType,
        currency: cardType === 'foreign' ? 'USD' : 'RUB'
      });

      const paymentLink = recurrentPaymentLinks[cardType][amount as keyof typeof recurrentPaymentLinks[typeof cardType]];
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

  const currentAmounts = Object.keys(recurrentPaymentLinks[cardType]);

  return (
    <div className={`bg-white rounded-lg p-4 w-full ${!noBorder ? 'border-4 border-red-200' : ''}`}>
      <h3 className="text-2xl md:text-2xl font-bold mb-6 text-center">
        <span className="text-red-500">ПОМОГИТЕ ЖЕНЩИНАМ,</span><br />
        <span className="text-black">СТРАДАЮЩИМ ОТ{"\u00A0"}ДОМАШНЕГО НАСИЛИЯ</span>
      </h3>
      {/* <p className="text-base mb-6 text-center">
        Получить <strong>экстренное убежище, психологическую помощь, комплексное сопровождение</strong> и{"\u00A0"}вырваться из{"\u00A0"}замкнутого круга
      </p> */}

      <p className="text-base mb-6 text-center">
        Подпишитесь на{"\u00A0"}

        <span onClick={() => {
          setIsOneTimeDonation(false)
        }} className={!isOneTimeDonation ? "font-semibold cursor-pointer" : "underline cursor-pointer"}>❤️ежемесячные</span> или <span onClick={() => {
          setIsOneTimeDonation(true)
        }} className={isOneTimeDonation ? "font-semibold cursor-pointer" : "underline cursor-pointer"}>разовые</span> пожертвования
      </p>
      <div className="flex justify-center mb-2 sm:mb-4 md:mb-6 border-b border-red-600/20">
        <button
          onClick={() => handleCardTypeChange('foreign')}
          className={`px-3 sm:px-4 md:px-6 py-2 md:py-3 text-[15px] sm:text-base md:text-lg font-medium transition-colors relative ${cardType === 'foreign'
            ? 'text-red-600 border-b-2 border-red-600'
            : 'text-red-600/60 hover:text-red-600/80'
            }`}
        >
          Иностранная карта
        </button>
        {!isOneTimeDonation && <>
          <button
            onClick={() => handleCardTypeChange('russian')}
            className={`px-3 sm:px-4 md:px-6 py-2 md:py-3 text-[15px] sm:text-base md:text-lg font-medium transition-colors relative ${cardType === 'russian'
              ? 'text-red-600 border-b-2 border-red-600'
              : 'text-red-600/60 hover:text-red-600/80'
              }`}
          >
            Российская карта
          </button>
        </>}
      </div>
      <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8 mt-6">
        {currentAmounts.map((value) => (
          <Button
            key={value}
            variant={amount === value ? "default" : "outline"}
            onClick={() => handleAmountClick(value)}
            className={`w-full text-lg sm:text-xl py-2 h-auto min-h-[44px] ${amount === value
              ? "bg-gray-600 text-white hover:bg-gray-600 text-white"
              : "bg-transparent border-2 border-gray-400 text-gray-600 hover:bg-white"
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
        Помочь сейчас! 🤍
      </Button>

      {/* <p className="text-base mb-8 text-center">
        Без вашей помощи они не{"\u00A0"}справятся. Даже {cardType === 'foreign' ? "20$" : "1000₽"} могут спасти чью-то жизнь.
      </p> */}

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
