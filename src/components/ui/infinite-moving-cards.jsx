"use client";

import { cn } from "../../lib/utils";
import React, { useEffect, useState } from "react";
import { useTranslations } from 'next-intl';

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className
}) => {
  const t = useTranslations('HomePage');
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "70s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "130s");
      }
    }
  };

  // Museum-style quote icon
  const QuoteIcon = () => (
    <svg
      className="w-6 h-6 text-amber-300/20 absolute top-6 right-6"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
    </svg>
  );

  // Elegant star rating for museum testimonials
  const StarRating = ({ rating = 5 }) => (
    <div className="flex gap-1 mb-4">
      {[...Array(rating)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400 fill-current opacity-80" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.602-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-8 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className={cn(
              "relative w-[400px] max-w-full shrink-0 rounded-2xl overflow-hidden",
              "group cursor-pointer"
            )}
            key={`${item.name}-${idx}`}
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.4) 100%)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.05)'
            }}
          >
            {/* Subtle museum lighting effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50/10 via-transparent to-gray-50/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Elegant border glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-200/20 via-amber-100/10 to-amber-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm" />

            <blockquote className="relative z-10 p-8">
              <QuoteIcon />

              {/* Museum-style exhibit placard header */}
              <div className="mb-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full mb-4"
                  style={{
                    background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(245, 158, 11, 0.05) 100%)',
                    border: '1px solid rgba(245, 158, 11, 0.2)'
                  }}>
                  <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2 animate-pulse" />
                  <span className="text-xs font-light uppercase tracking-wider text-amber-700">
                    {t('clientTestimonial')}
                  </span>
                </div>
                <StarRating />
              </div>

              <div className="relative">
                <span className="relative z-20 text-base leading-relaxed font-light text-gray-700 mb-8 block">
                  "{item.quote}"
                </span>

                {/* Museum-style divider */}
                <div className="w-16 h-px bg-amber-300 mb-6 opacity-60" />

                <div className="relative z-20 flex flex-row items-center">
                  {/* Elegant avatar with museum styling */}
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mr-5 shadow-lg group-hover:shadow-xl transition-shadow duration-500"
                    style={{
                      background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.8) 0%, rgba(217, 119, 6, 0.9) 100%)',
                      boxShadow: '0 4px 20px rgba(245, 158, 11, 0.25)'
                    }}
                  >
                    <span className="text-white font-light text-lg tracking-wide">
                      {item.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>

                  <span className="flex flex-col gap-1">
                    <span className="text-lg font-light text-gray-800 tracking-wide">
                      {item.name}
                    </span>
                    <span className="text-sm text-gray-500 leading-relaxed font-light tracking-wide">
                      {item.title}
                    </span>
                  </span>
                </div>
              </div>

              {/* Museum-style decorative elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-100/10 to-transparent rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-gray-100/10 to-transparent rounded-tr-full" />

              {/* Subtle corner accent */}
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-amber-200/30 rounded-br-lg" />
            </blockquote>

            {/* Hover state enhancement */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(245, 158, 11, 0.02) 100%)',
                boxShadow: '0 12px 40px rgba(245, 158, 11, 0.08)'
              }}
            />
          </li>
        ))}
      </ul>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-scroll {
          animation: scroll var(--animation-duration, 130s) linear infinite var(--animation-direction, forwards);
        }
      `}</style>
    </div>
  );
};