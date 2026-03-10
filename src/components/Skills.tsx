"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { resumeData } from "@/data/resume";

const { skills } = resumeData;

const CATEGORY_COLORS: Record<string, { bg: string; border: string; text: string; glow: string }> = {
  "AI & Deep Learning": {
    bg: "rgba(0,245,255,0.06)",
    border: "rgba(0,245,255,0.2)",
    text: "#00F5FF",
    glow: "rgba(0,245,255,0.1)",
  },
  "Software Engineering & Backend": {
    bg: "rgba(0,102,255,0.06)",
    border: "rgba(0,102,255,0.25)",
    text: "#5599FF",
    glow: "rgba(0,102,255,0.1)",
  },
  "Data Engineering & IoT": {
    bg: "rgba(124,58,237,0.06)",
    border: "rgba(124,58,237,0.25)",
    text: "#a78bfa",
    glow: "rgba(124,58,237,0.1)",
  },
  "Automation (RPA)": {
    bg: "rgba(16,185,129,0.06)",
    border: "rgba(16,185,129,0.25)",
    text: "#34d399",
    glow: "rgba(16,185,129,0.1)",
  },
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div className="relative section-pad" ref={ref}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 70% 50%, rgba(0,102,255,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="section-eyebrow mb-3">Technical Stack</p>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              color: "#f0f6ff",
            }}
          >
            Skills &{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00F5FF, #7C3AED)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Technologies
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items], ci) => {
            const colors = CATEGORY_COLORS[category] || CATEGORY_COLORS["AI & Deep Learning"];
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: ci * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="glass rounded-2xl p-6"
                style={{ border: `1px solid ${colors.border}` }}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: colors.text,
                      boxShadow: `0 0 10px ${colors.glow}`,
                      flexShrink: 0,
                    }}
                  />
                  <h3
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.9375rem",
                      color: colors.text,
                      letterSpacing: "0.01em",
                    }}
                  >
                    {category}
                  </h3>
                </div>

                {/* Skills pills */}
                <div className="flex flex-wrap gap-2">
                  {(items as string[]).map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: ci * 0.1 + si * 0.025, duration: 0.3 }}
                      whileHover={{
                        scale: 1.05,
                        background: colors.bg,
                        transition: { duration: 0.15 },
                      }}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        padding: "4px 12px",
                        borderRadius: "999px",
                        fontSize: "12px",
                        fontFamily: "'JetBrains Mono', monospace",
                        fontWeight: 400,
                        letterSpacing: "0.02em",
                        background: `${colors.bg}`,
                        border: `1px solid ${colors.border}`,
                        color: "rgba(240,246,255,0.75)",
                        cursor: "default",
                        transition: "all 0.2s ease",
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
