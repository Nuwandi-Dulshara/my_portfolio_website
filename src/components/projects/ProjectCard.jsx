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
    categories = [],
    technologies = [],
    image,
    thumbnail,
    demoVideo,
    video,
    github,
    liveDemo,
    privateRepository,
    featured,
    caseStudy,
  } = project;

  const previewImage = image || thumbnail;
  const projectDemoVideo = demoVideo || video;
  const hasFreelanceTag = categories.includes("Freelance");
  const caseStudyPath = caseStudy || `/projects/${id}`;

  return (
    <>
      <GlassCard
        padding="p-0"
        rounded="rounded-2xl"
        className="flex flex-col overflow-hidden h-full border border-white/6 bg-slate-950/60 shadow-[0_20px_60px_rgba(15,23,42,0.45)]"
      >
        <div className="relative aspect-[16/10] bg-slate-900/60 overflow-hidden group">
          {!imgError && previewImage ? (
            <>
              <img
                src={previewImage}
                alt={`${title} screenshot`}
                loading="lazy"
                onError={() => setImgError(true)}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-slate-900/10 to-transparent" />
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-sky-950/70 via-slate-900 to-slate-950">
              <div className="flex flex-col items-center gap-3 text-slate-500">
                <ImageOff className="w-8 h-8" />
                <span className="text-xs uppercase tracking-[0.2em]">Preview</span>
              </div>
            </div>
          )}

          <div className="absolute left-3 top-3 flex flex-wrap gap-2 z-10">
            {featured && (
              <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-sky-400/20 border border-sky-400/35 text-sky-200 backdrop-blur-md">
                Featured
              </span>
            )}
            {hasFreelanceTag && (
              <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-amber-400/15 border border-amber-400/30 text-amber-200 backdrop-blur-md">
                Freelance
              </span>
            )}
          </div>

          {privateRepository && (
            <span className="absolute right-3 top-3 z-10 flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-medium bg-slate-950/75 border border-white/10 text-slate-300 backdrop-blur-md shadow-[0_8px_18px_rgba(15,23,42,0.45)]">
              <Lock className="w-3 h-3" />
              Private
            </span>
          )}

          {projectDemoVideo && (
            <button
              onClick={() => setVideoOpen(true)}
              aria-label={`Watch ${title} demo`}
              className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-300 bg-slate-950/55 backdrop-blur-[2px] group"
            >
              <span className="w-14 h-14 rounded-full flex items-center justify-center border-2 border-sky-400/60 bg-sky-400/15 group-hover:bg-sky-400/25 transition-all duration-200 shadow-[0_0_35px_rgba(56,189,248,0.25)]">
                <Play className="w-6 h-6 text-sky-200 fill-sky-200 ml-0.5" />
              </span>
            </button>
          )}
        </div>

        <div className="flex flex-col flex-1 p-5">
          <div className="flex flex-wrap gap-1.5 mb-3">
            {categories?.map((cat) => (
              <span
                key={cat}
                className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-blue-500/10 border border-blue-500/15 text-blue-200"
              >
                {cat}
              </span>
            ))}
          </div>

          <h3 className="font-dmsans text-base sm:text-lg font-bold text-white mb-2 leading-snug">
            {title}
          </h3>
          <p className="font-inter text-xs sm:text-sm text-slate-400 leading-relaxed flex-1 mb-4">
            {shortDescription}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {technologies?.slice(0, 5).map((tech) => (
              <TechBadge key={tech} tech={tech} size="xs" />
            ))}
            {technologies?.length > 5 && (
              <span className="font-inter px-2 py-0.5 text-[10px] text-slate-500">
                +{technologies.length - 5} more
              </span>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2 mt-auto">
            {projectDemoVideo && (
              <button
                onClick={() => setVideoOpen(true)}
                className="font-poppins flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium border border-sky-400/35 bg-sky-400/10 text-sky-200 hover:bg-sky-400/20 hover:border-sky-400/60 transition-all duration-200"
              >
                <Play className="w-3.5 h-3.5 fill-sky-200" />
                Watch Demo
              </button>
            )}

            <Link
              to={caseStudyPath}
              className="font-poppins flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium border border-slate-700/60 text-slate-300 hover:border-sky-400/30 hover:text-sky-200 transition-all duration-200"
            >
              <FileText className="w-3.5 h-3.5" />
              Case Study
            </Link>

            {!privateRepository && github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} GitHub repository`}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium border border-slate-700/60 text-slate-300 hover:border-sky-400/30 hover:text-sky-200 transition-all duration-200"
              >
                <GitFork className="w-3.5 h-3.5" />
                GitHub
              </a>
            )}

            {liveDemo && (
              <a
                href={liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} live demo`}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium border border-slate-700/60 text-slate-300 hover:border-sky-400/30 hover:text-sky-200 transition-all duration-200"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Live
              </a>
            )}
          </div>
        </div>
      </GlassCard>

      {videoOpen && (
        <VideoModal project={{ ...project, demoVideo: projectDemoVideo }} onClose={() => setVideoOpen(false)} />
      )}
    </>
  );
}
