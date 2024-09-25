'use client'

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link as ScrollLink } from "react-scroll";

export function NonprofitNavComponent() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { name: "Как помочь", href: "/how-to-help" },
    { name: "Получить помощь", href: "/get-help" },
    { name: "О нас", href: "/about" },
    { name: "Отчеты", href: "/reports" },
  ]

  return (
    <nav className="bg-transparent w-full absolute top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-white">
              Насилию.нет
            </Link>
          </div>
          <div className="hidden lg:flex items-center justify-center flex-1 space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <ScrollLink 
              to="donation-form" 
              smooth={true} 
              duration={500} 
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full transition duration-300 text-base lg:text-lg cursor-pointer"
            >
              Помочь
            </ScrollLink>
            <div className="lg:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="text-white">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                <span className="sr-only">Open main menu</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white rounded-b-lg shadow-lg">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-black hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
