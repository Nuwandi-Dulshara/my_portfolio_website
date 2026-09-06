import { useState } from "react";
import { Link } from "react-router-dom";
import {
  GitFork,
  ExternalLink,
  Play,
  Lock,
  FileText,
  ImageOff,
} from "lucide-react";
import GlassCard from "../ui/GlassCard";
import TechBadge from "../ui/TechBadge";
import VideoModal from "./VideoModal";

export default function ProjectCard({ project }) {
  const [videoOpen, setVideoOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  const {
    id,
    title,
    shortDescription,
    categories,
    technologies,
    thumbnail,
    video,
    github,
    liveDemo,
    privateRepository,
    featured,
  } = project;

  return (
    <>
      <GlassCard
        padding="p-0"
        rounded="rounded-2xl"
        className="flex flex-col overflow-hidden h-full"
      >
        {/* Thumbnail */}
        <div className="relative aspect-video bg-slate-900/60 overflow-hidden">
          {!imgError && thumbnail ? (
            <img
              src={thumbnail}
              alt={`${title} screenshot`}
              loading="lazy"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-sky-900/20 to-slate-900">
              <ImageOff className="w-8 h-8 text-slate-600" />
            </div>
          )}

          {/* Featured badge */}
          {featured && (
            <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold bg-sky-400/20 border border-sky-400/35 text-sky-300 backdrop-blur-md">
              Featured
            </span>
          )}

          {/* Private badge */}
          {privateRepository && (
            <span className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-900/70 border border-white/10 text-slate-400 backdrop-blur-md">
              <Lock className="w-3 h-3" />
              Private
            </span>
          )}

          {/* Play overlay when video exists */}
          {video && (
            <button
              onClick={() => setVideoOpen(true)}
              aria-label={`Watch ${title} demo`}
              className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-slate-950/60 backdrop-blur-sm group"
            >
              <span className="w-14 h-14 rounded-full flex items-center justify-center border-2 border-sky-400/60 bg-sky-400/15 group-hover:bg-sky-400/25 transition-all duration-200">
                <Play className="w-6 h-6 text-sky-300 fill-sky-300 ml-0.5" />
              </span>
            </button>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5">
          {/* Categories */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {categories?.map((cat) => (
              <span
                key={cat}
                className="px-2 py-0.5 rounded-full text-xs font-medium bg-blue-500/10 border border-blue-500/20 text-blue-300"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Title & description */}
          <h3 className="text-base font-semibold text-white mb-2 leading-snug">
            {title}
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed flex-1 mb-4">
            {shortDescription}
          </p>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {technologies?.slice(0, 5).map((tech) => (
              <TechBadge key={tech} tech={tech} size="xs" />
            ))}
            {technologies?.length > 5 && (
              <span className="px-2 py-0.5 text-xs text-slate-600">
                +{technologies.length - 5} more
              </span>
            )}
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-2 mt-auto">
            {/* Watch Demo */}
            {video && (
              <button
                onClick={() => setVideoOpen(true)}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium border border-sky-400/35 bg-sky-400/10 text-sky-300 hover:bg-sky-400/20 hover:border-sky-400/60 transition-all duration-200"
              >
                <Play className="w-3.5 h-3.5 fill-sky-300" />
                Watch Demo
              </button>
            )}

            {/* Case Study */}
            <Link
              to={`/projects/${id}`}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium border border-slate-700/60 text-slate-400 hover:border-sky-400/30 hover:text-sky-300 transition-all duration-200"
            >
              <FileText className="w-3.5 h-3.5" />
              Case Study
            </Link>

            {/* GitHub (only if public) */}
            {!privateRepository && github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} GitHub repository`}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium border border-slate-700/60 text-slate-400 hover:border-sky-400/30 hover:text-sky-300 transition-all duration-200"
              >
                <GitFork className="w-3.5 h-3.5" />
                GitHub
              </a>
            )}

            {/* Live Demo */}
            {liveDemo && (
              <a
                href={liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} live demo`}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium border border-slate-700/60 text-slate-400 hover:border-sky-400/30 hover:text-sky-300 transition-all duration-200"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Live
              </a>
            )}
          </div>
        </div>
      </GlassCard>

      {/* Video Modal — lazy: only mounts when opened */}
      {videoOpen && (
        <VideoModal project={project} onClose={() => setVideoOpen(false)} />
      )}
    </>
  );
}
