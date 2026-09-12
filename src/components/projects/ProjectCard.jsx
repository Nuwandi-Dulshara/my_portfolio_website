import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { FileText, Play, Rotate3D } from "lucide-react";
import VideoModal from "./VideoModal";

const SHARED_CARD_BACK = "/images/projects/project-card-back.png";

export default function ProjectCard({ project }) {
  const [flipped, setFlipped] = useState(false);
  const [actionsVisible, setActionsVisible] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [backImageError, setBackImageError] = useState(false);
  const [projectImageError, setProjectImageError] = useState(false);
  const pointerStart = useRef(null);
  const demoButtonRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const activateCard = () => {
    if (!flipped) setFlipped(true);
    else setActionsVisible((value) => !value);
  };
  const handlePointerDown = (event) => { pointerStart.current = { x: event.clientX, y: event.clientY }; };
  const handlePointerUp = (event) => {
    if (!pointerStart.current) return;
    const distance = Math.hypot(event.clientX - pointerStart.current.x, event.clientY - pointerStart.current.y);
    pointerStart.current = null;
    if (distance <= 8) activateCard();
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      activateCard();
    }
  };
  const closeVideo = () => {
    setVideoOpen(false);
    requestAnimationFrame(() => demoButtonRef.current?.focus());
  };

  return (
    <>
      <div className="project-card-perspective h-[430px] select-none">
        <motion.article animate={{ rotateY: flipped ? 180 : 0 }} transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }} className="project-card-inner relative h-full w-full" aria-label={`${project.title} interactive project card`}>
          <button type="button" onPointerDown={handlePointerDown} onPointerUp={handlePointerUp} onKeyDown={handleKeyDown} className="project-card-face absolute inset-0 overflow-hidden rounded-3xl border border-sky-400/25 bg-slate-950 shadow-[0_22px_70px_rgba(0,0,0,0.38)] transition duration-500 hover:-translate-y-1 hover:border-sky-300/55 hover:shadow-[0_25px_80px_rgba(14,165,233,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300" aria-label={`Reveal ${project.title}`}>
            {!backImageError ? (
              <img src={SHARED_CARD_BACK} alt="" onError={() => setBackImageError(true)} className="h-full w-full object-cover" draggable="false" />
            ) : (
              <span aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.22),transparent_42%),linear-gradient(145deg,#07182d,#020617)]" />
            )}
            <span className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-sky-300/25 bg-slate-950/65 px-4 py-2 text-xs font-medium text-sky-100 backdrop-blur-lg"><Rotate3D className="h-4 w-4" /> Tap to reveal</span>
          </button>

          <div className="project-card-face project-card-front absolute inset-0 overflow-hidden rounded-3xl border border-sky-400/30 bg-slate-950 shadow-[0_22px_70px_rgba(0,0,0,0.4)]">
            <button type="button" onPointerDown={handlePointerDown} onPointerUp={handlePointerUp} onKeyDown={handleKeyDown} className="absolute inset-0 h-full w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-sky-300" aria-label={`${actionsVisible ? "Hide" : "Show"} actions for ${project.title}`}>
              {!projectImageError ? (
                <img src={project.image || project.thumbnail} alt={`${project.title} project preview`} onError={() => setProjectImageError(true)} className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]" draggable="false" />
              ) : (
                <span className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-sky-950 via-slate-900 to-blue-950 text-xs uppercase tracking-[0.22em] text-sky-200/60">Image coming soon</span>
              )}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent px-5 pb-6 pt-24 text-left">
                <h3 className="font-heading text-xl font-bold text-white">{project.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-300">{project.shortDescription}</p>
              </div>
            </button>
            <AnimatePresence>
              {actionsVisible && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduceMotion ? 0 : 0.3 }} className="absolute inset-0 z-10 flex items-center justify-center bg-slate-950/72 p-6 backdrop-blur-md" onClick={() => setActionsVisible(false)}>
                  <motion.div initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: reduceMotion ? 0 : 12 }} className="grid w-full max-w-[230px] gap-3" onClick={(event) => event.stopPropagation()}>
                    <button ref={demoButtonRef} type="button" disabled={!project.demoVideoUrl} onClick={() => setVideoOpen(true)} className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-sky-300/50 bg-sky-400/20 px-4 text-sm font-semibold text-white transition hover:bg-sky-400/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200 disabled:cursor-not-allowed disabled:opacity-45"><Play className="h-4 w-4 fill-current" /> Watch Demo</button>
                    <Link to={project.caseStudy || `/projects/${project.id}`} className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-sky-300/25 bg-slate-900/75 px-4 text-sm font-semibold text-sky-100 transition hover:border-sky-300/50 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200"><FileText className="h-4 w-4" /> Case Study</Link>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.article>
      </div>
      {videoOpen && <VideoModal project={project} onClose={closeVideo} />}
    </>
  );
}
