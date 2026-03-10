"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

const NAV_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "Achievements" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "publications", label: "Research" },
];

export default function Navigation() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);

      // Progress
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((y / total) * 100);

      // Active section
      for (const item of NAV_ITEMS.slice().reverse()) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(item.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      {/* Scroll progress */}
      <div
        className="fixed top-0 left-0 h-[2px] z-50 transition-all"
        style={{
          width: `${scrollProgress}%`,
          background: "linear-gradient(90deg, #0066FF, #00F5FF)",
          boxShadow: "0 0 8px rgba(0,245,255,0.6)",
        }}
      />

      <nav
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(3,7,18,0.85)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(0,245,255,0.08)" : "none",
          paddingTop: "2px",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button onClick={() => scrollTo("hero")} className="flex items-center gap-2">
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: "8px",
                  background: "linear-gradient(135deg, rgba(0,102,255,0.3), rgba(0,245,255,0.15))",
                  border: "1px solid rgba(0,245,255,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  fontSize: "13px",
                  color: "#00F5FF",
                }}
              >
                ME
              </div>
              <span
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 600,
                  fontSize: "14px",
                  color: "rgba(240,246,255,0.8)",
                  letterSpacing: "0.02em",
                }}
              >
                Muhammad Ehsan
              </span>
            </button>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="relative px-3 py-1.5 text-sm transition-colors duration-200"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: active === item.id ? 500 : 400,
                    color: active === item.id ? "#00F5FF" : "rgba(139,163,199,0.8)",
                    letterSpacing: "0.01em",
                  }}
                >
                  {active === item.id && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-md"
                      style={{ background: "rgba(0,245,255,0.06)", border: "1px solid rgba(0,245,255,0.12)" }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile burger */}
            <button
              className="md:hidden p-2 rounded-md"
              style={{ color: "rgba(0,245,255,0.7)" }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden"
              style={{
                background: "rgba(3,7,18,0.97)",
                backdropFilter: "blur(20px)",
                borderBottom: "1px solid rgba(0,245,255,0.1)",
              }}
            >
              <div className="px-4 py-4 flex flex-col gap-1">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className="text-left py-3 px-3 rounded-lg text-sm transition-colors"
                    style={{
                      color: active === item.id ? "#00F5FF" : "rgba(139,163,199,0.8)",
                      background: active === item.id ? "rgba(0,245,255,0.06)" : "transparent",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile bottom nav */}
      <div
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
        style={{
          background: "rgba(3,7,18,0.92)",
          backdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(0,245,255,0.08)",
        }}
      >
        <div className="flex items-center justify-around h-14 px-2">
          {NAV_ITEMS.slice(0, 5).map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="flex flex-col items-center gap-0.5 min-w-[44px] py-1"
            >
              <span
                className="w-1 h-1 rounded-full transition-all duration-200"
                style={{
                  background: active === item.id ? "#00F5FF" : "transparent",
                  boxShadow: active === item.id ? "0 0 6px #00F5FF" : "none",
                }}
              />
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "9px",
                  color: active === item.id ? "#00F5FF" : "rgba(139,163,199,0.5)",
                  letterSpacing: "0.05em",
                }}
              >
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
