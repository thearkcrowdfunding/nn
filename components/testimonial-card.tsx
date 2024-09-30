'use client'

import Image from 'next/image'
import { useRef, useEffect, useState } from 'react'

interface TestimonialCardProps {
  testimonial: {
    imageSrc: string;
    quote: string;
    author: string;
  }
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { imageSrc, quote, author } = testimonial;
  const contentRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [cardHeight, setCardHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (contentRef.current && cardRef.current) {
        const contentHeight = contentRef.current.scrollHeight;
        const cardWidth = cardRef.current.offsetWidth;
        const bottomPadding = cardWidth * 0.2; // 20% of card width
        setCardHeight(contentHeight + bottomPadding);
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, [quote]);

  return (
    <div ref={cardRef} className="bg-white rounded-2xl overflow-hidden max-w-[800px] w-full mx-auto">
      <div className="relative w-full" style={{ paddingBottom: `${cardHeight}px` }}>
        <Image
          src={imageSrc}
          alt={author}
          fill
          sizes="(max-width: 800px) 100vw, 800px"
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end text-white p-6 md:p-10">
          <div ref={contentRef}>
            <blockquote className="text-xl md:text-2xl mb-4 whitespace-pre-wrap">&ldquo;{quote}&rdquo;</blockquote>
            <p className="text-lg md:text-xl font-semibold">{author}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
