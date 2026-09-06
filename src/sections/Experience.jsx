import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Briefcase, GraduationCap } from "lucide-react";
import SectionTitle from "../components/ui/SectionTitle";
import GlassCard from "../components/ui/GlassCard";
import TechBadge from "../components/ui/TechBadge";
import { experiences, education } from "../data/experience";

const typeColors = {
  "Full-time": "text-emerald-300 border-emerald-400/30 bg-emerald-400/8",
  Internship: "text-sky-300 border-sky-400/30 bg-sky-400/8",
  Freelance: "text-purple-300 border-purple-400/30 bg-purple-400/8",
};

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="experience" className="py-20 md:py-28" aria-label="Experience and Education">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <SectionTitle
            label="Career"
            title="Experience"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Experience timeline */}
          <div className="lg:col-span-2 space-y-0">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.45 }}
                className="flex gap-4 md:gap-6"
              >
                {/* Timeline track */}
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-8 h-8 rounded-xl bg-sky-400/12 border border-sky-400/20 flex items-center justify-center mt-1">
                    <Briefcase className="w-3.5 h-3.5 text-sky-400" />
                  </div>
                  {i < experiences.length - 1 && (
                    <div className="w-px flex-1 bg-sky-400/12 my-1" />
                  )}
                </div>

                {/* Card */}
                <div className="pb-8 last:pb-0 flex-1">
                  <GlassCard hover={false} padding="p-5">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-base font-semibold text-white">
                          {exp.role}
                        </h3>
                        <p className="text-sm text-sky-300/80 mt-0.5">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-1.5 shrink-0">
                        <span className="text-xs text-slate-500 whitespace-nowrap">
                          {exp.period}
                        </span>
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-xs border font-medium ${typeColors[exp.type] || "text-slate-400 border-slate-600/40 bg-slate-400/5"}`}
                        >
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Responsibilities */}
                    <ul className="space-y-1.5 mb-4">
                      {exp.responsibilities.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-xs text-slate-500"
                        >
                          <span className="w-1 h-1 rounded-full bg-sky-400/50 mt-1.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Tech */}
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((t) => (
                        <TechBadge key={t} tech={t} size="xs" />
                      ))}
                    </div>
                  </GlassCard>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education column */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.45 }}
            >
              <div className="flex items-center gap-2 mb-5">
                <GraduationCap className="w-4 h-4 text-sky-400" />
                <p className="text-xs tracking-widest uppercase text-sky-400 font-semibold">
                  Education
                </p>
              </div>

              {education.map((edu) => (
                <GlassCard key={edu.id}>
                  <h3 className="text-base font-semibold text-white leading-snug">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-sky-300/80 mt-1">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">{edu.period}</p>
                  <p className="text-sm text-slate-400 mt-3 leading-relaxed">
                    {edu.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-sky-400/10">
                    <p className="text-xs text-slate-500 mb-2 uppercase tracking-wide">
                      Relevant Areas
                    </p>
                    <ul className="space-y-1">
                      {edu.subjects.map((s) => (
                        <li
                          key={s}
                          className="flex items-center gap-2 text-xs text-slate-400"
                        >
                          <span className="w-1 h-1 rounded-full bg-sky-400/40 shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </GlassCard>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
