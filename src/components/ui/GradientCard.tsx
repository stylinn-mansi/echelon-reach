import React from 'react';
import { cn } from '@/lib/utils';

interface GradientCardProps {
 
  image: {
    src: string;
    alt: string;
  };
  className?: string;
  showGradientLine?: boolean;
  shadowColor?: string;
  shadowWidth?: string;
  shadowHeight?: string;
  shadowBlur?: string;
  borderRadius?: string;
  padding?: string;
  width?: string;
  height?: string;
}

const GradientCard = ({
 
  image,
  className,
  showGradientLine = true,
  shadowColor = '#0055FE',
  shadowWidth = '285px',
  shadowHeight = '50px',
  shadowBlur = '60px',
  borderRadius = '30px',
  padding = '2',
  width = '480px',
  height = '480px',
}: GradientCardProps) => {
  return (
    <div className={cn("w-full", className)}>
      {/* Variant Label */}
    

      {/* Card Container */}
      <div className="relative rounded-[30px]" style={{ maxWidth: width, maxHeight: height }}>
        {/* Circular Gradient Shadow */}
        <div 
          className="absolute -bottom-1 left-1/2 -translate-x-1/2 rounded-full opacity-100"
          style={{
            width: shadowWidth,
            height: shadowHeight,
            backgroundColor: shadowColor,
            filter: `blur(${shadowBlur})`
          }}
        />

        {/* Card */}
        <div 
          className={cn(
            "relative bg-[#080808] border border-white/5 aspect-square",
            `rounded-[${borderRadius}]`,
            `p-${padding}`
          )}
        >
          {/* Image Container */}
          <div 
            className="w-full h-full overflow-hidden relative mb-2"
            style={{ borderRadius: `calc(${borderRadius} - 11px)` }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Blue Gradient Line */}
          {showGradientLine && (
            <div 
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[50%] h-[1px]"
              style={{ 
                background: 'linear-gradient(90deg, rgba(0,85,254,0) 0%, #0055FE 50%, rgba(0,85,254,0) 100%)'
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default GradientCard; 