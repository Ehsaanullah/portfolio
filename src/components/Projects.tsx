"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";
import { resumeData } from "@/data/resume";

const { projects } = resumeData;

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div className="relative section-pad grid-bg" ref={ref}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 30% 50%, rgba(0,245,255,0.03) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="section-eyebrow mb-3">Portfolio</p>
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
            Featured{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7C3AED, #0066FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Projects
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-6 group relative overflow-hidden flex flex-col"
              style={{ border: "1px solid rgba(124,58,237,0.15)" }}
            >
              {/* Top glow */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(124,58,237,0.8), rgba(0,245,255,0.8), transparent)",
                }}
              />

              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background: "rgba(124,58,237,0.12)",
                  border: "1px solid rgba(124,58,237,0.25)",
                  color: "#7C3AED",
                }}
              >
                <Code2 size={18} />
              </div>

              <div className="mb-1">
                <span
                  className="chip"
                  style={{
                    background: "rgba(124,58,237,0.1)",
                    border: "1px solid rgba(124,58,237,0.25)",
                    color: "#a78bfa",
                    fontSize: "10px",
                  }}
                >
                  {proj.context}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "#f0f6ff",
                  marginTop: "10px",
                  marginBottom: "10px",
                  lineHeight: 1.35,
                }}
              >
                {proj.title}
              </h3>

              <ul className="space-y-2 mb-4 flex-1">
                {proj.bullets.map((b, bi) => (
                  <li key={bi} className="flex items-start gap-2">
                    <span
                      style={{
                        width: 4,
                        height: 4,
                        borderRadius: "50%",
                        background: "#7C3AED",
                        marginTop: 7,
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.8125rem",
                        lineHeight: 1.65,
                        color: "rgba(139,163,199,0.8)",
                      }}
                    >
                      {b}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Stack tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {proj.stack.map((s) => (
                  <span
                    key={s}
                    className="chip"
                    style={{
                      background: "rgba(124,58,237,0.08)",
                      border: "1px solid rgba(124,58,237,0.2)",
                      color: "#a78bfa",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
