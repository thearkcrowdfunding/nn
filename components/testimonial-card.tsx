'use client'

import Image from 'next/image'
import { useRef, useEffect, useState } from 'react'

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

  if (withBackground) {
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
              <blockquote 
                className="text-base md:text-lg mb-4 whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: quote }}
              />
              <p className="text-base md:text-lg font-semibold">{author}</p>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div ref={cardRef} className="bg-white rounded-2xl overflow-hidden max-w-[800px] w-full mx-auto p-6 md:p-10">
        <div ref={contentRef}>
          <blockquote 
            className="text-base md:text-lg mb-4 whitespace-pre-wrap text-black"
            dangerouslySetInnerHTML={{ __html: quote }}
          />
          <p className="text-base md:text-lg font-semibold text-black">{author}</p>
        </div>
      </div>
    )
  }
}
