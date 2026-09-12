import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

export default function VideoModal({ project, onClose }) {
  const modalRef = useRef(null);
  const closeRef = useRef(null);
  const videoRef = useRef(null);
  const [videoError, setVideoError] = useState(false);
  const demoVideo = project?.demoVideo || project?.video;

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "Tab") {
        const focusable = modalRef.current?.querySelectorAll(
          'button:not([disabled]), video[controls], [href], [tabindex]:not([tabindex="-1"])'
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

    const videoElement = videoRef.current;

    document.addEventListener("keydown", handleKey);
    closeRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow;

      if (videoElement) {
        videoElement.pause();
        // React replays effects in StrictMode. Keep the JSX-owned source intact.
      }
    };
  }, [onClose]);

  const handleBackdropClick = (event) => {
    if (event.target === modalRef.current) onClose();
  };

  const stopVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      videoRef.current.muted = true;
    }
  };

  const handleClose = () => {
    stopVideo();
    onClose();
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
      <div className="relative w-full max-w-4xl rounded-3xl overflow-hidden border border-sky-400/15 bg-slate-950/90 shadow-[0_30px_80px_rgba(15,23,42,0.8)]">
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
            onClick={handleClose}
            aria-label="Close video"
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/8 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="relative bg-black aspect-video">
          {demoVideo ? (
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full"
              controls
              autoPlay
              playsInline
              muted={false}
              onEnded={stopVideo}
              src={demoVideo}
              onError={() => setVideoError(true)}
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-950 text-slate-400 text-sm">
              No demo video available for this project.
            </div>
          )}
        </div>

        <div className="px-4 py-3 sm:px-5 border-t border-sky-400/8">
          {videoError && (
            <p role="alert" className="mb-2 text-sm text-amber-300">
              This video could not be played. Try opening the video directly below.
            </p>
          )}
          {demoVideo && (
            <a href={demoVideo} target="_blank" rel="noopener noreferrer" className="mb-2 inline-block text-sm text-sky-300 underline">
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
