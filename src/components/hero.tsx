import { useState, useEffect } from 'react';
import { Link as ScrollLink } from "react-scroll";

interface HeroProps {
  backgroundImage: string;
}

export function HeroComponent({ backgroundImage }: HeroProps) {
  const [loadedImage, setLoadedImage] = useState('');

  useEffect(() => {
    const img = new Image();
    img.onload = () => setLoadedImage(backgroundImage);
    img.src = backgroundImage;
  }, [backgroundImage]);

  return (
    <div 
      className="relative bg-ukraine-yellow text-ukraine-blue py-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat w-full h-[400px]"
      style={loadedImage ? { backgroundImage: `url(${loadedImage})` } : {}}
    >
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      
      <div className="relative z-10 max-w-3xl mx-auto text-center mt-20"> {/* Add margin-top to push content down */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-white">
          Save a life now
        </h1>
        <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
        Send a first aid kit to <br /> ones fighting for freedom.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <ScrollLink 
            to="donation-form" 
            smooth={true} 
            duration={500} 
            className="w-full sm:w-auto bg-ukraine-blue hover:bg-blue-700 text-white text-center py-3 px-6 rounded-md cursor-pointer"
          >
            Help Now
          </ScrollLink>
          <ScrollLink 
            to="next-section" 
            smooth={true} 
            duration={500} 
            className="text-white underline underline-offset-4 hover:text-gray-200 transition-colors cursor-pointer"
          >
            Learn More
          </ScrollLink>
        </div>
      </div>
    </div>
  )
}
