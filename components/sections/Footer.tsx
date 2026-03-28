"use client";

import { useEffect, useRef, useState } from "react";

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer className="bg-white px-6 pt-24 pb-12">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto rounded-[32px] overflow-hidden px-10 py-14 transition-all duration-1000
        ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }
        bg-gradient-to-r from-[#1A0033] via-[#3B0066] to-[#FF6A3D]
        `}
      >
        <div className="flex flex-col gap-10 relative">

          {/* ROW 1 */}
          <div className="flex justify-between items-center">
            <p className="max-w-[420px] text-white/80 text-sm leading-relaxed">
              AI-powered resume builder with smart suggestions and modern
              templates to help you land your next job faster.
            </p>

            <button className="border border-white/30 text-white px-6 py-2 rounded-full text-sm backdrop-blur-md hover:bg-white/10 transition-all duration-300 hover:scale-105">
              Get Started
            </button>
          </div>

          {/* ROW 2 - BIG TEXT */}
          <div className="flex justify-center">
            <h1 className="text-[110px] font-semibold text-white/5 select-none">
              CvPilot
            </h1>
          </div>

          {/* ROW 3 */}
          <div className="flex justify-between items-center text-white/60 text-xs">
            <p>© 2026</p>
            <p>All rights reserved.</p>
          </div>

        </div>
      </div>
    </footer>
  );
}