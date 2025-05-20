import React from 'react';

// Background gradient component for alternating corners in different sections
type CornerGlowProps = {
  position: 'top-right-bottom-left' | 'top-left-bottom-right';
  section: string;
};

export function SectionCornerGlow({ position, section }: CornerGlowProps) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {position === 'top-right-bottom-left' ? (
        // Top right and bottom left corners
        <>
          {/* Top right corner */}
          <div 
            className="absolute -top-20 -right-20 w-[25rem] h-[25rem] rounded-full opacity-20 bg-primary/20 blur-[6rem]" 
            aria-hidden="true"
          />
          
          {/* Bottom left corner */}
          <div 
            className="absolute -bottom-20 -left-20 w-[25rem] h-[25rem] rounded-full opacity-20 bg-accent-foreground/15 blur-[6rem]" 
            aria-hidden="true"
          />
        </>
      ) : (
        // Top left and bottom right corners
        <>
          {/* Top left corner */}
          <div 
            className="absolute -top-20 -left-20 w-[25rem] h-[25rem] rounded-full opacity-20 bg-accent-foreground/15 blur-[6rem]" 
            aria-hidden="true"
          />
          
          {/* Bottom right corner */}
          <div 
            className="absolute -bottom-20 -right-20 w-[25rem] h-[25rem] rounded-full opacity-20 bg-primary/20 blur-[6rem]" 
            aria-hidden="true"
          />
        </>
      )}
    </div>
  );
} 