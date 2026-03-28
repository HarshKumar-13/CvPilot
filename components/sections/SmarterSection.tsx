export default function SmarterSection() {
  return (
    <section className="bg-[#F6F6F8] py-28">

      <div className="container">
        <div className="grid grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div className="relative">

            {/* Outer frame */}
            <div className="rounded-[32px] bg-[#E9D5FF] p-4">

              {/* Glass container */}
              <div className="relative rounded-[24px] overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20 shadow-inner h-[460px]">

                {/* Image */}
                <img
                  src="https://picsum.photos/800/600"
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30"></div>

                {/* Badges */}
                <div className="absolute bottom-6 left-6 space-y-3">

                  {[
                    "Enhances professional tone",
                    "Builds confidence with AI",
                    "Generates tailored content",
                  ].map((text, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-black/50 text-white px-4 py-2 rounded-full backdrop-blur-md shadow-lg text-sm"
                    >
                      <span className="w-6 h-6 flex items-center justify-center bg-white text-black rounded-full text-xs">
                        ✔
                      </span>
                      {text}
                    </div>
                  ))}

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="max-w-[480px]">

            <h2 className="text-[42px] font-semibold text-[#111] leading-[1.2] tracking-tight">
              Let’s Create Smarter <br />
              Resumes, Together <br />
              With AI
            </h2>

            <p className="mt-5 text-gray-500 text-[15px] leading-relaxed">
              Leverage AI-powered resume building to create structured, smart, and job-ready resumes in minutes with minimal effort.
            </p>

            <button className="mt-6 bg-[#1A0033] text-white px-6 py-3 rounded-full text-sm font-medium hover:scale-105 transition">
              Get Started
            </button>

            {/* Feature Cards */}
            <div className="mt-10 grid grid-cols-2 gap-4">

              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mb-3">
                  📄
                </div>
                <h3 className="text-sm font-semibold text-[#111]">
                  Smarter Resumes
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  AI generates structured and impactful resume content.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mb-3">
                  ⚡
                </div>
                <h3 className="text-sm font-semibold text-[#111]">
                  Faster Creation
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Generate polished resumes quickly with AI assistance.
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}