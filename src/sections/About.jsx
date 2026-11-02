import { motion } from "motion/react";
import {
  Brain,
  Network,
  BarChart3,
  Workflow,
  TrendingUp,
  Code2,
  MapPin,
  Globe2,
  CircleCheck,
  GraduationCap,
  Briefcase,
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
    icon: CircleCheck,
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
            <span className="font-ui text-xs tracking-[0.3em] uppercase font-semibold text-sky-400 drop-shadow-[0_0_12px_rgba(56,189,248,0.5)]">
              ABOUT
            </span>
            <span className="h-px w-10 bg-sky-400/30" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="type-section-title font-bold text-white tracking-wide leading-tight"
          >
            Who <span className="gradient-text">I Am</span>
          </motion.h2>
        </div>

        {/* ── 3. INTRODUCTION ──────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-24 md:mb-32">
          <motion.div
            className="lg:col-span-12 flex gap-5 sm:gap-7"
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
            <div className="space-y-6 font-body text-slate-300 text-base sm:text-[17px] leading-relaxed">
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
        </div>

        <div className="focus-showcase">
          <div className="mb-8 sm:mb-10">
            <div aria-hidden="true" className="focus-heading-accent"><span /></div>
            <h3 className="font-section text-2xl sm:text-3xl font-bold text-white tracking-wide">Current Focus</h3>
            <p className="font-body text-xs sm:text-sm text-slate-400 mt-3 max-w-xl">
              Active domains of research, engineering, and continuous mastery
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-4 sm:gap-5 lg:gap-6">
            {currentFocusItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <article key={item.name} className="focus-surface focus-domain-card"
                  style={{ "--focus-accent": ["56 189 248", "96 165 250", "34 211 238", "129 140 248", "45 212 191", "125 211 252"][index] }}>
                  <div className="focus-card-top" aria-hidden="true">
                    <div className="focus-icon"><Icon size={24} strokeWidth={1.6} /></div>
                    <div className="focus-circuit"><span /><span /><span /></div>
                  </div>
                  <h4 className="font-section text-base sm:text-lg font-semibold text-slate-100 mt-6">{item.name}</h4>
                  <p className="font-body text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">{item.desc}</p>
                  <span aria-hidden="true" className="focus-card-line" />
                </article>
              );
            })}
          </div>
          <div className="focus-facts mt-12 sm:mt-16 pt-10 sm:pt-12">
            <div className="mb-8 sm:mb-10">
              <div aria-hidden="true" className="focus-heading-accent"><span /></div>
              <h3 className="font-section text-2xl sm:text-3xl font-bold text-white tracking-wide">Quick Facts</h3>
              <p className="font-body text-xs sm:text-sm text-slate-400 mt-3">
                Essential background credentials and current availability
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 auto-rows-fr gap-5 lg:gap-6">
              {quickFacts.map((fact) => {
                const Icon = fact.icon;
                return (
                  <article key={fact.label} className={`focus-surface focus-fact-card${fact.isStatus ? " focus-fact-available" : ""}`}>
                    <div className="focus-fact-top">
                      <div className="focus-icon focus-fact-icon" aria-hidden="true"><Icon size={23} strokeWidth={1.6} /></div>
                      {fact.isStatus ? (
                        <span className="focus-status font-body text-[11px] font-medium">
                          <span aria-hidden="true" className="focus-status-dot" />Active
                        </span>
                      ) : fact.label === "Location" ? (
                        <Globe2 aria-hidden="true" className="h-6 w-6 text-sky-300/25" strokeWidth={1.2} />
                      ) : (
                        <span className="focus-fact-detail" aria-hidden="true"><span /><span /><span /></span>
                      )}
                    </div>
                    <span className="font-ui text-[10px] font-semibold tracking-widest uppercase text-sky-200/65 mt-6">{fact.label}</span>
                    <h4 className="font-section text-lg sm:text-xl font-bold text-white leading-snug mt-3">{fact.value}</h4>
                    <div className="focus-fact-support">
                      <p className="font-body text-xs sm:text-sm text-slate-400 leading-normal">{fact.secondary}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
