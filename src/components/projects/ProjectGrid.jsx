import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import ProjectCard from "./ProjectCard";
import SearchBar from "../ui/SearchBar";
import { filterProjects } from "../../utils/helpers";

const CATEGORIES = [
  "All",
  "Full Stack",
  "AI / ML",
  "Data",
  "Mobile",
  "Web",
  "Research",
];

export default function ProjectGrid({ projects }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(
    () => filterProjects(projects, activeCategory, searchQuery),
    [projects, activeCategory, searchQuery]
  );

  return (
    <div>
      {/* Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
        {/* Category pills — horizontally scrollable on mobile */}
        <div
          className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none w-full sm:w-auto flex-nowrap"
          role="group"
          aria-label="Filter projects by category"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
              className={[
                "shrink-0 px-4 py-2 rounded-full text-xs font-medium border transition-all duration-200 whitespace-nowrap",
                activeCategory === cat
                  ? "border-sky-400/60 bg-sky-400/15 text-sky-300"
                  : "border-sky-400/15 bg-transparent text-slate-400 hover:border-sky-400/35 hover:text-slate-200",
              ].join(" ")}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search bar */}
        <div className="w-full sm:w-auto sm:ml-auto">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>
      </div>

      {/* Results count */}
      {(searchQuery || activeCategory !== "All") && (
        <p className="text-xs text-slate-600 mb-5">
          {filtered.length} project{filtered.length !== 1 ? "s" : ""} found
        </p>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <AnimatePresence mode="popLayout">
          {filtered.length > 0 ? (
            filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.97 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full text-center py-16"
            >
              <p className="text-slate-500 text-sm">
                No projects found for &quot;{searchQuery || activeCategory}&quot;.
              </p>
              <button
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
                className="mt-3 text-xs text-sky-400 hover:text-sky-300 transition-colors"
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
