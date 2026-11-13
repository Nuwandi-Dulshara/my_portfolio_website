import { useState } from "react";
import { ImageOff } from "lucide-react";

export default function ProjectImage({ src, title, alt, className = "" }) {
  const [hasError, setHasError] = useState(false);
  const imageAlt = alt || `${title} preview`;

  if (!src || hasError) {
    return (
      <div
        role="img"
        aria-label={`${imageAlt} unavailable`}
        className={`${className} flex items-center justify-center gap-3 bg-gradient-to-br from-slate-900 via-slate-950 to-sky-950/50 text-slate-500`}
      >
        <ImageOff className="h-5 w-5 shrink-0 text-sky-400/50" aria-hidden="true" />
        <span className="text-sm">{title}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={imageAlt}
      onError={() => setHasError(true)}
      className={className}
      loading="lazy"
    />
  );
}
