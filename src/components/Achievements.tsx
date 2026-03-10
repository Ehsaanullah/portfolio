"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, Award, Zap, Layers, Code2, TrendingUp } from "lucide-react";
import { resumeData } from "@/data/resume";

const { achievements } = resumeData;

const ICONS: Record<string, React.ReactNode> = {
  BookOpen: <BookOpen size={22} />,
  Award: <Award size={22} />,
  Zap: <Zap size={22} />,
  Layers: <Layers size={22} />,
  Code2: <Code2 size={22} />,
  TrendingUp: <TrendingUp size={22} />,
};

const TYPE_COLORS: Record<string, string> = {
  research: "#00F5FF",
  award: "#FFD700",
  impact: "#0066FF",
  project: "#7C3AED",
};

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      className="relative section-pad"
      style={{
        background:
          "linear-gradient(180deg, rgba(3,7,18,0) 0%, rgba(0,10,30,0.4) 50%, rgba(3,7,18,0) 100%)",
      }}
      ref={ref}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(124,58,237,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="section-eyebrow mb-3">Impact & Recognition</p>
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
            Key{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #FFD700, #FF6B35)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Achievements
            </span>
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((item, i) => {
            const color = TYPE_COLORS[item.type] || "#00F5FF";
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="glass rounded-2xl p-6 cursor-default group relative overflow-hidden"
                style={{
                  border: `1px solid ${color}18`,
                }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${color}12 0%, transparent 60%)`,
                  }}
                />

                {/* Spotlight border */}
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
                  }}
                />

                {/* Icon */}
                <div
                  className="mb-4 flex items-center justify-center w-12 h-12 rounded-xl"
                  style={{
                    background: `${color}12`,
                    border: `1px solid ${color}25`,
                    color: color,
                  }}
                >
                  {ICONS[item.icon]}
                </div>

                {/* Type badge */}
                <div className="mb-3">
                  <span
                    className="chip uppercase"
                    style={{
                      background: `${color}10`,
                      border: `1px solid ${color}30`,
                      color: color,
                    }}
                  >
                    {item.type}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "#f0f6ff",
                    marginBottom: "8px",
                    lineHeight: 1.3,
                  }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.875rem",
                    lineHeight: 1.65,
                    color: "rgba(139,163,199,0.8)",
                  }}
                >
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
