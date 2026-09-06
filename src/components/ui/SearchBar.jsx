import { Search, X } from "lucide-react";

/**
 * SearchBar — Glass futuristic search input
 */
export default function SearchBar({ value, onChange, placeholder }) {
  return (
    <div className="relative w-full max-w-xl">
      {/* Glass background */}
      <div className="glass-card rounded-2xl flex items-center gap-3 px-4 py-3 border border-sky-400/20 focus-within:border-sky-400/45 transition-all duration-300 focus-within:shadow-[0_0_30px_rgba(56,189,248,0.1)]">
        <Search className="w-4 h-4 text-slate-500 shrink-0" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder || "Search projects, technologies or skills..."}
          aria-label="Search projects"
          className="bg-transparent flex-1 text-sm text-slate-200 placeholder:text-slate-600 outline-none"
        />
        {value && (
          <button
            onClick={() => onChange("")}
            aria-label="Clear search"
            className="text-slate-500 hover:text-slate-300 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
