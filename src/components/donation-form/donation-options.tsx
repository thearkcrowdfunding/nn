import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { subscriptionOptions } from "./subscription-options"


interface DonationOptionsProps {
  selectedOption: string;
  onOptionChange: (value: string) => void;
}

export function DonationOptions({ selectedOption, onOptionChange }: DonationOptionsProps) {
  return (
    <div className="space-y-4">
      <Label className="text-base font-semibold">Select a donation option:</Label>
      <RadioGroup
        value={selectedOption}
        onValueChange={onOptionChange}
        className="grid grid-cols-1 gap-4 sm:grid-cols-3"
      >
        {subscriptionOptions.map((option) => (
          <Label
            key={option.value}
            className={`flex items-center justify-between rounded-lg border p-4 cursor-pointer ${
              selectedOption === option.value ? "border-primary" : "border-gray-200"
            }`}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value={option.value} id={option.value} />
              <span>{option.label}</span>
            </div>
          </Label>
        ))}
      </RadioGroup>
    </div>
  )
}
