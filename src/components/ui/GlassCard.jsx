/**
 * GlassCard — Reusable glassmorphism card component
 * Uses the dark-navy + cyan-border premium design system
 */
export default function GlassCard({
  children,
  className = "",
  hover = true,
  padding = "p-6",
  rounded = "rounded-3xl",
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className={[
        "glass-card",
        rounded,
        padding,
        "transition-all duration-300",
        hover
          ? "hover:border-sky-400/30 hover:shadow-[0_0_50px_rgba(56,189,248,0.08)] hover:-translate-y-1"
          : "",
        onClick ? "cursor-pointer" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
