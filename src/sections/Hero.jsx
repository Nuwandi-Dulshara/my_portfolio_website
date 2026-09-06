import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import {
  GitFork,
  Link,
  Mail,
  ArrowRight,
  Download,
  MapPin,
  Code2,
  Brain,
  Database,
} from "lucide-react";
import useMousePosition from "../hooks/useMousePosition";

const techStack = [
  "React",
  "Python",
  "Django",
  "Node.js",
  "AI",
  "ML",
  "Data",
];

const focusAreas = [
  { icon: Code2, label: "Software Engineering" },
  { icon: Brain, label: "AI / ML" },
  { icon: Database, label: "Data Systems" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Nuwandi-Dulshara",
    icon: GitFork,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/nuwandi-dulshara",
    icon: Link,
  },
  { label: "Email", href: "mailto:nuwandi@example.com", icon: Mail },
];

export default function Hero() {
  const mouse = useMousePosition();
  const cardRef = useRef(null);

  // Smooth spring for card tilt (desktop only)
  const rotateX = useSpring(useMotionValue(0), { stiffness: 80, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 80, damping: 20 });

  const handleMouseMove = () => {
    rotateX.set(-mouse.y * 8);
    rotateY.set(mouse.x * 8);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background glow orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-20 -left-20 w-72 h-72 md:w-96 md:h-96 rounded-full bg-blue-600/10 blur-3xl animate-pulse-glow" />
        <div
          className="absolute top-1/3 right-0 w-64 h-64 md:w-80 md:h-80 rounded-full bg-sky-400/8 blur-3xl animate-pulse-glow"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute bottom-0 left-1/3 w-56 h-56 rounded-full bg-blue-500/6 blur-3xl animate-pulse-glow"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── LEFT COLUMN — Text ─────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Label */}
            <motion.p
              className="text-sky-400 tracking-[0.3em] uppercase text-xs font-semibold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              Portfolio
            </motion.p>

            {/* Name */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
            >
              Nuwandi
              <br />
              <span className="gradient-text">Dulshara</span>
            </motion.h1>

            {/* Title */}
            <motion.p
              className="mt-3 text-lg md:text-xl text-sky-300/80 font-medium tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
            >
              Full-Stack Software Engineer
            </motion.p>

            {/* Tagline */}
            <motion.p
              className="mt-5 text-base md:text-lg text-slate-400 leading-relaxed max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              Building intelligent, data-driven digital products.
              <br className="hidden sm:block" />
              Passionate about AI, ML &amp; scalable systems.
            </motion.p>

            {/* Tech stack line */}
            <motion.div
              className="mt-5 flex flex-wrap gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              aria-label="Technologies"
            >
              {techStack.map((tech, i) => (
                <span key={tech} className="flex items-center gap-2">
                  <span className="text-sm text-slate-500 font-mono">{tech}</span>
                  {i < techStack.length - 1 && (
                    <span className="text-sky-400/30 text-xs">•</span>
                  )}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="mt-8 flex flex-wrap items-center gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm bg-sky-500/20 border border-sky-400/50 text-sky-100 hover:bg-sky-500/30 hover:border-sky-300/80 hover:shadow-[0_0_35px_rgba(56,189,248,0.25)] transition-all duration-300"
              >
                Explore My Work
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/resume/nuwandi-dulshara-resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm bg-transparent border border-sky-400/25 text-sky-100/90 hover:bg-sky-400/10 hover:border-sky-400/55 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="mt-8 flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
            >
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="flex items-center gap-2 text-slate-500 hover:text-sky-300 transition-colors duration-200 group"
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-xs hidden sm:inline opacity-0 group-hover:opacity-100 transition-opacity">
                    {label}
                  </span>
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT COLUMN — Glass Profile Card ──────── */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              style={{ rotateX, rotateY, transformPerspective: 1000 }}
              className="animate-float w-full max-w-xs sm:max-w-sm"
            >
              {/* Card */}
              <div
                className="glass-card rounded-3xl p-7 relative overflow-hidden"
                style={{
                  background: "rgba(8, 25, 45, 0.55)",
                  border: "1px solid rgba(56, 189, 248, 0.18)",
                  boxShadow:
                    "0 20px 70px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08)",
                }}
              >
                {/* Top accent gradient */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent"
                />

                {/* Card header */}
                <div className="flex items-center justify-between mb-6">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-sky-400/70 font-semibold">
                    nuwandi.dev
                  </p>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] text-slate-500">Available</span>
                  </span>
                </div>

                {/* Avatar placeholder */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-600/30 to-blue-700/30 border border-sky-400/20 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-sky-300">N</span>
                </div>

                {/* Name & title */}
                <h2 className="text-xl font-bold text-white">Nuwandi Dulshara</h2>
                <p className="text-sm text-sky-300/80 mt-1">
                  Full-Stack Software Engineer
                </p>

                {/* Focus areas */}
                <div className="mt-5 space-y-2.5">
                  {focusAreas.map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-sky-400/10 border border-sky-400/18 flex items-center justify-center shrink-0">
                        <Icon className="w-3.5 h-3.5 text-sky-400" />
                      </div>
                      <span className="text-xs text-slate-400">{label}</span>
                    </div>
                  ))}
                </div>

                {/* Location */}
                <div className="mt-5 flex items-center gap-2 text-slate-500">
                  <MapPin className="w-3.5 h-3.5" />
                  <span className="text-xs">Sri Lanka</span>
                </div>

                {/* Divider */}
                <div className="mt-5 pt-5 border-t border-sky-400/12">
                  <div className="flex items-center gap-3">
                    {socialLinks.map(({ label, href, icon: Icon }) => (
                      <a
                        key={label}
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                        aria-label={label}
                        className="p-2 rounded-lg border border-sky-400/15 text-slate-500 hover:text-sky-300 hover:border-sky-400/40 hover:bg-sky-400/8 transition-all duration-200"
                      >
                        <Icon className="w-3.5 h-3.5" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Bottom glow */}
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-blue-600/8 to-transparent pointer-events-none"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          aria-hidden="true"
        >
          <span className="text-[10px] tracking-widest uppercase text-slate-600">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-sky-400/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
