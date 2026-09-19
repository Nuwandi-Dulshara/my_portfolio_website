import { useState } from "react";
import { Link } from "react-router-dom";
import { Play, FileText, Lock } from "lucide-react";
import TechBadge from "../ui/TechBadge";
import VideoModal from "./VideoModal";

const SHARED_CARD_BACK = "/images/projects/project-card-back.png";

export default function ProjectCard({ project }) {
  const [videoOpen, setVideoOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  const displayImage = !imageError && (project.image || project.thumbnail)
    ? (project.image || project.thumbnail)
    : SHARED_CARD_BACK;

  const projectTitle = project.displayName || project.title;

  return (
    <>
      <article className="group relative flex flex-col h-full rounded-2xl border border-sky-400/20 bg-slate-900/60 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-sky-400/45 hover:shadow-[0_14px_45px_rgba(14,165,233,0.18)] hover:-translate-y-1.5">
        {/* Project Image */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950/80 border-b border-sky-400/10">
          <img
            src={displayImage}
            alt={`${projectTitle} preview`}
            onError={() => setImageError(true)}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            loading="lazy"
          />

          {/* Featured / Private Badges overlay */}
          <div className="absolute top-3 right-3 flex items-center gap-2">
            {project.privateRepository && (
              <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium bg-slate-950/80 border border-slate-700/60 text-slate-300 backdrop-blur-md shadow-sm">
                <Lock className="w-3 h-3 text-slate-400" />
                Private
              </span>
            )}
          </div>
        </div>

        {/* Card Content */}
        <div className="flex flex-col flex-1 p-5 sm:p-6">
          {/* Main Title */}
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-sky-300 transition-colors duration-200">
            {projectTitle}
          </h3>

          {/* Short Description */}
          {project.shortDescription && (
            <p className="mt-2.5 text-sm text-slate-300/80 leading-relaxed line-clamp-2">
              {project.shortDescription}
            </p>
          )}

          {/* Basic Technology Stack */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies?.slice(0, 5).map((tech) => (
              <TechBadge key={tech} tech={tech} size="xs" />
            ))}
            {project.technologies?.length > 5 && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium text-slate-400 bg-slate-800/40 border border-slate-700/40">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="mt-6 pt-4 border-t border-sky-400/10 flex items-center justify-between gap-3 mt-auto">
            {project.demoVideoUrl ? (
              <button
                type="button"
                onClick={() => setVideoOpen(true)}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-sky-400/15 border border-sky-400/30 text-sky-200 hover:bg-sky-400/25 hover:border-sky-400/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 transition-all duration-200"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                Watch Demo
              </button>
            ) : (
              <div />
            )}

            <Link
              to={project.caseStudy || `/projects/${project.id}`}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-800/80 border border-slate-700/60 text-slate-200 hover:bg-slate-700/80 hover:text-white hover:border-sky-400/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 transition-all duration-200 ml-auto"
            >
              <FileText className="w-3.5 h-3.5" />
              Case Study
            </Link>
          </div>
        </div>
      </article>

      {videoOpen && <VideoModal project={project} onClose={() => setVideoOpen(false)} />}
    </>
  );
}
