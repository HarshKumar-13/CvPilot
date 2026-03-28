"use client";

import { motion } from "framer-motion";

export default function TemplatesSection() {
  return (
    <section className="relative py-32 text-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D001F] via-[#12002B] to-[#0D001F]" />

      {/* SOFT CENTER GLOW */}
      <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 bg-purple-600/20 blur-[220px]" />

      <div className="relative container">
        <div className="grid grid-cols-2 gap-24 items-start">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-[460px]"
          >

            <h2 className="text-[44px] font-semibold leading-[1.15] tracking-tight">
              Build your Standout Resume with a User-Loved Template Style.
            </h2>

            <p className="mt-6 text-white/70 text-[15px] leading-relaxed">
              Create a resume that shines using professionally designed templates loved by thousands—perfect for grabbing recruiter attention and landing interviews.
            </p>

            <button className="mt-8 bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:scale-105 transition">
              Get Started
            </button>

          </motion.div>

          {/* RIGHT GRID */}
          <div className="grid grid-cols-2 gap-8">

            {[
              {
                title: "Innovative Portfolio",
                glow: "group-hover:shadow-[0_0_60px_rgba(34,197,94,0.4)]",
              },
              {
                title: "Tech Friendly Resume",
                glow: "group-hover:shadow-[0_0_60px_rgba(239,68,68,0.4)]",
              },
              {
                title: "Bold Impact Resume",
                glow: "group-hover:shadow-[0_0_60px_rgba(249,115,22,0.4)]",
              },
              {
                title: "Minimalist Focus",
                glow: "group-hover:shadow-[0_0_60px_rgba(59,130,246,0.4)]",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-[28px] p-[1px]"
              >

                {/* GLASS CARD */}
                <div
                  className={`rounded-[26px] p-6 h-[320px] bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl transition duration-300 ${card.glow}`}
                >

                  {/* TITLE */}
                  <h3 className="text-[28px] font-semibold leading-tight">
                    {card.title}
                  </h3>

                  {/* IMAGE */}
                  <div className="mt-6 rounded-xl overflow-hidden border border-white/10 bg-black/20">

                    <img
                      src="https://picsum.photos/300/220"
                      className="w-full h-44 object-cover opacity-90"
                    />

                  </div>

                </div>

              </motion.div>
            ))}

          </div>

        </div>
      </div>

    </section>
  );
}