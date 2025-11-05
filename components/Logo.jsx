'use client';

import React from 'react';
import Image from 'next/image';

export default function Logo({ size = 'md' }) {
  const dimensions = {
    sm: { width: 32, height: 32 },
    md: { width: 48, height: 48 },
    lg: { width: 64, height: 64 },
    xl: { width: 120, height: 120 },
  };

  return (
    <div className="relative flex items-center justify-center w-full h-full">
      <div className="relative overflow-hidden rounded-full w-full h-full">
        <Image
          src="/images/logo/Logo.png" /* Place your logo image at this path */
          alt="Fit 4 Existence Logo"
          width={dimensions[size].width}
          height={dimensions[size].height}
          priority
          className="object-contain w-full h-full"
        />
      </div>
    </div>
  );
}
