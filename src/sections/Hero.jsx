import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import {
  Download,
  CheckCircle2,
  MapPin,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import useMousePosition from "../hooks/useMousePosition";

// Authentic Brand SVGs
function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

const techPills = [
  "React",
  "Next.js",
  "Laravel",
  "Django",
  "Python",
];

export default function Hero() {
  const mouse = useMousePosition();
  const heroRef = useRef(null);

  // Smooth springs for 3D card tilt & parallax
  const rotateX = useSpring(useMotionValue(0), { stiffness: 90, damping: 22 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 90, damping: 22 });
  const transX = useSpring(useMotionValue(0), { stiffness: 70, damping: 25 });
  const transY = useSpring(useMotionValue(0), { stiffness: 70, damping: 25 });

  // Update card tilt according to mouse position
  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const normX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const normY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

    rotateX.set(-normY * 10);
    rotateY.set(normX * 12);
    transX.set(normX * 10);
    transY.set(normY * 8);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    transX.set(0);
    transY.set(0);
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#020617] pt-16 pb-12"
      aria-label="Hero section"
    >
      {/* ── 1. FULL-SCREEN CINEMATIC PORTRAIT BACKGROUND ─────────────────────── */}
      <div className="absolute inset-0 select-none pointer-events-none overflow-hidden">
        <img
          src="/images/nuwandi-hero-bg.jpg"
          alt="Nuwandi Dulshara portrait in cinematic tech environment"
          className="w-full h-full object-cover object-[center_30%] sm:object-[center_28%] lg:object-[center_25%] scale-[1.02] filter brightness-[0.92] contrast-[1.05]"
        />

        {/* Ambient Dark Navy & Vignette Layers */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/50 via-transparent to-[#020617]/50" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 45%, transparent 40%, rgba(2, 6, 23, 0.7) 100%)",
          }}
        />

        {/* Bottom fade blending seamlessly into the rest of the website */}
        <div className="absolute bottom-0 inset-x-0 h-32 sm:h-44 bg-gradient-to-t from-[#020617] to-transparent" />
      </div>

      {/* ── 2. HOLOGRAPHIC PROJECTION & GLOW OVER THE PALM ───────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center z-10"
      >
        {/* Soft cyan pool on the open palm */}
        <div
          className="absolute bottom-[10%] sm:bottom-[12%] lg:bottom-[15%] w-72 sm:w-96 h-28 sm:h-36 rounded-full bg-sky-400/20 blur-3xl animate-pulse-glow"
          style={{ animationDuration: "4s" }}
        />
        {/* Conical holographic emitter beam */}
        <div className="absolute bottom-[14%] sm:bottom-[18%] lg:bottom-[20%] w-60 sm:w-80 h-32 holo-beam-glow opacity-60" />
      </div>

      {/* ── 3. 3D FLOATING HOLOGRAPHIC PROFILE CARD ──────────────────────────── */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center min-h-[calc(100vh-5rem)]">
        <motion.div
          style={{
            rotateX,
            rotateY,
            x: transX,
            y: transY,
            transformPerspective: 1200,
          }}
          className="w-full flex justify-center items-center"
        >
          {/* Levitation Floating Loop */}
          <motion.div
            animate={{
              y: [-7, 7, -7],
              rotateZ: [-0.6, 0.6, -0.6],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-full max-w-[340px] sm:max-w-[420px] md:max-w-[460px]"
          >
            {/* Hologram Glass Card Container */}
            <div className="hologram-card relative rounded-3xl p-5 sm:p-7 md:p-8 backdrop-blur-2xl text-white select-none">
              {/* Refractive Edge Bevel */}
              <div className="hologram-glass-edge" />

              {/* Dynamic Mouse Glare Sweep */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-full bg-gradient-to-tr from-transparent via-white/5 to-transparent rotate-45 transition-transform duration-700"
                style={{
                  transform: `translate(${mouse.x * 25}px, ${mouse.y * 25}px) rotate(45deg)`,
                }}
              />



              {/* Profile Photo & Identity Section */}
              <div className="flex items-center gap-4 sm:gap-5 mb-5">
                {/* Profile Photo with Cyan Hologram Ring */}
                <div className="relative shrink-0">
                  {/* Outer Glowing Halo */}
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-600 opacity-75 blur-sm animate-pulse-glow" />
                  <div className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-full p-[2px] bg-gradient-to-tr from-sky-400 via-cyan-300 to-blue-500 shadow-[0_0_20px_rgba(56,189,248,0.5)]">
                    <img
                      src="/images/nuwandi-avatar.jpg"
                      alt="Nuwandi Dulshara"
                      className="w-full h-full object-cover rounded-full bg-slate-900"
                    />
                  </div>
                </div>

                {/* Name & Title */}
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <h1 className="font-josefin text-2xl sm:text-3xl font-bold text-white tracking-wide leading-tight">
                      Nuwandi Dulshara
                    </h1>
                    <CheckCircle2
                      className="w-4 h-4 text-sky-400 shrink-0"
                      aria-label="Verified Profile"
                    />
                  </div>
                  <p className="font-dmsans text-sm sm:text-[15px] font-medium text-sky-300 mt-1 tracking-wide">
                    Full-Stack Software Engineer
                  </p>
                  <div className="font-inter flex items-center gap-1.5 text-slate-400 text-xs mt-1">
                    <MapPin className="w-3 h-3 text-sky-400/80 shrink-0" />
                    <span>Sri Lanka • Remote</span>
                  </div>
                </div>
              </div>

              {/* Tagline / Focus Areas */}
              <div className="mb-5 px-3.5 py-2.5 rounded-2xl bg-sky-950/40 border border-sky-400/20 backdrop-blur-md flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-sky-400 shrink-0" />
                <p className="font-poppins text-xs sm:text-[13px] font-medium text-sky-100 tracking-wide">
                  AI • ML • Data Enthusiast
                </p>
              </div>

              {/* Tech Stack Pills */}
              <div className="mb-6">
                <p className="font-inter text-[10px] font-semibold tracking-widest uppercase text-slate-400 mb-2.5">
                  Core Technologies
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {techPills.map((tech) => (
                    <span
                      key={tech}
                      className="font-inter px-2.5 py-1 text-xs font-medium rounded-lg bg-sky-500/10 border border-sky-400/25 text-sky-200 hover:border-sky-300 hover:bg-sky-400/20 hover:text-white transition-all duration-200 shadow-[0_0_8px_rgba(56,189,248,0.1)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons: GitHub, LinkedIn, Download CV */}
              <div className="flex items-center gap-2.5 pt-4 border-t border-sky-400/20">
                {/* Download CV CTA */}
                <a
                  href="/resume/nuwandi-dulshara-resume.pdf"
                  download
                  className="font-poppins flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-gradient-to-r from-sky-500/30 via-blue-600/30 to-sky-500/30 hover:from-sky-500/45 hover:via-blue-600/45 hover:to-sky-500/45 border border-sky-400/50 text-white shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-all duration-300 group tracking-wide"
                >
                  <Download className="w-4 h-4 text-sky-300 group-hover:scale-110 transition-transform" />
                  <span>Download CV</span>
                </a>

                {/* GitHub Button */}
                <a
                  href="https://github.com/Nuwandi-Dulshara"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-400/25 text-slate-300 hover:text-white hover:border-sky-300/60 hover:bg-sky-400/20 hover:shadow-[0_0_15px_rgba(56,189,248,0.25)] transition-all duration-200"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                {/* LinkedIn Button */}
                <a
                  href="https://www.linkedin.com/in/nuwandi-dulshara-523365251/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-400/25 text-slate-300 hover:text-white hover:border-sky-300/60 hover:bg-sky-400/20 hover:shadow-[0_0_15px_rgba(56,189,248,0.25)] transition-all duration-200"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>

              {/* Bottom Holographic Emitter Light Strip */}
              <div
                aria-hidden="true"
                className="absolute -bottom-px inset-x-8 h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent shadow-[0_0_15px_#38bdf8]"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Subtle Scroll Down Prompt */}
        <motion.div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 select-none pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <span className="font-inter text-[10px] tracking-[0.3em] uppercase text-sky-400/70 font-semibold">
            EXPLORE
          </span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown className="w-4 h-4 text-sky-400/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
