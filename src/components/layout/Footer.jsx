import { GitFork, Link, Mail, ArrowUp } from "lucide-react";

const footerLinks = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/Nuwandi-Dulshara", icon: GitFork },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nuwandi-dulshara-523365251/", icon: Link },
  { label: "Email", href: "mailto:nuwandi@example.com", icon: Mail },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-24 border-t border-sky-400/10">
      {/* Subtle top glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/30 to-transparent" />

      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <p className="font-josefin font-bold text-xl text-white tracking-wide">
              <span className="text-sky-400">N</span>uwandi
              <span className="text-sky-400">.</span>
            </p>
            <p className="font-inter mt-2 text-sm text-slate-500 leading-relaxed">
              Full-Stack Software Engineer
              <br />
              Sri Lanka
            </p>
            {/* Social icons */}
            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="p-2 rounded-xl border border-sky-400/15 text-slate-500 hover:text-sky-300 hover:border-sky-400/40 hover:bg-sky-400/8 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <p className="font-inter text-xs font-semibold tracking-widest uppercase text-slate-500 mb-4">
              Navigation
            </p>
            <ul className="space-y-2" role="list">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-inter text-sm text-slate-400 hover:text-sky-300 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Status / CTA */}
          <div>
            <p className="font-inter text-xs font-semibold tracking-widest uppercase text-slate-500 mb-4">
              Availability
            </p>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-inter text-sm text-slate-300">Open to opportunities</span>
            </div>
            <p className="font-inter text-xs text-slate-500">
              Interested in full-stack, AI/ML, or data engineering roles.
            </p>
            <a
              href="/#contact"
              className="font-dmsans font-semibold mt-4 inline-block text-sm text-sky-400 hover:text-sky-300 transition-colors"
            >
              Let&apos;s connect →
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-sky-400/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-inter text-xs text-slate-500">
            © {new Date().getFullYear()} Nuwandi Dulshara. Built with React + Vite + Tailwind CSS.
          </p>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-2 text-xs text-slate-500 hover:text-sky-300 transition-colors group"
          >
            Back to top
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
