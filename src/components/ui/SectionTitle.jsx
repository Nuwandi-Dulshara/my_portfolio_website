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
        <p className="text-sky-400 tracking-[0.25em] uppercase text-xs font-semibold mb-3">
          {label}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-slate-400 text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
