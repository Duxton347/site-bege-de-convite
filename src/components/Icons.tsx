import React from 'react';

export const Monogram = ({ className = "w-16 h-16", color = "currentColor" }: { className?: string, color?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke={color} strokeWidth="1.5">
    {/* Decorative Circle */}
    <circle cx="50" cy="50" r="45" strokeOpacity="0.5" strokeDasharray="4 4" />
    
    {/* Cord of Three Strands Representation (Braided center) */}
    <path d="M50 20 C 45 30, 55 30, 50 40 C 45 50, 55 50, 50 60 C 45 70, 55 70, 50 80" strokeWidth="2" />
    <path d="M45 20 C 40 30, 50 30, 45 40 C 40 50, 50 50, 45 60 C 40 70, 50 70, 45 80" strokeWidth="2" opacity="0.7" />
    <path d="M55 20 C 50 30, 60 30, 55 40 C 50 50, 60 50, 55 60 C 50 70, 60 70, 55 80" strokeWidth="2" opacity="0.7" />

    {/* Initials J & J */}
    <text x="25" y="60" fontFamily="Great Vibes" fontSize="35" fill={color} stroke="none">J</text>
    <text x="60" y="60" fontFamily="Great Vibes" fontSize="35" fill={color} stroke="none">J</text>
  </svg>
);

export const Divider = ({ className = "w-full" }: { className?: string }) => (
  <div className={`flex items-center justify-center my-8 opacity-60 ${className}`}>
    <div className="h-px bg-wedding-olive w-12 sm:w-24"></div>
    <div className="mx-4 text-wedding-olive">❦</div>
    <div className="h-px bg-wedding-olive w-12 sm:w-24"></div>
  </div>
);
