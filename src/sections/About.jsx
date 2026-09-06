import { motion } from "motion/react";
import {
  Brain,
  Network,
  BarChart3,
  Workflow,
  TrendingUp,
  Code2,
  MapPin,
  GraduationCap,
  Briefcase,
  Sparkles,
  Terminal,
} from "lucide-react";

// Current focus areas with respective icons and descriptions
const currentFocusItems = [
  {
    name: "Artificial Intelligence",
    icon: Brain,
    desc: "Intelligent systems & automation",
  },
  {
    name: "Machine Learning",
    icon: Network,
    desc: "Predictive models & algorithms",
  },
  {
    name: "Data Science",
    icon: BarChart3,
    desc: "Statistical insights & extraction",
  },
  {
    name: "Data Engineering",
    icon: Workflow,
    desc: "Scalable ETL & data pipelines",
  },
  {
    name: "Data Analytics",
    icon: TrendingUp,
    desc: "Business intelligence & dashboards",
  },
  {
    name: "Full-Stack Development",
    icon: Code2,
    desc: "End-to-end scalable web systems",
  },
];

// Quick facts data
const quickFacts = [
  {
    icon: MapPin,
    label: "Location",
    value: "Sri Lanka",
    secondary: "Open to remote worldwide",
  },
  {
    icon: GraduationCap,
    label: "Education",
    value: "BICT — Software Engineering",
    secondary: "University of Kelaniya",
  },
  {
    icon: Briefcase,
    label: "Experience",
    value: "Associate SE + Intern + Freelancer",
    secondary: "Production & client solutions",
  },
  {
    isStatus: true,
    label: "Availability",
    value: "Open to New Opportunities",
    secondary: "Full-time & freelance projects",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 bg-[#050816] overflow-hidden"
      aria-label="About section"
    >
      {/* ── 1. SUBTLE AMBIENT BACKGROUND GLOWS ───────────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden select-none"
      >
        {/* Soft electric blue glow at upper right */}
        <div className="absolute -top-24 right-0 w-[500px] h-[500px] rounded-full bg-blue-600/8 blur-[120px] animate-pulse-glow" />

        {/* Soft cyan glow near lower left */}
        <div
          className="absolute bottom-10 -left-20 w-[450px] h-[450px] rounded-full bg-sky-400/6 blur-[120px] animate-pulse-glow"
          style={{ animationDelay: "2s" }}
        />

        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(to right, #38bdf8 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="section-container relative z-10">
        {/* ── 2. SECTION HEADER ─────────────────────────────────────────────── */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-3"
          >
            <span className="font-inter text-xs tracking-[0.3em] uppercase font-semibold text-sky-400 drop-shadow-[0_0_12px_rgba(56,189,248,0.5)]">
              ABOUT
            </span>
            <span className="h-px w-10 bg-sky-400/30" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="font-josefin text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-wide leading-tight"
          >
            Who <span className="gradient-text">I Am</span>
          </motion.h2>
        </div>

        {/* ── 3. TWO-COLUMN HERO-STYLE LAYOUT ───────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-24 md:mb-32">
          {/* ── LEFT SIDE: INTRODUCTION WITH SCROLL ACCENT ── */}
          <motion.div
            className="lg:col-span-7 flex gap-5 sm:gap-7"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Illuminated vertical scroll/accent line */}
            <div
              aria-hidden="true"
              className="w-1 sm:w-1.5 shrink-0 rounded-full bg-gradient-to-b from-sky-400 via-blue-500 to-sky-400/10 shadow-[0_0_15px_rgba(56,189,248,0.4)] my-1"
            />

            {/* Paragraph Content */}
            <div className="space-y-6 font-inter text-slate-300 text-base sm:text-[17px] leading-relaxed">
              <p>
                I am a{" "}
                <span className="font-semibold text-white bg-gradient-to-r from-sky-300 via-sky-200 to-cyan-300 bg-clip-text text-transparent">
                  Full-Stack Software Engineer
                </span>{" "}
                focused on building practical, scalable and user-focused digital
                products.
              </p>

              <p className="text-slate-300/90">
                My experience spans frontend development, backend systems,
                databases, REST APIs and complete application development — from
                POS systems and course platforms to AI-powered web
                applications.
              </p>

              <p className="text-slate-300/90">
                I have worked as a Software Engineering Intern and Associate
                Software Engineer in professional environments, while also
                delivering custom software solutions as a freelance developer.
              </p>

              <p>
                I am currently expanding deeper into{" "}
                <span className="font-medium text-sky-300">
                  Artificial Intelligence
                </span>
                ,{" "}
                <span className="font-medium text-sky-300">
                  Machine Learning
                </span>
                ,{" "}
                <span className="font-medium text-sky-300">Data Science</span>{" "}
                and{" "}
                <span className="font-medium text-sky-300">
                  Data Engineering
                </span>
                , with a strong interest in building intelligent, data-driven
                systems that solve real-world problems.
              </p>
            </div>
          </motion.div>

          {/* ── RIGHT SIDE: DEVELOPER VISUAL CARD ── */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.65, delay: 0.15 }}
          >
            <div className="relative rounded-3xl p-6 sm:p-7 md:p-8 bg-[#07111F]/80 border border-sky-400/25 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_30px_rgba(56,189,248,0.12)] overflow-hidden group hover:border-sky-400/40 transition-all duration-300">
              {/* Subtle decorative background watermark */}
              <div
                aria-hidden="true"
                className="absolute -right-4 -bottom-6 text-8xl sm:text-9xl font-mono font-black text-sky-400/[0.04] select-none pointer-events-none"
              >
                &lt;/&gt;
              </div>

              {/* Top Bar: macOS-style indicator dots + terminal badge */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-sky-400/15">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="font-inter text-[11px] font-mono tracking-widest uppercase text-sky-400/80">
                  SYSTEM // ARCHITECTURE
                </span>
              </div>

              {/* Title & Tagline */}
              <div className="mb-6">
                <p className="font-mono text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-sky-400 shrink-0" />
                  <span>&lt; Full-Stack Engineer /&gt;</span>
                </p>
                <p className="font-dmsans text-xs sm:text-sm text-sky-300/80 mt-1.5 leading-snug">
                  Building Software • Exploring Intelligence • Solving Real
                  Problems
                </p>
              </div>

              {/* Minimalist Neural & Workflow Architecture graphic */}
              <div className="p-4 rounded-2xl bg-[#030712]/70 border border-sky-400/15 font-mono text-xs space-y-3">
                <div className="flex items-center justify-between text-[11px] text-slate-400 pb-2 border-b border-white/5">
                  <span className="flex items-center gap-1.5 text-sky-300">
                    <Sparkles className="w-3.5 h-3.5" /> Pipeline Active
                  </span>
                  <span className="text-emerald-400">status: 200 OK</span>
                </div>

                {/* Interactive Node Flow: Data -> Model -> API -> Interface */}
                <div className="grid grid-cols-4 gap-1.5 text-center py-2">
                  <div className="p-2 rounded-xl bg-sky-500/10 border border-sky-400/20 text-sky-200">
                    <span className="block text-[10px] text-slate-400">Input</span>
                    <span className="font-semibold text-xs text-white">Data</span>
                  </div>
                  <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-400/20 text-blue-200">
                    <span className="block text-[10px] text-slate-400">Core</span>
                    <span className="font-semibold text-xs text-white">Model</span>
                  </div>
                  <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-400/20 text-cyan-200">
                    <span className="block text-[10px] text-slate-400">Service</span>
                    <span className="font-semibold text-xs text-white">API</span>
                  </div>
                  <div className="p-2 rounded-xl bg-sky-500/10 border border-sky-400/20 text-sky-200">
                    <span className="block text-[10px] text-slate-400">User</span>
                    <span className="font-semibold text-xs text-white">UI/UX</span>
                  </div>
                </div>

                {/* Code execution simulation */}
                <div className="text-[11px] leading-relaxed text-slate-400 pt-1">
                  <span className="text-blue-400">const</span>{" "}
                  <span className="text-sky-200">developer</span> = &#123;
                  <br />
                  &nbsp;&nbsp;stack: [
                  <span className="text-emerald-300">&quot;React&quot;</span>,{" "}
                  <span className="text-emerald-300">&quot;Next.js&quot;</span>,{" "}
                  <span className="text-emerald-300">&quot;Python&quot;</span>],
                  <br />
                  &nbsp;&nbsp;focus:{" "}
                  <span className="text-cyan-300">
                    &quot;AI &amp; Data-Driven Systems&quot;
                  </span>
                  <br />
                  &#125;;
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── 4. CURRENT FOCUS SUBSECTION ───────────────────────────────────── */}
        <div className="mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between mb-8"
          >
            <div>
              <h3 className="font-josefin text-2xl sm:text-3xl font-bold text-white tracking-wide">
                Current Focus
              </h3>
              <p className="font-inter text-xs sm:text-sm text-slate-400 mt-1">
                Active domains of research, engineering, and continuous mastery
              </p>
            </div>
          </motion.div>

          {/* Responsive Grid of Focus Cards (6 items: 3x2 on desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {currentFocusItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="group relative rounded-2xl p-5 bg-[#07111F]/70 border border-sky-400/15 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-sky-400/40 hover:bg-gradient-to-br hover:from-sky-950/40 hover:to-[#07111F] hover:shadow-[0_12px_28px_-6px_rgba(56,189,248,0.22)] cursor-default"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-sky-400/50 group-hover:bg-sky-400/20 transition-all duration-300">
                      <Icon className="w-5 h-5 text-sky-400 group-hover:text-cyan-300 transition-colors" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-dmsans text-sm sm:text-[15px] font-semibold text-slate-200 group-hover:text-white transition-colors">
                        {item.name}
                      </h4>
                      <p className="font-inter text-xs text-slate-400 mt-0.5 leading-snug group-hover:text-slate-300 transition-colors">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── 5. QUICK FACTS SUBSECTION ─────────────────────────────────────── */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between mb-8"
          >
            <div>
              <h3 className="font-josefin text-2xl sm:text-3xl font-bold text-white tracking-wide">
                Quick Facts
              </h3>
              <p className="font-inter text-xs sm:text-sm text-slate-400 mt-1">
                Essential background credentials and current availability
              </p>
            </div>
          </motion.div>

          {/* 4 Information Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {quickFacts.map((fact, index) => {
              const Icon = fact.icon;
              return (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="group relative rounded-2xl p-6 bg-[#07111F]/70 border border-sky-400/15 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-sky-400/40 hover:bg-gradient-to-br hover:from-sky-950/30 hover:to-[#07111F] hover:shadow-[0_12px_30px_-6px_rgba(56,189,248,0.2)]"
                >
                  {/* Top: Icon or Pulsing Beacon */}
                  <div className="flex items-center justify-between mb-4">
                    {fact.isStatus ? (
                      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30">
                        <span className="flex h-2 w-2 relative">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                        </span>
                        <span className="font-inter text-[11px] font-medium text-emerald-300">
                          Active
                        </span>
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center group-hover:scale-110 group-hover:border-sky-400/50 group-hover:bg-sky-400/20 transition-all duration-300">
                        <Icon className="w-5 h-5 text-sky-400 group-hover:text-cyan-300 transition-colors" />
                      </div>
                    )}

                    <span className="font-inter text-[10px] font-semibold tracking-widest uppercase text-slate-400">
                      {fact.label}
                    </span>
                  </div>

                  {/* Fact Value */}
                  <h4 className="font-dmsans text-base sm:text-lg font-bold text-white group-hover:text-sky-100 transition-colors leading-snug">
                    {fact.value}
                  </h4>

                  {/* Secondary descriptor */}
                  <p className="font-inter text-xs text-slate-400 mt-1 leading-normal">
                    {fact.secondary}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
