"use client";
import { useEffect, useRef, useState } from "react";

export default function Marquee({
  children,
  speed = 50, // px/saniyə
  className = "",
  pauseOnHover = true,
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  pauseOnHover?: boolean;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const pausedRef = useRef(false);
  const [repeat, setRepeat] = useState(2);

  // Ekran/konteyner enindən asılı olmayaraq məzmunu kifayət qədər təkrarla
  useEffect(() => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return;

    const calcRepeat = () => {
      const oneSetWidth = track.scrollWidth / repeat;
      const containerWidth = wrap.offsetWidth;
      if (oneSetWidth === 0) return;
      // Ən azı konteynerdən 2.5 qat geniş olsun ki, boşluq görünməsin
      const needed = Math.ceil((containerWidth * 2.5) / oneSetWidth);
      if (needed > repeat) setRepeat(needed);
    };

    calcRepeat();
    const ro = new ResizeObserver(calcRepeat);
    ro.observe(wrap);
    return () => ro.disconnect();
  }, [repeat]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let singleWidth = track.scrollWidth / repeat;
    let rafId: number;
    let last = performance.now();

    const updateWidth = () => {
      singleWidth = track.scrollWidth / repeat;
    };
    const ro = new ResizeObserver(updateWidth);
    ro.observe(track);

    const step = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;

      if (!pausedRef.current && singleWidth > 0) {
        posRef.current -= speed * dt;
        if (posRef.current <= -singleWidth) {
          posRef.current += singleWidth;
        }
        track.style.transform = `translate3d(${posRef.current}px,0,0)`;
      }
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, [speed, repeat]);

  return (
    <div
      ref={wrapRef}
      className={`overflow-hidden ${className}`}
      onMouseEnter={() => pauseOnHover && (pausedRef.current = true)}
      onMouseLeave={() => pauseOnHover && (pausedRef.current = false)}
    >
      <div ref={trackRef} className="flex w-max will-change-transform">
        {Array.from({ length: repeat }).map((_, i) => (
          <div key={i} className="flex shrink-0">
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}