'use client'

import { cn } from "@/lib/utils"

export function Ebala() {
  return (
    <div className={cn(
      "bg-black text-white w-full py-2 px-4",
      "text-base leading-tight", // 2x of text-base (assuming base is 16px)
      "sm:text-base sm:leading-tight" // 2x of desktop text-base
    )}>
      <p className="text-center">
        18+ НАСТОЯЩИЙ МАТЕРИАЛ (ИНФОРМАЦИЯ) ПРОИЗВЕДЕН, РАСПРОСТРАНЕН И (ИЛИ) НАПРАВЛЕН ИНОСТРАННЫМ АГЕНТОМ АНО«ЦЕНТР ПО РАБОТЕ С ПРОБЛЕМОЙ НАСИЛИЯ» ЛИБО КАСАЕТСЯ ДЕЯТЕЛЬНОСТИ ИНОСТРАННОГО АГЕНТА АНО «ЦЕНТР ПО РАБОТЕ С ПРОБЛЕМОЙ НАСИЛИЯ».
      </p>
    </div>
  )
}
