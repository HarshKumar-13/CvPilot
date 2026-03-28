"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    // SECTION DETECTION (future ready)
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4">
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between rounded-full transition-all duration-500
        
        ${
          scrolled
            ? "px-5 py-2 bg-white/70 backdrop-blur-2xl border border-black/10 shadow-lg"
            : "px-7 py-3 bg-white/10 backdrop-blur-md border border-white/20"
        }
        `}
      >
        {/* LOGO */}
        <div
          className={`font-semibold tracking-wide transition-all duration-300 ${
            scrolled ? "text-black text-base" : "text-white text-lg"
          }`}
        >
          CvPilot
        </div>

        {/* CTA */}
        <button
          className={`rounded-full transition-all duration-300 hover:scale-105
        
        ${
          scrolled
            ? "bg-black text-white px-5 py-2 text-sm hover:bg-black/80 shadow-md"
            : "border border-white/20 text-white bg-white/10 px-6 py-2 text-sm backdrop-blur-md hover:bg-white/20"
        }
        `}
        >
          Get Started
        </button>
      </div>
    </header>
  );
}