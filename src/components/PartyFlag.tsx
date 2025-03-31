import React from 'react';
import Image from 'next/image';

interface PartyFlagProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function PartyFlag({ width = 300, height = 200, className = '' }: PartyFlagProps) {
  return (
    <div 
      className={`relative overflow-hidden ${className}`} 
      style={{ 
        width: width, 
        height: height,
        borderRadius: '4px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}
    >
      {/* Top navy blue section */}
      <div 
        className="absolute top-0 left-0 right-0" 
        style={{ 
          height: `${height/3}px`, 
          backgroundColor: '#000080' 
        }}
      />
      
      {/* Middle white section with wheel */}
      <div 
        className="absolute flex items-center justify-center"
        style={{ 
          top: `${height/3}px`, 
          left: 0, 
          right: 0, 
          height: `${height/3}px`, 
          backgroundColor: '#ffffff' 
        }}
      >
        <div className="relative" style={{ width: `${height/3}px`, height: `${height/3}px` }}>
          <Image
            src="/wheel.svg" // Make sure to create this SVG with the Ashoka Chakra-inspired wheel with 9 spokes
            alt="Wheel Symbol"
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
      
      {/* Bottom navy blue section */}
      <div 
        className="absolute bottom-0 left-0 right-0" 
        style={{ 
          height: `${height/3}px`, 
          backgroundColor: '#000080' 
        }}
      />
    </div>
  );
}
