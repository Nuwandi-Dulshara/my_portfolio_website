import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Briefcase, Cpu, Globe, LayoutGrid } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { PROJECT_CATEGORIES } from "../../data/projects";

const CATEGORY_ICONS = {
  freelance: Briefcase,
  "ai-smart": Cpu,
  "web-apps": Globe,
};

export default function ProjectGrid({ projects }) {
  const [activeCategory, setActiveCategory] = useState("all");

  // Map project IDs to category objects
  const categorizedData = PROJECT_CATEGORIES.map((category) => {
    const categoryProjects = category.projectIds
      .map((id) => projects.find((p) => p.id === id))
      .filter(Boolean);

    return {
      ...category,
      projects: categoryProjects,
    };
  });

  // Filter based on active tab
  const displayedCategories =
    activeCategory === "all"
      ? categorizedData
      : categorizedData.filter((cat) => cat.id === activeCategory);

  return (
    <div className="space-y-12 md:space-y-16">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 pb-2" role="tablist" aria-label="Project categories">
        <button
          type="button"
          role="tab"
          aria-selected={activeCategory === "all"}
          onClick={() => setActiveCategory("all")}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 border ${
            activeCategory === "all"
              ? "border-sky-400 bg-sky-400/20 text-white shadow-[0_0_20px_rgba(56,189,248,0.35)]"
              : "border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700 hover:text-slate-200"
          }`}
        >
          <LayoutGrid className="w-4 h-4 text-sky-400" />
          <span>All Projects</span>
          <span className="ml-1 text-[11px] px-2 py-0.5 rounded-full bg-slate-800/80 text-slate-300">
            {projects.length}
          </span>
        </button>

        {PROJECT_CATEGORIES.map((category) => {
          const Icon = CATEGORY_ICONS[category.id] || LayoutGrid;
          const isActive = activeCategory === category.id;
          const count = category.projectIds.length;

          return (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 border ${
                isActive
                  ? "border-sky-400 bg-sky-400/20 text-white shadow-[0_0_20px_rgba(56,189,248,0.35)]"
                  : "border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700 hover:text-slate-200"
              }`}
            >
              <Icon className="w-4 h-4 text-sky-400" />
              <span>{category.title}</span>
              <span className="ml-1 text-[11px] px-2 py-0.5 rounded-full bg-slate-800/80 text-slate-300">
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Categorized Sections with Fixed Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35 }}
          className="space-y-16 md:space-y-20"
        >
          {displayedCategories.map((category, catIndex) => {
            const Icon = CATEGORY_ICONS[category.id] || LayoutGrid;

            return (
              <section
                key={category.id}
                aria-labelledby={`category-title-${category.id}`}
                className={catIndex > 0 ? "pt-12 border-t border-sky-400/10" : ""}
              >
                {/* Category Header */}
                <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-400/10 border border-sky-400/25 text-sky-300 mb-3">
                      <Icon className="w-3.5 h-3.5" />
                      <span>{category.badge}</span>
                    </div>
                    <h3
                      id={`category-title-${category.id}`}
                      className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight"
                    >
                      {category.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-400 max-w-2xl leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                  <span className="text-xs text-slate-500 font-mono self-start sm:self-auto">
                    {category.projects.length}{" "}
                    {category.projects.length === 1 ? "project" : "projects"}
                  </span>
                </div>

                {/* Fixed Responsive Card Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {category.projects.map((project, projIndex) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: projIndex * 0.08 }}
                      className="h-full"
                    >
                      <ProjectCard project={project} />
                    </motion.div>
                  ))}
                </div>
              </section>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
