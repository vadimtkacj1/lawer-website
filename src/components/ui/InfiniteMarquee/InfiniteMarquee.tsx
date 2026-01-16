
"use client";
import React, { useMemo, memo } from "react";
import { usePerformanceSettings } from "@/lib/usePerformanceSettings";

interface MarqueeProps {
  dataArray: string[];
  dataType?: "image" | "text";
  speed?: number;
  direction?: "left" | "right";
  className?: string;
  preserveColors?: boolean;
}

function InfiniteMarquee({
  dataArray,
  dataType = "image",
  speed = 40,
  direction = "left",
  className = "",
  preserveColors = false,
}: MarqueeProps) {
  const duplicatedData = useMemo(() => [...dataArray, ...dataArray], [dataArray]);
  const { isMobile } = usePerformanceSettings();

  // Замедляем анимацию на мобилках для экономии ресурсов
  const adjustedSpeed = isMobile ? speed * 1.5 : speed;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .mq-viewport {
          width: 100%;
          overflow: hidden;
          position: relative;
          background: transparent;
          /* КРИТИЧНО: Переопределяем RTL на LTR для корректной работы */
          direction: ltr;
          mask-image: linear-gradient(to right, transparent, black 5rem, black calc(100% - 5rem), transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 5rem, black calc(100% - 5rem), transparent);
        }

        .mq-track {
          display: flex;
          align-items: center;
          width: max-content;
          flex-wrap: nowrap;
          gap: 2rem;
          padding: 1.5rem 0;
          animation: marquee-scroll ${adjustedSpeed}s linear infinite;
          animation-direction: ${direction === "left" ? "normal" : "reverse"};
          ${!isMobile ? 'will-change: transform;' : ''}
        }

        @media (min-width: 768px) {
          .mq-track {
            gap: 4.8rem;
            padding: 3rem 0;
          }
        }

        .mq-track:hover {
          animation-play-state: paused;
        }

        .mq-item {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mq-img {
          height: 2.2rem;
          width: auto;
          filter: ${preserveColors ? 'none' : 'grayscale(100%)'};
          opacity: ${preserveColors ? '1' : '0.6'};
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          object-fit: contain;
        }

        @media (min-width: 768px) {
          .mq-img {
            height: 3.8rem;
          }
        }

        .mq-item:hover .mq-img {
          filter: ${preserveColors ? 'none' : 'grayscale(0%)'};
          opacity: 1;
          transform: scale(1.12);
        }

        .mq-pill {
          border: 1px solid rgba(255,255,255,0.2);
          background-color: #141414;
          border-radius: 999px;
          padding: 0.8rem 1.5rem;
          color: white;
          white-space: nowrap;
          font-weight: 600;
        }

        @media (min-width: 768px) {
          .mq-pill {
            padding: 1rem 2.5rem;
            font-size: 1.1rem;
          }
        }
      `}} />

      <div className={`mq-viewport ${className}`}>
        <div className="mq-track">
          {duplicatedData.map((item, index) => (
            <div key={index} className="mq-item">
              {dataType === "image" ? (
                <img
                  src={item}
                  alt={`logo-${index}`}
                  className="mq-img"
                  loading="eager" 
                />
              ) : (
                <p className="mq-pill">{item}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default memo(InfiniteMarquee);