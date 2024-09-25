import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui"
import { Link as ScrollLink } from "react-scroll";
import donationAppealBg from "@/assets/images/donation-appeal-bg.jpg"

export function DonationAppealComponent() {
  return (
    <div 
      className="relative w-full h-[400px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url(${donationAppealBg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for better text readability */}
      <Card className="relative max-w-2xl mx-auto bg-transparent text-white border-none">
        <CardHeader className="space-y-2">
          <div className="text-yellow-500 font-semibold">HELP NOW</div>
          <h2 className="text-3xl font-bold leading-tight">
            They can't wait - act now!
          </h2>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm">
            Every day Ukrainians are shelled with all possible weapons: 
            drones, artillery, and Grad rockets. People are losing their lives defending 
            their families, freedom and justice. 
            
            One first aid kit can save two lives.

            One first aid increases the chance of survival 
            and the possibility of evacuation from the combat zone.
          </p>
          <div className="text-xl font-bold">
            COST OF FIRST AID KIT: <span className="text-yellow-500">$80</span>
          </div>
        </CardContent>
        <CardFooter>
          <ScrollLink 
            to="donation-form" 
            smooth={true} 
            duration={500} 
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-800 font-semibold py-3 text-center rounded-md cursor-pointer"
          >
            DONATE NOW
          </ScrollLink>
        </CardFooter>
      </Card>
    </div>
  )
}
