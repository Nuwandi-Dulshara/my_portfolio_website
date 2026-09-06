/**
 * GlowButton — Premium button with glow effect on hover
 * Variants: primary (solid sky-400 glow) | outline (ghost with glow border)
 */
export default function GlowButton({
  children,
  variant = "outline",
  size = "md",
  href,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  download,
  target,
  rel,
}) {
  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variants = {
    primary: [
      "bg-sky-500/20 border border-sky-400/50 text-sky-100",
      "hover:bg-sky-500/30 hover:border-sky-300/80",
      "hover:shadow-[0_0_35px_rgba(56,189,248,0.25)]",
    ].join(" "),
    outline: [
      "bg-transparent border border-sky-400/25 text-sky-100/90",
      "hover:bg-sky-400/10 hover:border-sky-400/55",
      "hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]",
    ].join(" "),
    ghost: [
      "bg-transparent border border-white/10 text-slate-300",
      "hover:bg-white/5 hover:border-white/20 hover:text-white",
    ].join(" "),
  };

  const baseClasses = [
    "inline-flex items-center justify-center gap-2",
    "rounded-full font-medium",
    "backdrop-blur-xl",
    "transition-all duration-300",
    "focus:outline-none focus:ring-2 focus:ring-sky-400/50",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    sizes[size],
    variants[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        download={download}
        target={target}
        rel={rel}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={baseClasses}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
