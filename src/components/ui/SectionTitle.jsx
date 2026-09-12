/**
 * SectionTitle — Premium section heading with optional label and subtitle
 */
export default function SectionTitle({
  label,
  title,
  subtitle,
  align = "left",
  className = "",
}) {
  const alignClass = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <div className={`max-w-2xl ${alignClass[align]} ${className}`}>
      {label && (
        <p className="font-ui text-sky-400 tracking-[0.25em] uppercase text-xs font-semibold mb-2.5 sm:mb-3">
          {label}
        </p>
      )}
      <h2 className="type-section-title font-bold text-white tracking-wide leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="font-body mt-3 sm:mt-4 text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
