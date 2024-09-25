import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface CustomAmountInputProps {
  customAmount: string;
  onCustomAmountChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function CustomAmountInput({ customAmount, onCustomAmountChange }: CustomAmountInputProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor="custom-amount" className="text-base font-semibold">
        Or enter a custom amount (min $3):
      </Label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
        <Input
          type="number"
          id="custom-amount"
          placeholder="Enter amount"
          value={customAmount}
          onChange={onCustomAmountChange}
          min={3}
          max={100000}
          step={1}
          className="pl-8"
        />
      </div>
    </div>
  )
}
