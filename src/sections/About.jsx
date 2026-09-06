import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import SectionTitle from "../components/ui/SectionTitle";
import GlassCard from "../components/ui/GlassCard";

const focusTags = [
  "Artificial Intelligence",
  "Machine Learning",
  "Data Science",
  "Data Engineering",
  "Data Analytics",
  "Computer Vision",
  "Full-Stack Development",
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-20 md:py-28" aria-label="About me">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <SectionTitle
            label="About"
            title="Who I Am"
            className="mb-12"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Main bio */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <GlassCard>
              <div className="space-y-5 text-slate-400 leading-relaxed text-base">
                <p>
                  I am a{" "}
                  <span className="text-sky-300 font-medium">
                    Full-Stack Software Engineer
                  </span>{" "}
                  focused on building practical, scalable and user-focused
                  digital products.
                </p>
                <p>
                  My experience spans frontend development, backend systems,
                  databases, REST APIs and complete application development —
                  from POS systems and course platforms to AI-powered web
                  applications.
                </p>
                <p>
                  I have worked as a Software Engineering Intern and Associate
                  Software Engineer in professional environments, and also
                  deliver custom software solutions as a freelance developer.
                </p>
                <p>
                  I am currently expanding deeper into{" "}
                  <span className="text-sky-300 font-medium">
                    Artificial Intelligence
                  </span>
                  ,{" "}
                  <span className="text-sky-300 font-medium">
                    Machine Learning
                  </span>
                  ,{" "}
                  <span className="text-sky-300 font-medium">Data Science</span>{" "}
                  and{" "}
                  <span className="text-sky-300 font-medium">
                    Data Engineering
                  </span>
                  , with a strong interest in building intelligent, data-driven
                  systems that solve real-world problems.
                </p>
              </div>
            </GlassCard>
          </motion.div>

          {/* Current focus */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <GlassCard>
              <p className="text-xs tracking-widest uppercase text-sky-400 font-semibold mb-4">
                Current Focus
              </p>
              <div className="flex flex-wrap gap-2">
                {focusTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full text-xs border border-sky-400/20 bg-sky-400/8 text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </GlassCard>

            <GlassCard>
              <p className="text-xs tracking-widest uppercase text-sky-400 font-semibold mb-4">
                Quick Facts
              </p>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                  Based in Sri Lanka
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                  BICT — Software Engineering, University of Kelaniya
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                  Associate SE + Intern + Freelancer
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  Open to new opportunities
                </li>
              </ul>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
