import { useRef } from "react";
import { motion, useInView } from "motion/react";
import SectionTitle from "../components/ui/SectionTitle";
import ProjectGrid from "../components/projects/ProjectGrid";
import { projects } from "../data/projects";

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="projects" className="py-20 md:py-28" aria-label="Projects">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <SectionTitle
            label="Portfolio"
            title="Projects"
            subtitle="A selection of full-stack applications, AI systems, and software products I have designed and built."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          <ProjectGrid projects={projects} />
        </motion.div>
      </div>
    </section>
  );
}
