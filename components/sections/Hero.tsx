import Navbar from "@/components/ui/Navbar";

export default function Hero() {
  return (
    <section className="relative min-h-screen text-white overflow-hidden bg-[#12002B]">

      {/* Navbar */}
      <Navbar />

      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,122,0,0.25),transparent_40%)]"></div>

      {/* Content */}
      <div className="relative container pt-44 pb-32">
        <div className="grid grid-cols-2 gap-24 items-center">

          {/* LEFT */}
          <div className="max-w-[640px]">

            {/* Heading */}
            <h1 className="text-[72px] font-semibold leading-[1.05] tracking-tight">
              Quick Resume <br />
              Creation Using <br />
              Smart AI
            </h1>

            {/* Subtext */}
            <p className="mt-8 text-white/70 text-lg leading-relaxed max-w-[520px]">
              Build professional resumes effortlessly. Our AI-powered tools help you create impactful resumes in minutes.
            </p>

            {/* BADGES (Moved ABOVE CTA) */}
            <div className="mt-8 flex gap-4 relative">

              {/* Glow behind badges */}
              <div className="absolute -inset-4 bg-purple-500/20 blur-2xl rounded-full"></div>

              {/* Badge 1 */}
              <div className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm backdrop-blur-md">
                ⚡ Instant Results
              </div>

              {/* Badge 2 */}
              <div className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm backdrop-blur-md">
                🧠 Professional
              </div>

              {/* Badge 3 */}
              <div className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm backdrop-blur-md">
                ✍️ Automated Writing
              </div>

            </div>

            {/* CTA */}
            <div className="mt-10">
              <button className="bg-white text-black px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_40px_rgba(255,255,255,0.4)]">
                Get Started
              </button>
            </div>

          </div>

          {/* RIGHT */}
          <div className="flex justify-center">

            {/* Outer Frame */}
            <div className="w-[420px] rounded-[32px] bg-white/10 border border-white/20 backdrop-blur-xl p-5 shadow-[0_40px_120px_rgba(0,0,0,0.6)]">

              {/* Top Card */}
              <div className="bg-white rounded-2xl p-5 shadow">
                <p className="text-sm text-gray-600">
                  Create Your Perfect Resume <br /> in Minutes with AI
                </p>

                <div className="mt-4 h-24 bg-gray-200 rounded-xl"></div>

                <button className="mt-4 bg-black text-white text-sm px-4 py-2 rounded">
                  Start for Free
                </button>
              </div>

              {/* Documents */}
              <div className="mt-4 bg-white rounded-2xl p-5 shadow">
                <p className="text-sm font-medium">My Documents</p>

                <div className="mt-3 h-20 bg-gray-200 rounded-xl"></div>

                <div className="mt-3 text-xs text-gray-500">
                  New resume • 92% Score
                </div>
              </div>

              {/* Bottom Bar */}
              <div className="mt-4 flex items-center justify-between bg-white/20 rounded-xl px-4 py-3 backdrop-blur-md">
                <span className="text-sm">Smart AI Powered</span>

                <button className="bg-white text-black text-xs px-4 py-1 rounded-full">
                  Try Now
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}