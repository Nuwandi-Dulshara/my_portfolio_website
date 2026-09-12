import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import useScrollPosition from "../../hooks/useScrollPosition";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrollY = useScrollPosition();
  const location = useLocation();
  const isScrolled = scrollY > 40;

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    // Handle smooth scroll for hash links on same page
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
  };

  return (
    <>
      <header
        className={[
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          isScrolled
            ? "glass-card border-b border-sky-400/10 backdrop-blur-2xl"
            : "bg-transparent",
        ].join(" ")}
      >
        <nav
          className="section-container flex items-center justify-between h-16 md:h-18"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            to="/"
            className="font-josefin font-bold text-xl text-white tracking-wide hover:text-sky-300 transition-colors duration-200"
            aria-label="Nuwandi Dulshara — Home"
          >
            <span className="text-sky-400">N</span>uwandi
            <span className="text-sky-400">.</span>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="font-inter px-4 py-2 text-sm text-slate-400 hover:text-sky-300 rounded-full hover:bg-sky-400/8 transition-all duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/resume/nuwandi-dulshara-resume.pdf"
              download
              className="font-poppins px-4 py-2 rounded-full text-xs sm:text-sm font-medium border border-sky-400/30 bg-sky-400/8 text-sky-300 hover:bg-sky-400/18 hover:border-sky-400/55 hover:shadow-[0_0_20px_rgba(56,189,248,0.2)] transition-all duration-200"
            >
              Download CV
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/8 transition-colors"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </header>

      {/* Mobile overlay menu */}
      <div
        className={[
          "fixed inset-0 z-40 md:hidden transition-all duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
        aria-hidden={!mobileOpen}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-slate-950/85 backdrop-blur-xl"
          onClick={() => setMobileOpen(false)}
        />

        {/* Menu panel */}
        <nav
          className={[
            "absolute top-16 inset-x-0 glass-card border-y border-sky-400/15 px-6 py-8 transition-transform duration-300",
            mobileOpen ? "translate-y-0" : "-translate-y-4",
          ].join(" ")}
        >
          <ul className="flex flex-col gap-2" role="list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="font-inter block px-4 py-3 text-base text-slate-300 hover:text-sky-300 rounded-xl hover:bg-sky-400/8 transition-all duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-6 pt-6 border-t border-sky-400/12">
            <a
              href="/resume/nuwandi-dulshara-resume.pdf"
              download
              className="font-poppins block w-full text-center px-4 py-3 rounded-full text-sm font-medium border border-sky-400/30 bg-sky-400/8 text-sky-300 hover:bg-sky-400/18"
            >
              Download CV
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
