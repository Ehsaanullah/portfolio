"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, ExternalLink } from "lucide-react";
import { resumeData } from "@/data/resume";

const { publications } = resumeData;

export default function Publications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div className="relative section-pad" ref={ref}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,102,255,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="section-eyebrow mb-3">Research Output</p>
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
            Published{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00F5FF, #0066FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Research
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-5">
          {publications.map((pub, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 group relative overflow-hidden"
              style={{ border: "1px solid rgba(0,245,255,0.1)" }}
              whileHover={{ borderColor: "rgba(0,245,255,0.2)" }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(90deg, transparent, #00F5FF, transparent)",
                }}
              />

              <div className="flex items-start gap-4">
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "10px",
                    background: "rgba(0,245,255,0.08)",
                    border: "1px solid rgba(0,245,255,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    color: "#00F5FF",
                  }}
                >
                  <BookOpen size={18} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span
                      className="chip"
                      style={{
                        background: pub.type === "Journal"
                          ? "rgba(0,245,255,0.08)"
                          : "rgba(0,102,255,0.08)",
                        border: pub.type === "Journal"
                          ? "1px solid rgba(0,245,255,0.2)"
                          : "1px solid rgba(0,102,255,0.2)",
                        color: pub.type === "Journal" ? "#00F5FF" : "#5599FF",
                      }}
                    >
                      {pub.type}
                    </span>
                    <span
                      className="chip"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "rgba(139,163,199,0.6)",
                      }}
                    >
                      {pub.year}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: "#f0f6ff",
                      marginBottom: "8px",
                      lineHeight: 1.4,
                    }}
                  >
                    {pub.title}
                  </h3>

                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.875rem",
                      color: "rgba(0,245,255,0.7)",
                      marginBottom: "4px",
                    }}
                  >
                    {pub.authors}
                  </div>

                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.8125rem",
                      color: "rgba(139,163,199,0.6)",
                      fontStyle: "italic",
                    }}
                  >
                    {pub.venue}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
