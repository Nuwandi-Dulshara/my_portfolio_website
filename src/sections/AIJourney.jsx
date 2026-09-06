import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Sparkles } from "lucide-react";
import SectionTitle from "../components/ui/SectionTitle";
import GlassCard from "../components/ui/GlassCard";

const aiAreas = [
  { label: "AI Engineering", desc: "Building intelligent application layers" },
  { label: "Machine Learning", desc: "Training and evaluating models" },
  { label: "Deep Learning", desc: "Neural networks and CNNs" },
  { label: "Computer Vision", desc: "Image classification and analysis" },
  { label: "Explainable AI", desc: "Grad-CAM, model interpretability" },
  { label: "Data Analysis", desc: "EDA, patterns, and insights" },
  { label: "Data Science", desc: "Statistical analysis and modelling" },
  { label: "Data Engineering", desc: "Pipelines and data systems" },
  { label: "Model Deployment", desc: "Serving ML models via APIs" },
];

const journeySteps = [
  {
    phase: "Foundation",
    desc: "Full-stack engineering, REST APIs, databases and scalable system design.",
  },
  {
    phase: "AI Integration",
    desc: "Applying ML models (CNN, Scikit-learn) into real-world software products.",
  },
  {
    phase: "Deep Learning",
    desc: "Exploring neural networks, computer vision, and explainable AI systems.",
  },
  {
    phase: "Data Systems",
    desc: "Building data pipelines, EDA workflows, and analytics dashboards.",
  },
];

export default function AIJourney() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="ai-journey" className="py-20 md:py-28" aria-label="AI and Data Journey">
      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-sky-400 tracking-[0.25em] uppercase text-xs font-semibold mb-3">
            The Next Layer
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-2xl">
            From Software Engineering
            <br />
            <span className="gradient-text">to Intelligent Systems.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Current Focus Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <GlassCard>
              <div className="flex items-center gap-2 mb-5">
                <Sparkles className="w-4 h-4 text-sky-400" />
                <p className="text-xs tracking-widest uppercase text-sky-400 font-semibold">
                  Current Focus
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {aiAreas.map((area, i) => (
                  <motion.div
                    key={area.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.15 + i * 0.05 }}
                    className="p-3 rounded-xl border border-sky-400/12 bg-sky-400/4 hover:border-sky-400/30 hover:bg-sky-400/8 transition-all duration-200"
                  >
                    <p className="text-sm font-medium text-slate-200">
                      {area.label}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">{area.desc}</p>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Journey progression */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col gap-5"
          >
            <GlassCard>
              <p className="text-xs tracking-widest uppercase text-sky-400 font-semibold mb-5">
                Engineering Journey
              </p>
              <div className="space-y-0">
                {journeySteps.map((step, i) => (
                  <div key={step.phase} className="flex gap-4">
                    {/* Timeline line */}
                    <div className="flex flex-col items-center">
                      <div className="timeline-dot mt-1" />
                      {i < journeySteps.length - 1 && (
                        <div className="w-px flex-1 bg-sky-400/12 mt-1" />
                      )}
                    </div>
                    {/* Content */}
                    <div className="pb-6 last:pb-0">
                      <p className="text-sm font-semibold text-sky-300 mb-1">
                        {step.phase}
                      </p>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Relevant projects from this domain */}
            <GlassCard>
              <p className="text-xs tracking-widest uppercase text-sky-400 font-semibold mb-4">
                AI Projects
              </p>
              <div className="space-y-2">
                {["AI Ayurveda", "Task & Expense Manager"].map((name) => (
                  <div
                    key={name}
                    className="flex items-center gap-2 text-sm text-slate-400"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                    {name}
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
