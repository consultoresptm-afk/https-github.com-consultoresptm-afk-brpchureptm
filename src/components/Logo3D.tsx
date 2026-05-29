import React, { useRef, useState, MouseEvent, useCallback, useEffect } from 'react';

interface Logo3DProps {
  src: string;
  alt: string;
  className?: string;
}

export const Logo3D: React.FC<Logo3DProps> = ({ src, alt, className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [styles, setStyles] = useState({
    transform: 'perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)',
    transition: 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
    boxShadow: '0 4px 6px rgba(0,0,0,0.0)',
  });
  
  const [specularStyle, setSpecularStyle] = useState({
    background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 100%)',
    opacity: 0,
    transition: 'opacity 0.4s ease',
  });

  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (reducedMotion || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const percentX = (x - centerX) / centerX;
    const percentY = (y - centerY) / centerY;

    const maxTilt = 18;
    const rotateX = percentY * -maxTilt;
    const rotateY = percentX * maxTilt;

    setStyles({
      transform: `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.08)`,
      transition: 'none',
      boxShadow: '0 12px 28px rgba(0,0,0,0.22)',
    });

    setSpecularStyle({
      background: `radial-gradient(circle at ${(x / rect.width) * 100}% ${(y / rect.height) * 100}%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 50%)`,
      opacity: 0.18,
      transition: 'none',
    });
  }, [reducedMotion]);

  const handleMouseLeave = useCallback(() => {
    if (reducedMotion) return;

    setStyles({
      transform: 'perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)',
      transition: 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
      boxShadow: '0 4px 6px rgba(0,0,0,0.0)',
    });

    setSpecularStyle({
      background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 50%)',
      opacity: 0,
      transition: 'opacity 0.4s ease',
    });
  }, [reducedMotion]);

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-full ${className}`}
      style={{
        ...styles,
        transformStyle: 'preserve-3d',
        willChange: 'transform, box-shadow',
        cursor: 'pointer',
      }}
    >
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-contain relative z-10"
        style={{ pointerEvents: 'none' }}
      />
      
      {/* Specular reflection overlay */}
      <div 
        className="absolute inset-0 z-20 pointer-events-none rounded-full mix-blend-overlay"
        style={specularStyle}
      />
    </div>
  );
};
