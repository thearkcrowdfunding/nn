import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link as ScrollLink } from "react-scroll";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui"

export function NonprofitNavComponent() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState("EN")

  const menuItems = [
    { name: "How to Help", href: "/how-to-help" },
    { name: "Get Help", href: "/get-help" },
    { name: "About Us", href: "/about" },
    { name: "Reports", href: "/reports" },
  ]

  const languages = ["EN", "UA", "RU"]

  const handleLanguageChange = (lang: string) => {
    setCurrentLanguage(lang)
    setIsOpen(false)
  }

  return (
    <nav className="bg-ukraine-yellow shadow-md w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-ukraine-blue">
              UNIONTAC
            </Link>
          </div>
          <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="flex items-center space-x-1 text-white">
                    <span>{currentLanguage}</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {languages.filter(lang => lang !== currentLanguage).map((lang) => (
                    <DropdownMenuItem key={lang} onSelect={() => setCurrentLanguage(lang)}>
                      {lang}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <ScrollLink 
              to="donation-form" 
              smooth={true} 
              duration={500} 
              className="bg-ukraine-blue hover:bg-blue-700 text-white text-center py-3 px-6 rounded-md cursor-pointer"
            >
              Donate
            </ScrollLink>
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="text-white">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                <span className="sr-only">Open main menu</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="px-2 py-3 border-t border-gray-200">
            <div className="flex justify-around">
              {languages.map((lang) => (
                <button
                  key={lang}
                  className={`px-3 py-2 rounded-md text-base font-medium ${
                    currentLanguage === lang ? 'text-ukraine-blue' : 'text-white hover:text-gray-200'
                  }`}
                  onClick={() => handleLanguageChange(lang)}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
