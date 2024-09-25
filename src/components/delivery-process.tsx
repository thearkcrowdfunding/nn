import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const steps = [
  {
    number: 1,
    title: "Collecting donations from you",
    description: "The cost of one first-aid kit is $80. This is the price of saving a life and preventing irreversible consequences. Timely and proper assistance in the golden hour increases survival chances."
  },
  {
    number: 2,
    title: "Placing an order with the supplier",
    description: "We work with a Ukrainian manufacturer who, upon receiving payment, expeditiously delivers the order to us. Our volunteers then collect and deliver everything to the military for whom the order was made."
  },
  {
    number: 3,
    title: "Directly delivering to the military",
    description: "Our volunteers deliver faster than lightning, despite daily shelling and threats. We deliver directly to the military, ensuring they receive exactly what they need."
  }
]

export function DeliveryProcessComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm">
        <CardHeader className="text-center">
          <div className="text-sm font-semibold text-yellow-500 mb-2">LOGISTICS</div>
          <CardTitle className="text-2xl font-bold text-gray-800">
            Delivery Process of First Aid Kits to the Military
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {steps.map((step) => (
            <div key={step.number} className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                <span className="text-white font-bold">{step.number}</span>
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
