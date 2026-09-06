import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import {
  ArrowLeft,
  Play,
  GitFork,
  ExternalLink,
  Lock,
  CheckCircle,
  AlertCircle,
  Code2,
  Lightbulb,
  Layers,
  Star,
  Zap,
  BookOpen,
} from "lucide-react";
import { projects } from "../data/projects";
import { getProjectById } from "../utils/helpers";
import GlassCard from "../components/ui/GlassCard";
import TechBadge from "../components/ui/TechBadge";
import VideoModal from "../components/projects/VideoModal";

const SectionBlock = ({ icon: Icon, label, children }) => (
  <GlassCard className="mb-5">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-8 rounded-xl bg-sky-400/10 border border-sky-400/18 flex items-center justify-center shrink-0">
        <Icon className="w-4 h-4 text-sky-400" />
      </div>
      <h2 className="text-sm font-semibold text-sky-300 uppercase tracking-wider">
        {label}
      </h2>
    </div>
    {children}
  </GlassCard>
);

export default function ProjectDetails() {
  const { id } = useParams();
  const project = getProjectById(projects, id);
  const [videoOpen, setVideoOpen] = useState(false);

  // 404 state
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 text-center px-4">
        <AlertCircle className="w-16 h-16 text-sky-400/40" />
        <h1 className="text-3xl font-bold text-white">Project Not Found</h1>
        <p className="text-slate-400">
          The project you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          to="/#projects"
          className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium border border-sky-400/35 bg-sky-400/10 text-sky-300 hover:bg-sky-400/20 transition-all duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
      </div>
    );
  }

  const {
    title,
    shortDescription,
    categories,
    technologies,
    video,
    github,
    liveDemo,
    privateRepository,
    fullDescription,
    problem,
    solution,
    architecture,
    features,
    challenges,
    results,
    role,
  } = project;

  return (
    <>
      <div className="min-h-screen pt-24 pb-20">
        {/* Background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-blue-600/8 blur-3xl" />
        </div>

        <div className="section-container relative z-10">
          {/* Back link */}
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-sky-300 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            All Projects
          </Link>

          {/* Page header */}
          <div className="mb-10">
            <div className="flex flex-wrap gap-2 mb-3">
              {categories?.map((cat) => (
                <span
                  key={cat}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 border border-blue-500/20 text-blue-300"
                >
                  {cat}
                </span>
              ))}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
              {title}
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
              {shortDescription}
            </p>

            {/* Action row */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {video && (
                <button
                  onClick={() => setVideoOpen(true)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border border-sky-400/50 bg-sky-400/15 text-sky-200 hover:bg-sky-400/25 hover:shadow-[0_0_30px_rgba(56,189,248,0.2)] transition-all duration-200"
                >
                  <Play className="w-4 h-4 fill-sky-300" />
                  Watch Demo
                </button>
              )}

              {!privateRepository && github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border border-slate-700 text-slate-300 hover:border-sky-400/40 hover:text-sky-300 transition-all duration-200"
                >
                  <GitFork className="w-4 h-4" />
                  View on GitHub
                </a>
              )}

              {privateRepository && (
                <span className="flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-medium border border-white/10 text-slate-500 bg-slate-900/40">
                  <Lock className="w-3.5 h-3.5" />
                  Private Repository
                </span>
              )}

              {liveDemo && (
                <a
                  href={liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border border-slate-700 text-slate-300 hover:border-sky-400/40 hover:text-sky-300 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
            </div>

            {/* Tech stack */}
            <div className="mt-5 flex flex-wrap gap-2">
              {technologies?.map((t) => (
                <TechBadge key={t} tech={t} size="md" />
              ))}
            </div>
          </div>

          {/* Private repo notice */}
          {privateRepository && (
            <GlassCard className="mb-6 border-amber-400/15 bg-amber-400/4">
              <div className="flex items-start gap-3">
                <Lock className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-amber-300">
                    Private Repository
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Source code cannot be publicly shared. The full case study
                    below demonstrates the project&apos;s architecture, approach,
                    and results.
                  </p>
                </div>
              </div>
            </GlassCard>
          )}

          {/* Case Study content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main column */}
            <div className="lg:col-span-2">
              {fullDescription && (
                <SectionBlock icon={BookOpen} label="Overview">
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {fullDescription}
                  </p>
                </SectionBlock>
              )}

              {problem && (
                <SectionBlock icon={AlertCircle} label="The Problem">
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {problem}
                  </p>
                </SectionBlock>
              )}

              {solution && (
                <SectionBlock icon={Lightbulb} label="The Solution">
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {solution}
                  </p>
                </SectionBlock>
              )}

              {architecture && (
                <SectionBlock icon={Layers} label="Architecture">
                  <p className="text-sm text-slate-400 leading-relaxed font-mono bg-slate-900/40 rounded-xl p-4 border border-sky-400/10">
                    {architecture}
                  </p>
                </SectionBlock>
              )}

              {challenges && (
                <SectionBlock icon={Zap} label="Challenges">
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {challenges}
                  </p>
                </SectionBlock>
              )}

              {results && (
                <SectionBlock icon={Star} label="Results">
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {results}
                  </p>
                </SectionBlock>
              )}
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-5">
              {features && features.length > 0 && (
                <GlassCard>
                  <div className="flex items-center gap-2 mb-4">
                    <Code2 className="w-4 h-4 text-sky-400" />
                    <h2 className="text-xs font-semibold text-sky-300 uppercase tracking-wider">
                      Features
                    </h2>
                  </div>
                  <ul className="space-y-2">
                    {features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm text-slate-400"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-sky-400/60 mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              )}

              {role && (
                <GlassCard>
                  <p className="text-xs font-semibold text-sky-300 uppercase tracking-wider mb-3">
                    My Role
                  </p>
                  <p className="text-sm text-slate-400 leading-relaxed">{role}</p>
                </GlassCard>
              )}

              <GlassCard>
                <p className="text-xs font-semibold text-sky-300 uppercase tracking-wider mb-3">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-2">
                  {technologies?.map((t) => (
                    <TechBadge key={t} tech={t} size="sm" />
                  ))}
                </div>
              </GlassCard>
            </div>
          </div>

          {/* Back button bottom */}
          <div className="mt-12 pt-8 border-t border-sky-400/10">
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-sky-300 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              Back to all projects
            </Link>
          </div>
        </div>
      </div>

      {videoOpen && (
        <VideoModal project={project} onClose={() => setVideoOpen(false)} />
      )}
    </>
  );
}
