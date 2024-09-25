import { Card, CardContent } from "@/components/ui/card"

interface StatProps {
  number: string
  title: string
  description: string
}

const Stat = ({ number, title, description }: StatProps) => (
  <Card className="bg-gray-100">
    <CardContent className="p-6 text-center">
      <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-blue-500 text-3xl font-bold text-white">
        {number}
      </div>
      <h3 className="mb-2 text-xl font-bold uppercase">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </CardContent>
  </Card>
)

export function UnionTacStatsComponent() {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-bold mb-2">UNIONTAC IN NUMBERS</h2>
        <p className="text-center text-lg text-yellow-500 mb-8">
          THIS IS ALL MADE POSSIBLE BECAUSE OF YOU AND YOUR DONATIONS
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Stat
            number="185"
            title="SO MANY MEDICAL KITS HAVE BEEN BOUGHT"
            description="WE COULD PURCHASE AS MANY MEDICAL KITS WITH THE COLLECTED FUNDS. THAT'S OVER 370 LIVES SAVED."
          />
          <Stat
            number="15"
            title="SO MANY BRIGADES HAVE BEEN HELPED"
            description="WE HAVE BEEN ABLE TO PROVIDE ASSISTANCE TO THAT MANY BRIGADES AND MEET THEIR NEEDS."
          />
        </div>
      </div>
    </section>
  )
}
