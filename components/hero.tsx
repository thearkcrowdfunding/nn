'use client'

import Link from 'next/link'
import Image from 'next/image'

export function HeroComponent() {
  const handleLearnMoreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const learnMoreSection = document.getElementById('learn-more');
    if (learnMoreSection) {
      learnMoreSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDonateClick = () => {
    const donateSection = document.getElementById('donate-now');
    if (donateSection) {
      donateSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-[700px] md:h-[800px] flex flex-col justify-center items-center p-6 text-white font-sans">
      <Image
        src="/images/hero/hero-background.webp"
        alt="Background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 max-w-[900px] w-full">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-12 text-left leading-tight">
          ПОМОГИТЕ ЖЕНЩИНАМ, СТРАДАЮЩИМ ОТ{"\u00A0"}ДОМАШНЕГО НАСИЛИЯ
        </h1>
        <p className="text-base md:text-lg mb-8 text-left">
          Получить <strong className="font-extrabold">экстренное убежище,</strong> <strong className="font-extrabold">психологическую помощь,</strong> <strong className="font-extrabold">комплексное сопровождение</strong> и{"\u00A0"}вырваться из{"\u00A0"}замкнутого круга
        </p>
        <div className="flex flex-col md:flex-row md:items-center md:justify-start">
          <button 
            className="w-full md:w-[400px] bg-red-500 hover:bg-red-600 text-white font-bold py-3 md:py-4 px-6 rounded-full transition duration-300 text-lg md:text-xl"
            onClick={handleDonateClick}
          >
            <span className="block text-center">Помочь сейчас!</span>
          </button>
          <Link 
            href="#learn-more" 
            className="text-base md:text-lg underline mt-4 md:mt-0 md:ml-12 text-center md:text-left whitespace-nowrap" 
            onClick={handleLearnMoreClick}
          >
            Узнать больше
          </Link>
        </div>
      </div>
    </div>
  )
}
