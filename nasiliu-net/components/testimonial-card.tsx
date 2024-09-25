'use client'

import Image from 'next/image'

interface TestimonialCardProps {
  imageSrc: string;
  quote: string;
  author: string;
}

export function TestimonialCard({ imageSrc, quote, author }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-[800px] w-full mx-auto" style={{ minHeight: '600px' }}>
      <div className="relative h-full">
        <Image
          src={imageSrc}
          alt={author}
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-6 md:p-10">
          <blockquote className="text-xl md:text-2xl mb-4">&ldquo;{quote}&rdquo;</blockquote>
          <p className="text-lg md:text-xl font-semibold">{author}</p>
        </div>
      </div>
    </div>
  )
}
