'use client';

import React from 'react';
import Image from 'next/image';

export default function Logo({ size = 'md' }) {
  const sizes = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16',
    xl: 'h-24 w-24',
  };

  return (
    <div className={`relative ${sizes[size]} flex items-center justify-center`}>
      <div className="absolute inset-0 bg-black rounded-full border-2 border-gold-600 flex items-center justify-center">
        <div className="text-gold-500 font-bold text-center">
          {size === 'sm' && <span className="text-xs">F4E</span>}
          {size === 'md' && <span className="text-sm">F4E</span>}
          {size === 'lg' && <span className="text-base">F4E</span>}
          {size === 'xl' && <span className="text-lg">F4E</span>}
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24"
          className={`
            ${size === 'sm' ? 'w-6 h-6' : ''}
            ${size === 'md' ? 'w-8 h-8' : ''}
            ${size === 'lg' ? 'w-10 h-10' : ''}
            ${size === 'xl' ? 'w-14 h-14' : ''}
          `}
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ color: '#d4af37', opacity: 0.7 }}
        >
          <path d="M12 2a3 3 0 0 0-3 3v1h6V5a3 3 0 0 0-3-3z" />
          <path d="M19 5a3 3 0 0 1 0 6h-1v3a3 3 0 0 1-6 0v-3H8v3a3 3 0 0 1-6 0v-3H1a3 3 0 0 1 0-6h1V5a7 7 0 0 1 14 0v1h1a3 3 0 0 1 3 3 3 3 0 0 1-1 2.22" />
          <path d="M12 13v8" />
          <path d="M9 17h6" />
          <path d="M9 21h6" />
        </svg>
      </div>
    </div>
  );
}
