import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  Monitor,
  Server,
  Database,
  Brain,
  Cpu,
  BarChart3,
  GitBranch,
  Cloud,
  Wrench,
} from "lucide-react";
import SectionTitle from "../components/ui/SectionTitle";
import GlassCard from "../components/ui/GlassCard";
import TechBadge from "../components/ui/TechBadge";
import { skillGroups } from "../data/skills";

const iconMap = {
  Monitor,
  Server,
  Database,
  Brain,
  Cpu,
  BarChart3,
  GitBranch,
  Cloud,
  Wrench,
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="skills" className="py-20 md:py-28" aria-label="Skills">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <SectionTitle
            label="Expertise"
            title="Engineering Skills"
            subtitle="Technologies and tools I work with."
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => {
            const Icon = iconMap[group.icon] || Monitor;
            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.07, duration: 0.45 }}
              >
                <GlassCard className="h-full flex flex-col justify-between p-6">
                  <div>
                    {/* Category Top Header with Number, Badge, and Icon */}
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-sky-400/10 border border-sky-400/20 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(56,189,248,0.15)]">
                          <Icon className="w-4 h-4 text-sky-400" />
                        </div>
                        <div>
                          <span className="font-ui text-[10px] font-bold text-sky-400/80 tracking-wider">
                            {group.number} // CATEGORY
                          </span>
                          <h3 className="font-section text-base sm:text-lg font-bold text-white tracking-wide">
                            {group.label}
                          </h3>
                        </div>
                      </div>
                      {group.badge && (
                        <span className="font-ui text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-300 shrink-0">
                          {group.badge}
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    {group.description && (
                      <p className="font-body text-xs text-slate-400 mb-4 leading-relaxed">
                        {group.description}
                      </p>
                    )}
                  </div>

                  {/* Skills Chips */}
                  <div className="flex flex-wrap gap-2 pt-3 border-t border-sky-400/10">
                    {group.skills.map((tech) => (
                      <TechBadge
                        key={tech}
                        tech={tech}
                        size="sm"
                      />
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
