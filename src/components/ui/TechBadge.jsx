/**
 * TechBadge — Pill badge for technology tags
 * Clickable variant highlights which projects use the technology
 */
export default function TechBadge({
  tech,
  onClick,
  active = false,
  size = "sm",
}) {
  const sizes = {
    xs: "px-2 py-0.5 text-xs",
    sm: "px-3 py-1 text-xs",
    md: "px-4 py-1.5 text-sm",
  };

  return (
    <span
      onClick={onClick ? () => onClick(tech) : undefined}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") onClick(tech);
            }
          : undefined
      }
      className={[
        "tech-badge inline-block rounded-full border font-mono",
        sizes[size],
        "transition-all duration-200",
        active
          ? "border-sky-400/60 bg-sky-400/15 text-sky-300"
          : "border-sky-400/20 bg-sky-400/5 text-slate-400",
        onClick ? "cursor-pointer select-none" : "cursor-default",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {tech}
    </span>
  );
}
