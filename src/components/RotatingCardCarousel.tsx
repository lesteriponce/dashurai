import React, { useState } from 'react';

interface Card {
  index: number;
  name: string;
  iconPath: string;
  alt: string;
  summary: string;
}

const RotatingCardCarousel: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [activeCard, setActiveCard] = useState<Card | null>(null);
  const cards: Card[] = [
    { index: 0, name: 'iOS Apple Platform', iconPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg', alt: 'iOS Apple Platform Development', summary: 'Native iOS apps with Swift/Objective-C, optimized for performance, polish, and App Store readiness.' },
    { index: 1, name: 'Android Google Platform', iconPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg', alt: 'Android Google Platform Development', summary: 'Android apps with Kotlin/Java, designed for speed, device compatibility, and scalable architecture.' },
    { index: 2, name: 'Flutter Cross-Platform', iconPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', alt: 'Flutter Cross-Platform Development', summary: 'Single codebase apps for iOS and Android using Flutter, delivering fast iteration and consistent UI.' },
    { index: 3, name: 'Python Backend & AI/ML', iconPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', alt: 'Python Backend Development & AI/ML', summary: 'Backends, automation, and AI/ML pipelines in Python—clean APIs, data workflows, and production reliability.' },
    { index: 4, name: 'Django Python Framework', iconPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', alt: 'Django Python Web Framework', summary: 'Rapid, secure web development with Django—ORM, admin, and proven patterns for scalable services.' },
    { index: 5, name: 'Laravel PHP Framework', iconPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg', alt: 'Laravel PHP Framework', summary: 'Modern PHP apps with Laravel—robust routing, queues, auth, and maintainable server-side features.' },
    { index: 6, name: 'Go System Programming', iconPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg', alt: 'Go System Programming', summary: 'High-performance services in Go—concurrency-first design, low latency, and efficient resource usage.' },
    { index: 7, name: 'Java Enterprise Applications', iconPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', alt: 'Java Enterprise Applications', summary: 'Enterprise-grade systems in Java—stable, scalable APIs and integrations with strong tooling support.' },
    { index: 8, name: 'React JS Frontend', iconPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', alt: 'React JS Frontend Development', summary: 'Modern web UIs with React—component architecture, smooth UX, and production-ready performance.' },
    { index: 9, name: 'Node.js JavaScript Runtime', iconPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', alt: 'Node.js JavaScript Runtime', summary: 'Fast backend services with Node.js—event-driven APIs, integrations, and realtime-ready foundations.' },
    { index: 10, name: 'TypeScript Typed JavaScript', iconPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', alt: 'TypeScript Typed JavaScript', summary: 'Type-safe JavaScript with TypeScript—fewer runtime bugs and cleaner refactors at scale.' },
  ];

  const quantity = cards.length;
  const cardWidth = 200;
  const cardHeight = 200;
  const translateZ = (cardWidth + cardHeight) + 50;
  const rotateX = -15;
  const perspective = 1000;

  const handlePointerDown = (card: Card): React.PointerEventHandler<HTMLDivElement> => (e) => {
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // no-op
    }
    setIsPaused(true);
    setActiveCard(card);
  };

  const handlePointerUpOrCancel: React.PointerEventHandler<HTMLDivElement> = (e) => {
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // no-op
    }
    setIsPaused(false);
    setActiveCard(null);
  };

  return (
    <div className="wrapper w-full h-full relative text-center flex items-center justify-center overflow-hidden">
      {activeCard && (
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <div className="w-[min(520px,90%)] rounded-2xl px-6 py-5 bg-gradient-to-br from-[#0a2a66] via-[#061a3f] to-[#020a18] text-white shadow-[0_18px_45px_rgba(0,0,0,0.45)] ring-1 ring-white/10">
            <div className="flex items-center justify-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-white/10 ring-1 ring-white/10 flex items-center justify-center">
                <img src={activeCard.iconPath} alt={activeCard.alt} className="h-6 w-6 object-contain" />
              </div>
              <div className="text-base font-bold tracking-tight">
                {activeCard.name}
              </div>
            </div>
            <div className="mt-3 text-sm leading-6 text-white/85">
              {activeCard.summary}
            </div>
          </div>
        </div>
      )}
      <div 
        className="inner absolute animate-rotating"
        style={{
          '--w': `${cardWidth}px`,
          '--h': `${cardHeight}px`,
          '--translateZ': `${translateZ}px`,
          '--rotateX': `${rotateX}deg`,
          '--perspective': `${perspective}px`,
          '--quantity': quantity,
          width: `${cardWidth}px`,
          height: `${cardHeight}px`,
          top: '15%',
          left: `calc(50% - (${cardWidth}px / 2) - 2.5px)`,
          zIndex: 2,
          transformStyle: 'preserve-3d',
          transform: `perspective(${perspective}px) translateY(30px)`,
          animationPlayState: isPaused ? 'paused' : 'running',
        } as React.CSSProperties}
      >
        {cards.map((card) => (
          <div
            key={card.index}
            className="card group absolute border-2 rounded-xl overflow-hidden inset-0 bg-white shadow-lg flex flex-col items-center justify-center p-2"
            onPointerDown={handlePointerDown(card)}
            onPointerUp={handlePointerUpOrCancel}
            onPointerCancel={handlePointerUpOrCancel}
            onPointerLeave={handlePointerUpOrCancel}
            style={{
              '--index': card.index,
              borderColor: 'rgba(59, 130, 246, 0.5)',
              transform: `rotateY(${(360 / quantity) * card.index}deg) translateZ(${translateZ}px)`,
            } as React.CSSProperties}
          >
            <div className="img w-full h-full flex items-center justify-center">
              <img 
                src={card.iconPath} 
                alt={card.alt}
                className="w-full h-full object-contain transition-all duration-300 hover:scale-110"
                style={{
                  filter: 'brightness(0) saturate(100%) invert(21%) sepia(39%) saturate(746%) hue-rotate(189deg) brightness(96%) contrast(96%) drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = 'brightness(0) saturate(100%) invert(21%) sepia(39%) saturate(746%) hue-rotate(189deg) brightness(96%) contrast(96%) drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))';
                }}
              />
            </div>
            <div className="text-xs font-semibold text-gray-700 mt-1 text-center transform-gpu opacity-0 scale-95 translate-y-1 transition-all duration-300 ease-out [transform-origin:center] group-hover:opacity-100 group-hover:scale-125 group-hover:translate-y-0 group-hover:drop-shadow-[0_10px_14px_rgba(0,0,0,0.25)] group-hover:[text-shadow:0_1px_0_rgba(255,255,255,0.55),0_8px_14px_rgba(0,0,0,0.35)] group-focus-within:opacity-100 group-focus-within:scale-125 group-focus-within:translate-y-0 group-focus-within:drop-shadow-[0_10px_14px_rgba(0,0,0,0.25)] group-focus-within:[text-shadow:0_1px_0_rgba(255,255,255,0.55),0_8px_14px_rgba(0,0,0,0.35)]">
              {card.name.split(' ').slice(0, 2).join(' ')}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RotatingCardCarousel;
