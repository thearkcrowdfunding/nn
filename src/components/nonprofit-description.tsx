import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function NonprofitDescriptionComponent() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm">
        <CardHeader className="p-4 sm:p-6 text-center">
          <CardTitle className="text-3xl font-bold text-gray-800">
          MILLIONS OF UKRAINIANS
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4">
          are enduring the daily horrors of war, fighting for their families and freedom. Many have lost their lives, many are struggling to survive.
          They keep fighting and helping one another.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4">
          UNIONTAC provides critical medical support to those on the frontlines. One medkit can save two lives.
          </p>
          <p className="text-lg font-bold sm:text-xl md:text-2xl text-gray-700"> {/* Adjusted text size */}
            To continue this work, we need your help!
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
