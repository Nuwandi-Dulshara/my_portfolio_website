import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

export default function VideoModal({ project, onClose }) {
  const modalRef = useRef(null);
  const closeRef = useRef(null);
  const demoVideoUrl = project?.demoVideoUrl;

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "Tab") {
        const focusable = modalRef.current?.querySelectorAll(
          'button:not([disabled]), iframe, [href], [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKey);
    closeRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow;

    };
  }, [onClose]);

  const handleBackdropClick = (event) => {
    if (event.target === modalRef.current) onClose();
  };

  // Keep the viewport overlay outside transformed cards and the scrolling carousel.
  return createPortal(
    <div
      ref={modalRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-slate-950/80 backdrop-blur-xl"
      role="dialog"
      aria-modal="true"
      aria-label={`${project?.title} demo video`}
    >
      <div style={{ maxWidth: "min(56rem, calc((100dvh - 12rem) * 16 / 9))" }} className="relative w-full max-w-4xl rounded-3xl overflow-hidden border border-sky-400/15 bg-slate-950/90 shadow-[0_30px_80px_rgba(15,23,42,0.8)]">
        <div className="flex items-center justify-between px-4 py-3 sm:px-5 border-b border-sky-400/12">
          <div>
            <p className="text-[10px] sm:text-xs text-sky-400 tracking-[0.2em] uppercase font-semibold">
              Demo Video
            </p>
            <h3 className="text-base sm:text-lg font-semibold text-white mt-1">
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

        <div className="relative bg-black aspect-video">
          {demoVideoUrl ? (
            <iframe
              src={demoVideoUrl}
              className="absolute inset-0 h-full w-full rounded-xl border-0"
              allow="autoplay; fullscreen"
              allowFullScreen
              title={`${project?.title} Demo`}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-950 text-slate-400 text-sm">
              No demo video available for this project.
            </div>
          )}
        </div>

        <div className="px-4 py-3 sm:px-5 border-t border-sky-400/8">
          {demoVideoUrl && (
            <a href={demoVideoUrl} target="_blank" rel="noopener noreferrer" className="mb-2 inline-block text-sm text-sky-300 underline">
              Open video directly
            </a>
          )}
          <p className="text-[11px] text-slate-500">
            Press <kbd className="px-1.5 py-0.5 rounded bg-white/5 text-slate-400 border border-white/10">Esc</kbd> or click outside to close
          </p>
        </div>
      </div>
    </div>,
    document.body
  );
}
