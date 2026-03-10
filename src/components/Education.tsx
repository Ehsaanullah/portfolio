"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, MapPin, Calendar, FileText } from "lucide-react";
import { resumeData } from "@/data/resume";

const { education } = resumeData;

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div className="relative section-pad grid-bg" ref={ref}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,245,255,0.03) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="section-eyebrow mb-3">Education & Training</p>
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
            Academic{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00F5FF, #0066FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Background
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="glass rounded-2xl p-6 md:p-7 group relative overflow-hidden"
              style={{ border: "1px solid rgba(0,245,255,0.1)" }}
              whileHover={{ borderColor: "rgba(0,245,255,0.25)" }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(90deg, transparent, #00F5FF, transparent)",
                }}
              />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: "12px",
                      background: "rgba(0,245,255,0.08)",
                      border: "1px solid rgba(0,245,255,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      color: "#00F5FF",
                    }}
                  >
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <h3
                        style={{
                          fontFamily: "'Syne', sans-serif",
                          fontWeight: 700,
                          fontSize: "1.05rem",
                          color: "#f0f6ff",
                        }}
                      >
                        {edu.degree}
                      </h3>
                      {edu.current && (
                        <span
                          className="chip"
                          style={{
                            background: "rgba(0,245,255,0.1)",
                            border: "1px solid rgba(0,245,255,0.3)",
                            color: "#00F5FF",
                          }}
                        >
                          Current
                        </span>
                      )}
                    </div>
                    <div
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 500,
                        fontSize: "0.9rem",
                        color: "rgba(0,245,255,0.75)",
                        marginBottom: "8px",
                      }}
                    >
                      {edu.institution}
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs mb-3" style={{ color: "rgba(139,163,199,0.6)" }}>
                      <span className="flex items-center gap-1.5">
                        <Calendar size={11} />
                        <span style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                          {edu.startDate} → {edu.endDate}
                        </span>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={11} />
                        {edu.location}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <span
                        className="chip"
                        style={{
                          background: "rgba(0,102,255,0.08)",
                          border: "1px solid rgba(0,102,255,0.2)",
                          color: "#5599FF",
                        }}
                      >
                        {edu.eqf}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Thesis */}
              <div
                className="mt-4 pt-4 flex items-start gap-3"
                style={{ borderTop: "1px solid rgba(0,245,255,0.06)" }}
              >
                <FileText size={14} style={{ color: "rgba(0,245,255,0.5)", marginTop: 2, flexShrink: 0 }} />
                <div>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "10px",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "rgba(0,245,255,0.5)",
                      display: "block",
                      marginBottom: "4px",
                    }}
                  >
                    Thesis
                  </span>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.875rem",
                      color: "rgba(139,163,199,0.8)",
                      lineHeight: 1.6,
                      fontStyle: "italic",
                    }}
                  >
                    {edu.thesis}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
