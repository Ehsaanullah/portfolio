"use client";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Briefcase, ChevronDown, MapPin, Calendar } from "lucide-react";
import { resumeData } from "@/data/resume";

const { experience } = resumeData;

export default function Experience() {
  const [expanded, setExpanded] = useState<number | null>(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div className="relative section-pad grid-bg">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,102,255,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="section-eyebrow mb-3">Work Experience</p>
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
            Where I've{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00F5FF, #0066FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Built & Shipped
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-px hidden md:block"
            style={{
              background:
                "linear-gradient(to bottom, #00F5FF, rgba(0,245,255,0.2), transparent)",
              marginLeft: "11px",
            }}
          />

          <div className="flex flex-col gap-6 md:pl-12">
            {experience.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative"
              >
                {/* Timeline dot (desktop) */}
                <div
                  className="absolute -left-12 top-5 hidden md:flex items-center justify-center"
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    background: job.current
                      ? "linear-gradient(135deg, #00F5FF, #0066FF)"
                      : "rgba(0,245,255,0.1)",
                    border: job.current
                      ? "none"
                      : "1px solid rgba(0,245,255,0.3)",
                    boxShadow: job.current
                      ? "0 0 15px rgba(0,245,255,0.4)"
                      : "none",
                  }}
                >
                  {job.current && (
                    <motion.div
                      animate={{ scale: [1, 1.4, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: "#fff",
                      }}
                    />
                  )}
                </div>

                {/* Card */}
                <div
                  className="glass glass-hover rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
                  style={{
                    border: expanded === i
                      ? "1px solid rgba(0,245,255,0.25)"
                      : "1px solid rgba(0,245,255,0.08)",
                    boxShadow: expanded === i
                      ? "0 0 40px rgba(0,245,255,0.06)"
                      : "none",
                  }}
                  onClick={() => setExpanded(expanded === i ? null : i)}
                >
                  {/* Card header */}
                  <div className="p-5 md:p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <span
                            style={{
                              fontFamily: "'Syne', sans-serif",
                              fontWeight: 700,
                              fontSize: "1.05rem",
                              color: "#f0f6ff",
                            }}
                          >
                            {job.company}
                          </span>
                          {job.current && (
                            <span
                              className="chip"
                              style={{
                                background: "rgba(0,245,255,0.1)",
                                border: "1px solid rgba(0,245,255,0.3)",
                                color: "#00F5FF",
                                fontSize: "10px",
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
                            fontSize: "0.875rem",
                            color: "rgba(0,245,255,0.8)",
                            marginBottom: "8px",
                          }}
                        >
                          {job.role}
                        </div>
                        <div className="flex flex-wrap items-center gap-3 text-xs" style={{ color: "rgba(139,163,199,0.6)" }}>
                          <span className="flex items-center gap-1.5">
                            <Calendar size={11} />
                            <span style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                              {job.startDate} → {job.endDate}
                            </span>
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin size={11} />
                            <span style={{ fontFamily: "'DM Sans', sans-serif" }}>
                              {job.location}
                            </span>
                          </span>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: expanded === i ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ color: "rgba(0,245,255,0.5)", flexShrink: 0, marginTop: 2 }}
                      >
                        <ChevronDown size={18} />
                      </motion.div>
                    </div>

                    {/* Tags always visible */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {job.tags.map((tag) => (
                        <span key={tag} className="chip">{tag}</span>
                      ))}
                    </div>
                  </div>

                  {/* Expanded content */}
                  <AnimatePresence>
                    {expanded === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        style={{ overflow: "hidden" }}
                      >
                        <div
                          className="px-5 md:px-6 pb-5 md:pb-6"
                          style={{
                            borderTop: "1px solid rgba(0,245,255,0.06)",
                            paddingTop: "1.25rem",
                          }}
                        >
                          <ul className="space-y-3">
                            {job.bullets.map((bullet, bi) => (
                              <motion.li
                                key={bi}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: bi * 0.06 }}
                                className="flex items-start gap-3"
                              >
                                <span
                                  style={{
                                    width: 5,
                                    height: 5,
                                    borderRadius: "50%",
                                    background: "#00F5FF",
                                    marginTop: 7,
                                    flexShrink: 0,
                                    boxShadow: "0 0 6px rgba(0,245,255,0.6)",
                                  }}
                                />
                                <span
                                  style={{
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontSize: "0.875rem",
                                    lineHeight: 1.7,
                                    color: "rgba(139,163,199,0.9)",
                                  }}
                                >
                                  {bullet}
                                </span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
