"use client";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, Linkedin, MapPin } from "lucide-react";
import { resumeData } from "@/data/resume";

const { basics, top3Impact } = resumeData;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center section-pad pt-24 pb-32">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0,102,255,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto w-full text-center">
        {/* Eyebrow */}
        <motion.div {...fadeUp(0.1)} className="flex items-center justify-center gap-3 mb-6">
          <span
            style={{
              width: 32,
              height: 1,
              background: "linear-gradient(90deg, transparent, #00F5FF)",
              display: "inline-block",
            }}
          />
          <span className="section-eyebrow">AI Engineer · Researcher · Builder</span>
          <span
            style={{
              width: 32,
              height: 1,
              background: "linear-gradient(90deg, #00F5FF, transparent)",
              display: "inline-block",
            }}
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.2)}
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2.8rem, 8vw, 7rem)",
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            marginBottom: "1.5rem",
          }}
        >
          <span style={{ color: "#f0f6ff" }}>Muhammad</span>
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #00F5FF 0%, #0066FF 50%, #7C3AED 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Ehsan
          </span>
        </motion.h1>

        {/* Title badge */}
        <motion.div {...fadeUp(0.3)} className="flex justify-center mb-6">
          <span
            className="chip text-sm py-1.5 px-4"
            style={{
              fontSize: "13px",
              background: "rgba(0,245,255,0.06)",
              border: "1px solid rgba(0,245,255,0.2)",
              color: "#00F5FF",
              fontFamily: "'JetBrains Mono', monospace",
              letterSpacing: "0.05em",
            }}
          >
            {basics.title}
          </span>
        </motion.div>

        {/* Summary */}
        <motion.p
          {...fadeUp(0.35)}
          className="max-w-2xl mx-auto mb-10"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(1rem, 2vw, 1.125rem)",
            lineHeight: 1.75,
            color: "rgba(139,163,199,0.9)",
            fontWeight: 300,
          }}
        >
          {basics.summary}
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.45)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <button
            onClick={() =>
              document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })
            }
            className="group relative overflow-hidden flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-medium transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #0066FF, #00F5FF)",
              color: "#000",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.02em",
              boxShadow: "0 0 30px rgba(0,102,255,0.3)",
            }}
          >
            <span>View Experience</span>
            <ArrowDown size={15} className="group-hover:translate-y-1 transition-transform" />
          </button>

          <a
            href="/Muhammad_Ehsan_CV.pdf"
            download="Muhammad_Ehsan_CV.pdf"
            className="flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-medium transition-all duration-300 glass glass-hover"
            style={{
              color: "rgba(240,246,255,0.8)",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 500,
              letterSpacing: "0.02em",
            }}
          >
            <Download size={15} />
            <span>Download Resume</span>
          </a>
        </motion.div>

        {/* Contact strip */}
        <motion.div
          {...fadeUp(0.55)}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          {[
            { icon: <MapPin size={13} />, label: basics.location, href: null },
            { icon: <Mail size={13} />, label: basics.email, href: `mailto:${basics.email}` },
            {
              icon: (
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              ),
              label: "LinkedIn",
              href: basics.linkedin,
            },
          ].map((item, i) =>
            item.href ? (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs transition-colors hover:text-cyan-400"
                style={{
                  color: "rgba(139,163,199,0.6)",
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: "0.02em",
                }}
              >
                {item.icon}
                {item.label}
              </a>
            ) : (
              <span
                key={i}
                className="flex items-center gap-1.5 text-xs"
                style={{
                  color: "rgba(139,163,199,0.6)",
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: "0.02em",
                }}
              >
                {item.icon}
                {item.label}
              </span>
            )
          )}
        </motion.div>

        {/* Top 3 Impact strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
        >
          {top3Impact.map((item, i) => (
            <div
              key={i}
              className="impact-card text-center"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0,102,255,0.08), rgba(0,245,255,0.04))",
                border: "1px solid rgba(0,245,255,0.12)",
                borderRadius: "12px",
                padding: "1.25rem",
              }}
            >
              <div
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800,
                  fontSize: "1.75rem",
                  background: "linear-gradient(135deg, #00F5FF, #0066FF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  lineHeight: 1,
                  marginBottom: "4px",
                }}
              >
                {item.metric}
              </div>
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "rgba(240,246,255,0.7)",
                  fontFamily: "'DM Sans', sans-serif",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginBottom: "4px",
                }}
              >
                {item.unit}
              </div>
              <div
                style={{
                  fontSize: "11px",
                  color: "rgba(139,163,199,0.6)",
                  fontFamily: "'DM Sans', sans-serif",
                  lineHeight: 1.4,
                }}
              >
                {item.description}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "9px",
            letterSpacing: "0.2em",
            color: "rgba(0,245,255,0.4)",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown size={14} style={{ color: "rgba(0,245,255,0.4)" }} />
        </motion.div>
      </motion.div>
    </div>
  );
}
