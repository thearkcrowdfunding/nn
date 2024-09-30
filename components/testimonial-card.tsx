'use client'

import Image from 'next/image'

interface TestimonialCardProps {
  testimonial: {
    imageSrc: string;
    quote: string;
    author: string;
  }
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { imageSrc, quote, author } = testimonial;

  return (
    <div className="bg-white rounded-2xl overflow-hidden max-w-[800px] w-full mx-auto">
      <div className="relative w-full pb-[150%] md:pb-[75%]">
        <Image
          src={imageSrc}
          alt={author}
          fill
          sizes="(max-width: 800px) 100vw, 800px"
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 text-white p-6 md:p-10 overflow-y-auto max-h-full">
          <blockquote className="text-xl md:text-2xl mb-4 whitespace-pre-wrap">&ldquo;{quote}&rdquo;</blockquote>
          <p className="text-lg md:text-xl font-semibold">{author}</p>
        </div>
      </div>
    </div>
  )
}
