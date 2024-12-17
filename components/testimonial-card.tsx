'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'

interface TestimonialCardProps {
  testimonial: {
    imageSrc: string;
    quote: string;
    author: string;
    withBackground: boolean;
  }
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { imageSrc, quote, author, withBackground } = testimonial;

  const formatQuote = (text: string) => {
    // Replace HTML tags with actual elements while preserving newlines
    return text.split('\n\n').map((paragraph, index) => {
      const processedText = paragraph.trim();
      
      return processedText ? (
        <p key={index} className="mb-4 last:mb-0">
          {processedText}
        </p>
      ) : null;
    });
  };

  if (withBackground) {
    return (
      <div className="max-w-[800px] w-full mx-auto">
        <div className={cn(
          "overflow-hidden relative w-full",
          "h-[800px] md:aspect-square",
          "text-white",
          "rounded-2xl"
        )}>
          <Image
            src={imageSrc}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 p-6 md:p-8 flex flex-col">
            <div className="flex-grow flex items-end mb-8">
              <div className="text-base md:text-lg lg:text-xl font-medium">
                {formatQuote(quote)}
              </div>
            </div>
            <div>
              <div className="w-16 h-0.5 bg-current opacity-60 mb-4" />
              <p className="text-base md:text-lg opacity-80">
                {author}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="bg-white rounded-2xl overflow-hidden max-w-[800px] w-full mx-auto p-6 md:p-10">
        <div className="text-base md:text-lg lg:text-xl font-medium mb-8 text-black">
          {formatQuote(quote)}
        </div>
        <div>
          <div className="w-16 h-0.5 bg-black opacity-60 mb-4" />
          <p className="text-base md:text-lg text-black opacity-80">
            {author}
          </p>
        </div>
      </div>
    )
  }
}
