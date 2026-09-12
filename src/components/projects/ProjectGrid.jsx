import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid({ projects }) {
  const sliderRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = (index) => {
    const slider = sliderRef.current;
    if (!slider) return;
    const cards = slider.querySelectorAll("[data-project-card]");
    const card = cards[index];
    if (!card) return;
    slider.scrollTo({
      left: card.offsetLeft - (slider.clientWidth - card.clientWidth) / 2,
      behavior: reduceMotion ? "auto" : "smooth",
    });
    setActiveIndex(index);
  };

  useEffect(() => {
    if (projects.length < 2) return undefined;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => {
        const next = (current + 1) % projects.length;
        const slider = sliderRef.current;
        const card = slider?.querySelectorAll("[data-project-card]")[next];
        if (slider && card) {
          slider.scrollTo({
            left: card.offsetLeft - (slider.clientWidth - card.clientWidth) / 2,
            behavior: reduceMotion ? "auto" : "smooth",
          });
        }
        return next;
      });
    }, 4500);
    return () => window.clearInterval(timer);
  }, [projects.length, reduceMotion]);

  const handleScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;
    const center = slider.scrollLeft + slider.clientWidth / 2;
    const cards = [...slider.querySelectorAll("[data-project-card]")];
    const closest = cards.reduce((best, card, index) => {
      const distance = Math.abs(card.offsetLeft + card.clientWidth / 2 - center);
      return distance < best.distance ? { index, distance } : best;
    }, { index: 0, distance: Number.POSITIVE_INFINITY });
    setActiveIndex(closest.index);
  };

  return (
    <div className="relative">
      <div className="mb-6">
        <p className="max-w-xl text-sm leading-relaxed text-slate-400">Choose a card to reveal the project, then tap the image again for its demo and case study.</p>
      </div>
      <div ref={sliderRef} onScroll={handleScroll} className="project-slider flex snap-x snap-mandatory gap-5 overflow-x-auto px-1 pb-5 pt-2" aria-label="Project carousel">
        {projects.map((project, index) => (
          <motion.div key={project.id} data-project-card className="w-[84vw] max-w-[370px] shrink-0 snap-center sm:w-[46vw] lg:w-[31%]" initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : index * 0.08 }}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
      <div className="mt-2 flex items-center justify-center gap-2" role="group" aria-label="Choose project slide">
        {projects.map((project, index) => (
          <button
            key={project.id}
            type="button"
            onClick={() => goToSlide(index)}
            aria-label={`Go to ${project.title}`}
            aria-current={activeIndex === index ? "true" : undefined}
            className={`h-2.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${activeIndex === index ? "w-7 bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.65)]" : "w-2.5 bg-slate-600 hover:bg-sky-300/70"}`}
          />
        ))}
      </div>
    </div>
  );
}
