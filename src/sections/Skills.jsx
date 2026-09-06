import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import {
  Monitor,
  Server,
  Database,
  Brain,
  BarChart3,
  Smartphone,
  Wrench,
} from "lucide-react";
import SectionTitle from "../components/ui/SectionTitle";
import GlassCard from "../components/ui/GlassCard";
import TechBadge from "../components/ui/TechBadge";
import { skillGroups, techProjectMap } from "../data/skills";
import { projects } from "../data/projects";

const iconMap = {
  Monitor,
  Server,
  Database,
  Brain,
  BarChart3,
  Smartphone,
  Wrench,
};

export default function Skills() {
  const [selectedTech, setSelectedTech] = useState(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const relatedProjects = selectedTech
    ? (techProjectMap[selectedTech] || [])
        .map((id) => projects.find((p) => p.id === id))
        .filter(Boolean)
    : [];

  const handleTechClick = (tech) => {
    setSelectedTech((prev) => (prev === tech ? null : tech));
  };

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
            subtitle="Technologies I work with — click any skill to see which projects use it."
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
                <GlassCard className="h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-xl bg-sky-400/10 border border-sky-400/18 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-sky-400" />
                    </div>
                    <h3 className="font-dmsans text-sm sm:text-base font-semibold text-white">
                      {group.label}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((tech) => (
                      <TechBadge
                        key={tech}
                        tech={tech}
                        active={selectedTech === tech}
                        onClick={
                          techProjectMap[tech] ? handleTechClick : undefined
                        }
                        size="sm"
                      />
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* Related projects panel */}
        <AnimatePresence>
          {selectedTech && relatedProjects.length > 0 && (
            <motion.div
              key={selectedTech}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-8 overflow-hidden"
            >
              <GlassCard>
                <p className="text-xs text-sky-400 tracking-widest uppercase font-semibold mb-3">
                  <span className="text-sky-300">{selectedTech}</span> used in
                </p>
                <div className="flex flex-wrap gap-3">
                  {relatedProjects.map((p) => (
                    <a
                      key={p.id}
                      href={`/projects/${p.id}`}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl border border-sky-400/20 bg-sky-400/5 text-sm text-slate-300 hover:border-sky-400/45 hover:text-sky-300 transition-all duration-200"
                    >
                      {p.title}
                    </a>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          )}
          {selectedTech && relatedProjects.length === 0 && (
            <motion.div
              key="no-projects"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-6"
            >
              <p className="text-sm text-slate-600 text-center">
                No linked projects for{" "}
                <span className="text-sky-400">{selectedTech}</span> yet.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
