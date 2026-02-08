"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export const InfiniteMovingLogos = ({
    items,
    direction = "left",
    speed = "slow",
    pauseOnHover = true,
    className
}) => {
    const containerRef = React.useRef(null);
    const scrollerRef = React.useRef(null);

    useEffect(() => {
        if (items && items.length > 0) {
            addAnimation();
        }
    }, [items]);

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
                containerRef.current.style.setProperty("--animation-duration", "15s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "30s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "60s");
            }
        }
    };

    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 max-w-7xl overflow-hidden",
                "[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex w-max min-w-full shrink-0 flex-nowrap gap-16 md:gap-24 py-12 items-center",
                    start && "animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items.map((item, idx) => (
                    <li
                        className="relative flex-shrink-0 flex flex-col items-center justify-center gap-6 transition-all duration-500 opacity-90 hover:opacity-100 group"
                        key={`${item.id}-${idx}`}
                    >
                        <div className="relative w-32 h-16 md:w-44 md:h-20 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                            {item.logo ? (
                                <Image
                                    src={item.logo}
                                    alt={item.name}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 128px, 176px"
                                />
                            ) : (
                                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center border border-gray-200">
                                    <span className="text-gray-400 text-[10px] font-light uppercase tracking-tighter">Logo</span>
                                </div>
                            )}
                        </div>

                        {/* Client Name Label */}
                        <div className="flex flex-col items-center">
                            <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-light text-gray-500 group-hover:text-amber-700 transition-colors text-center whitespace-nowrap">
                                {item.name}
                            </span>
                            {/* Subtle museum-style underline on hover */}
                            <div className="w-0 h-px bg-amber-400 group-hover:w-full transition-all duration-500 mt-2 opacity-60" />
                        </div>
                    </li>
                ))}
            </ul>

            <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-scroll {
          animation: scroll var(--animation-duration, 80s) linear infinite var(--animation-direction, forwards);
        }
      `}</style>
        </div>
    );
};
