import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import {
  Mail,
  GitFork,
  Link,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import SectionTitle from "../components/ui/SectionTitle";
import GlassCard from "../components/ui/GlassCard";

const contactMethods = [
  {
    label: "Email",
    value: "nuwandi@example.com",
    href: "mailto:nuwandi@example.com",
    icon: Mail,
    description: "Best for project enquiries",
  },
  {
    label: "LinkedIn",
    value: "Nuwandi Dulshara",
    href: "https://linkedin.com/in/nuwandi-dulshara",
    icon: Link,
    description: "Professional profile",
  },
  {
    label: "GitHub",
    value: "@Nuwandi-Dulshara",
    href: "https://github.com/Nuwandi-Dulshara",
    icon: GitFork,
    description: "View my code",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [formState, setFormState] = useState("idle"); // idle | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString(),
      });
      if (res.ok) {
        setFormState("success");
        form.reset();
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-sky-400/18 text-slate-200 placeholder:text-slate-600 text-sm outline-none focus:border-sky-400/50 focus:shadow-[0_0_20px_rgba(56,189,248,0.08)] transition-all duration-200";

  return (
    <section id="contact" className="py-20 md:py-28" aria-label="Contact">
      <div className="section-container" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-ui text-sky-400 tracking-[0.25em] uppercase text-xs font-semibold mb-3">
            Contact
          </p>
          <h2 className="type-section-title font-bold text-white leading-tight">
            Let&apos;s Build
            <br />
            <span className="gradient-text">Something.</span>
          </h2>
          <p className="font-body mt-4 text-slate-400 text-sm sm:text-base md:text-lg max-w-lg leading-relaxed">
            Have a project, opportunity, collaboration or idea?
            <br className="hidden sm:block" />
            Let&apos;s connect.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact methods */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-4"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.45 }}
          >
            {contactMethods.map(({ label, value, href, icon: Icon, description }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={`${label}: ${value}`}
              >
                <GlassCard padding="p-4" className="group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-sky-400/10 border border-sky-400/20 flex items-center justify-center shrink-0 group-hover:bg-sky-400/18 transition-colors">
                      <Icon className="w-4.5 h-4.5 text-sky-400" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-slate-500">{description}</p>
                      <p className="text-sm font-medium text-slate-200 group-hover:text-sky-300 transition-colors truncate">
                        {value}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </a>
            ))}

            {/* Availability badge */}
            <GlassCard padding="p-4" hover={false}>
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <div>
                  <p className="text-sm font-medium text-slate-200">
                    Open to Opportunities
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Full-stack, AI/ML, and data engineering roles
                  </p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Contact form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.45 }}
          >
            <GlassCard>
              {formState === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
                  <CheckCircle className="w-12 h-12 text-emerald-400" />
                  <h3 className="text-lg font-semibold text-white">Message sent!</h3>
                  <p className="text-sm text-slate-400">
                    Thanks for reaching out. I&apos;ll get back to you soon.
                  </p>
                  <button
                    onClick={() => setFormState("idle")}
                    className="mt-2 text-sm text-sky-400 hover:text-sky-300 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  noValidate
                >
                  {/* Netlify hidden field */}
                  <input type="hidden" name="form-name" value="contact" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs text-slate-500 mb-1.5">
                        Your name
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Jane Smith"
                        required
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs text-slate-500 mb-1.5">
                        Your email
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="jane@company.com"
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs text-slate-500 mb-1.5">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      placeholder="Project enquiry / Collaboration / Opportunity"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs text-slate-500 mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell me about your project, idea, or opportunity..."
                      required
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {formState === "error" && (
                    <div className="flex items-center gap-2 text-red-400 text-xs">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      Something went wrong. Please try again or email me directly.
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-medium text-sm bg-sky-500/20 border border-sky-400/50 text-sky-100 hover:bg-sky-500/30 hover:border-sky-300/80 hover:shadow-[0_0_35px_rgba(56,189,248,0.2)] transition-all duration-300"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
