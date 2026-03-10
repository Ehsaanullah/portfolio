"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Calendar, Globe2 } from "lucide-react";
import { resumeData } from "@/data/resume";

const { certifications, languages } = resumeData;

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div className="relative section-pad grid-bg" ref={ref}>
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="section-eyebrow mb-3">Credentials</p>
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
            Certifications &{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #FFD700, #FF6B35)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Languages
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 group relative overflow-hidden"
              style={{ border: "1px solid rgba(255,215,0,0.12)" }}
              whileHover={{ borderColor: "rgba(255,215,0,0.25)" }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(90deg, transparent, #FFD700, transparent)" }}
              />

              <div className="flex items-start gap-4">
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: "12px",
                    background: "rgba(255,215,0,0.08)",
                    border: "1px solid rgba(255,215,0,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    color: "#FFD700",
                  }}
                >
                  <Award size={19} />
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: "#f0f6ff",
                      marginBottom: "4px",
                    }}
                  >
                    {cert.title}
                  </h3>
                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.875rem",
                      color: "rgba(255,215,0,0.7)",
                      marginBottom: "6px",
                    }}
                  >
                    {cert.issuer}
                  </div>
                  <div
                    className="flex items-center gap-1.5"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "11px",
                      color: "rgba(139,163,199,0.5)",
                    }}
                  >
                    <Calendar size={11} />
                    {cert.date}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass rounded-2xl p-6"
          style={{ border: "1px solid rgba(0,245,255,0.1)" }}
        >
          <div className="flex items-center gap-3 mb-5">
            <Globe2 size={18} style={{ color: "#00F5FF" }} />
            <h3
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: "1rem",
                color: "#00F5FF",
              }}
            >
              Language Skills
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {languages.map((lang, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl"
                style={{
                  background: "rgba(0,245,255,0.05)",
                  border: "1px solid rgba(0,245,255,0.15)",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    color: "#f0f6ff",
                  }}
                >
                  {lang.language}
                </span>
                <span
                  className="chip"
                  style={{
                    background: "rgba(0,245,255,0.08)",
                    border: "1px solid rgba(0,245,255,0.15)",
                    color: "rgba(0,245,255,0.7)",
                    fontSize: "10px",
                  }}
                >
                  {lang.level}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
