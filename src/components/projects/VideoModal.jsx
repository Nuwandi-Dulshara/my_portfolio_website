import { useEffect, useRef } from "react";
import { X, AlertTriangle } from "lucide-react";

/**
 * VideoModal — Opens project demo video in a modal overlay.
 * Supports both:
 *  - Google Drive preview embeds (videoType: "gdrive")
 *  - Local/direct MP4 files (videoType: "mp4" or null)
 *
 * Video only loads when the modal is opened (lazy loading).
 */
export default function VideoModal({ project, onClose }) {
  const modalRef = useRef(null);
  const closeRef = useRef(null);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    // Focus the close button for accessibility
    closeRef.current?.focus();
    // Prevent body scroll
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  // Click outside to close
  const handleBackdropClick = (e) => {
    if (e.target === modalRef.current) onClose();
  };

  const isGDrive = project?.videoType === "gdrive";
  const isPlaceholder =
    project?.video?.startsWith("GOOGLE_DRIVE_LINK") || !project?.video;

  return (
    <div
      ref={modalRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-950/85 backdrop-blur-xl"
      role="dialog"
      aria-modal="true"
      aria-label={`${project?.title} demo video`}
    >
      <div className="relative w-full max-w-4xl glass-card rounded-3xl overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-sky-400/12">
          <div>
            <p className="text-xs text-sky-400 tracking-widest uppercase font-semibold">
              Demo Video
            </p>
            <h3 className="text-base font-semibold text-white mt-0.5">
              {project?.title}
            </h3>
          </div>
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Close video"
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/8 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video area */}
        <div className="relative bg-black aspect-video">
          {isPlaceholder ? (
            /* Placeholder — show when Google Drive link isn't filled in yet */
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-slate-500 bg-slate-950">
              <AlertTriangle className="w-10 h-10 text-sky-400/40" />
              <div className="text-center">
                <p className="text-sm font-medium text-slate-300">
                  Video link not configured yet
                </p>
                <p className="text-xs text-slate-600 mt-1">
                  Update the Google Drive link in{" "}
                  <code className="text-sky-400/70">src/data/projects.js</code>
                </p>
              </div>
            </div>
          ) : isGDrive ? (
            /* Google Drive preview embed */
            <iframe
              src={project.video}
              title={`${project.title} demo`}
              className="absolute inset-0 w-full h-full border-0"
              allow="autoplay"
              allowFullScreen
            />
          ) : (
            /* Local / direct MP4 */
            <video
              className="absolute inset-0 w-full h-full"
              controls
              autoPlay
              playsInline
              src={project.video}
            >
              Your browser does not support the video tag.
            </video>
          )}
        </div>

        {/* Footer hint */}
        <div className="px-5 py-3 border-t border-sky-400/8">
          <p className="text-xs text-slate-600">
            Press <kbd className="px-1.5 py-0.5 rounded bg-white/5 text-slate-500 border border-white/10">Esc</kbd> or click outside to close
          </p>
        </div>
      </div>
    </div>
  );
}
