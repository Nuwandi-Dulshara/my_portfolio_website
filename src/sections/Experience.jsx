import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  Sparkles,
  CheckCircle2,
  Layers,
} from "lucide-react";
import { experiences, education } from "../data/experience";

const typeStyles = {
  "Associate SE": {
    badge: "text-sky-300 border-sky-400/30 bg-sky-400/10",
    dot: "bg-sky-400",
  },
  Internship: {
    badge: "text-blue-300 border-blue-400/30 bg-blue-500/10",
    dot: "bg-blue-400",
  },
  Freelance: {
    badge: "text-emerald-300 border-emerald-400/30 bg-emerald-500/10",
    dot: "bg-emerald-400",
  },
};

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="experience"
      className="relative py-24 md:py-32 bg-[#050816] overflow-hidden"
      aria-label="Experience and Education"
    >
      {/* Ambient background glow orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden select-none"
      >
        <div className="absolute top-1/4 right-0 w-[450px] h-[450px] rounded-full bg-blue-600/8 blur-[130px] animate-pulse-glow" />
        <div
          className="absolute bottom-10 -left-10 w-[400px] h-[400px] rounded-full bg-sky-400/6 blur-[120px] animate-pulse-glow"
          style={{ animationDelay: "2.5s" }}
        />
      </div>

      <div className="section-container relative z-10" ref={ref}>
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-3"
          >
            <span className="font-ui text-xs tracking-[0.3em] uppercase font-semibold text-sky-400 drop-shadow-[0_0_12px_rgba(56,189,248,0.5)]">
              CAREER &amp; JOURNEY
            </span>
            <span className="h-px w-10 bg-sky-400/30" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="type-section-title font-bold text-white tracking-wide leading-tight"
          >
            Work <span className="gradient-text">Experience</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-body text-slate-400 text-base sm:text-lg mt-4 leading-relaxed"
          >
            Engineering scalable full-stack applications, integrating intelligent AI features, and delivering production-ready software solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* ── LEFT COLUMN: WORK EXPERIENCE TIMELINE (8 COLS) ── */}
          <div className="lg:col-span-8 space-y-8">
            {experiences.map((exp, i) => {
              const currentType = typeStyles[exp.type] || {
                badge: "text-slate-300 border-slate-500/30 bg-slate-500/10",
                dot: "bg-sky-400",
              };

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 25 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="group relative flex gap-4 sm:gap-6"
                >
                  {/* Timeline Track & Node */}
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-10 h-10 rounded-2xl bg-[#07111F] border border-sky-400/30 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(56,189,248,0.2)] group-hover:border-sky-400/60 group-hover:scale-105 transition-all duration-300">
                      <Briefcase className="w-4 h-4 text-sky-400 group-hover:text-cyan-300 transition-colors" />
                    </div>
                    {i < experiences.length - 1 && (
                      <div className="w-px flex-1 bg-gradient-to-b from-sky-400/30 via-blue-500/20 to-sky-400/10 my-2" />
                    )}
                  </div>

                  {/* Experience Card */}
                  <div className="flex-1 pb-4">
                    <div className="relative rounded-3xl p-6 sm:p-7 md:p-8 bg-[#07111F]/75 border border-sky-400/15 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.4)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-sky-400/35 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_30px_rgba(56,189,248,0.12)]">
                      {/* Header: Role, Company, Period, Type Badge */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 pb-5 mb-5 border-b border-sky-400/15">
                        <div>
                          <h3 className="font-section text-lg sm:text-xl font-bold text-white group-hover:text-sky-100 transition-colors">
                            {exp.role}
                          </h3>
                          <div className="flex items-center gap-2 mt-1 flex-wrap">
                            <span className="font-section text-sm sm:text-[15px] font-semibold text-sky-300">
                              {exp.company}
                            </span>
                            {exp.formerCompany && (
                              <span className="font-body text-xs text-slate-400 italic">
                                ({exp.formerCompany})
                              </span>
                            )}
                            <span className="text-slate-600 text-xs">•</span>
                            <span className="font-body text-xs text-slate-400">
                              {exp.mode}
                            </span>
                          </div>
                        </div>

                        <div className="flex sm:flex-col items-center sm:items-end gap-2 shrink-0">
                          <span className="font-ui inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-sky-500/10 border border-sky-400/20 text-sky-200">
                            <Calendar className="w-3 h-3 text-sky-400" />
                            {exp.period}
                          </span>
                          <span
                            className={`font-ui inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium border ${currentType.badge}`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${currentType.dot}`}
                            />
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      {/* Summary Description */}
                      <p className="font-body text-sm text-slate-300 leading-relaxed mb-5">
                        {exp.description}
                      </p>

                      {/* Responsibilities list */}
                      <div className="mb-6 space-y-2.5">
                        {exp.responsibilities.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-300/85 leading-relaxed"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0 shadow-[0_0_8px_rgba(56,189,248,0.5)]" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Technologies Pills */}
                      <div className="pt-4 border-t border-sky-400/10">
                        <div className="flex items-center gap-2 mb-2.5">
                          <Sparkles className="w-3.5 h-3.5 text-sky-400/80" />
                          <span className="font-ui text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                            Technologies &amp; Tools
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="font-ui text-xs px-2.5 py-1 rounded-lg bg-slate-900/60 border border-sky-400/15 text-sky-200/90 hover:border-sky-400/40 hover:bg-sky-500/10 hover:text-white transition-all duration-200 shadow-[0_0_6px_rgba(56,189,248,0.06)]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* ── RIGHT COLUMN: EDUCATION & HIGHLIGHTS (4 COLS) ── */}
          <div className="lg:col-span-4 space-y-6">
            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="rounded-3xl p-6 sm:p-7 bg-[#07111F]/75 border border-sky-400/15 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.4)]"
            >
              <div className="flex items-center gap-2.5 mb-5 pb-4 border-b border-sky-400/15">
                <div className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-4 h-4 text-sky-400" />
                </div>
                <div>
                  <h3 className="font-section text-lg font-bold text-white tracking-wide">
                    Education
                  </h3>
                  <span className="font-body text-[11px] text-slate-400">
                    Academic Qualifications
                  </span>
                </div>
              </div>

              {education.map((edu) => (
                <div key={edu.id}>
                  <h4 className="font-section text-base font-bold text-white leading-snug">
                    {edu.degree}
                  </h4>
                  <p className="font-body text-sm font-semibold text-sky-300 mt-1">
                    {edu.institution}
                  </p>
                  <p className="font-body text-xs text-slate-400 mt-1">
                    {edu.period}
                  </p>

                  <p className="font-body text-xs sm:text-sm text-slate-300/85 mt-3 leading-relaxed">
                    {edu.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-sky-400/10">
                    <p className="font-ui text-[10px] font-semibold text-slate-400 mb-2.5 uppercase tracking-widest">
                      Key Focus Coursework
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.subjects.map((sub) => (
                        <span
                          key={sub}
                          className="font-ui text-[11px] px-2.5 py-1 rounded-md bg-sky-500/10 border border-sky-400/15 text-slate-300"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Career Highlights Summary Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="rounded-3xl p-6 sm:p-7 bg-[#07111F]/75 border border-sky-400/15 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.4)]"
            >
              <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-sky-400/15">
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center shrink-0">
                  <Layers className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-section text-lg font-bold text-white tracking-wide">
                    Core Strengths
                  </h3>
                  <span className="font-body text-[11px] text-slate-400">
                    Proven Track Record
                  </span>
                </div>
              </div>

              <div className="space-y-3 font-body text-xs sm:text-sm text-slate-300/90">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>
                    Full-Stack production development across PHP/Laravel, React, and Python ecosystems.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>
                    AI feature integration &amp; practical machine learning solutions.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>
                    Complete client project lifecycle: requirement gathering, development, payment gateways &amp; deployment.
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
