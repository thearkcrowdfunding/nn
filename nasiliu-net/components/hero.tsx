'use client'

import Link from 'next/link'

export function HeroComponent() {
  return (
    <div className="h-[600px] md:h-[800px] flex flex-col justify-center items-center p-6 bg-gradient-to-br from-gray-900 to-gray-700 text-white font-sans">
      <div className="max-w-[800px] w-full">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-left leading-tight">
          ПОМОГИТЕ ЖЕНЩИНАМ, СТРАДАЮЩИМ ОТ ДОМАШНЕГО НАСИЛИЯ
        </h1>
        <p className="text-lg mb-8 text-left">
          Получить экстренное убежище, психологическую помощь, комплексное сопровождение и вырваться из замкнутого круга
        </p>
        <button className="w-full md:w-[400px] bg-red-600 hover:bg-red-700 text-white font-bold py-3 md:py-4 rounded-full transition duration-300 text-lg md:text-xl">
          <span className="block text-center">Помочь сейчас!</span>
        </button>
        <div className="mt-4">
          <Link href="#" className="text-lg underline">
            Узнать больше
          </Link>
        </div>
      </div>
    </div>
  )
}
