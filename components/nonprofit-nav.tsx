'use client'

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { analytics } from '@/utils/analytics';

export function NonprofitNavComponent() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { name: "Получить помощь", href: "https://nasiliu.net/" },
    { name: "О нас", href: "https://nasiliu.net/o-nas/" },
    { name: "Отчеты", href: "https://nasiliu.net/report/" },
  ]

  const handleMenuItemClick = (itemName: string) => {
    analytics.trackNavigation('Menu Item Click', itemName);
  };

  const handleDonateClick = () => {
    analytics.trackNavigation('Donate Button Click', 'Header');
    const donateSection = document.getElementById('donate-now');
    if (donateSection) {
      donateSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBurgerMenuClick = () => {
    analytics.trackNavigation('Burger Menu Toggle', isOpen ? 'Close' : 'Open');
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-transparent w-full absolute top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-white">
                <div style={{ width: '120px', height: '40px', position: 'relative' }}>
                  <Image
                    src="/logo-new.svg"
                    alt="Насилию.нет"
                    fill
                    style={{ objectFit: 'contain' }}
                    priority
                  />
                </div>
              </Link>
            </div>
            <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleMenuItemClick(item.name)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={handleDonateClick}
                className="hidden md:block bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 text-base md:text-lg cursor-pointer"
              >
                Помочь
              </button>
              <div className="md:hidden">
                <Button variant="ghost" size="icon" onClick={handleBurgerMenuClick} className="text-white">
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                  <span className="sr-only">Open main menu</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white rounded-b-lg shadow-lg">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-black hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
