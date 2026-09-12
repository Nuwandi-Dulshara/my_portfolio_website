import { useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid({ projects }) {
  const sliderRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const move = (direction) => {
    const slider = sliderRef.current;
    const card = slider?.querySelector("[data-project-card]");
    if (!slider) return;
    slider.scrollBy({ left: direction * ((card?.getBoundingClientRect().width || 320) + 20), behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <div className="relative">
      <div className="mb-6 flex items-center justify-between gap-4">
        <p className="max-w-xl text-sm leading-relaxed text-slate-400">Choose a card to reveal the project, then tap the image again for its demo and case study.</p>
        <div className="hidden items-center gap-2 sm:flex">
          <button type="button" onClick={() => move(-1)} aria-label="Previous project" className="rounded-full border border-sky-400/20 bg-sky-400/5 p-2.5 text-sky-200 transition hover:border-sky-300/50 hover:bg-sky-400/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"><ChevronLeft className="h-5 w-5" /></button>
          <button type="button" onClick={() => move(1)} aria-label="Next project" className="rounded-full border border-sky-400/20 bg-sky-400/5 p-2.5 text-sky-200 transition hover:border-sky-300/50 hover:bg-sky-400/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"><ChevronRight className="h-5 w-5" /></button>
        </div>
      </div>
      <div ref={sliderRef} className="project-slider flex snap-x snap-mandatory gap-5 overflow-x-auto px-1 pb-8 pt-2" aria-label="Project carousel">
        {projects.map((project, index) => (
          <motion.div key={project.id} data-project-card className="w-[84vw] max-w-[370px] shrink-0 snap-center sm:w-[46vw] lg:w-[31%]" initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : index * 0.08 }}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
