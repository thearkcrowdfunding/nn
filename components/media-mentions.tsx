'use client'

import Image from 'next/image';

export function MediaMentionsComponent() {
  const mediaLogos = [
    { name: 'Time', logo: '/media-logos/time.svg' },
    { name: 'Медуза', logo: '/media-logos/meduza.webp' },
    { name: 'Forbes', logo: '/media-logos/forbes.webp' },
    { name: 'Новая Газета', logo: '/media-logos/novaya-gazeta.svg' },
    { name: 'Коммерсант', logo: '/media-logos/kommersant.svg' },
  ];

  return (
    <div className="w-full max-w-[800px] mx-auto p-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-left">О НАС ПИШУТ</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 justify-items-center">
        {mediaLogos.map((media, index) => (
          <div key={index} className="flex">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white flex items-center justify-center overflow-hidden">
              <Image
                src={media.logo}
                alt={media.name}
                width={112}
                height={112}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
