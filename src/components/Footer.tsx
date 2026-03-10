"use client";
import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, Phone } from "lucide-react";
import { resumeData } from "@/data/resume";

const { basics } = resumeData;

export default function Footer() {
  return (
    <footer
      className="relative py-16 px-4"
      style={{
        borderTop: "1px solid rgba(0,245,255,0.08)",
        background: "linear-gradient(180deg, rgba(3,7,18,0) 0%, rgba(0,10,30,0.4) 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-10">
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: "1.5rem",
                letterSpacing: "-0.02em",
                marginBottom: "8px",
              }}
            >
              <span style={{ color: "#f0f6ff" }}>Muhammad </span>
              <span
                style={{
                  background: "linear-gradient(135deg, #00F5FF, #0066FF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Ehsan
              </span>
            </div>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "11px",
                letterSpacing: "0.15em",
                color: "rgba(0,245,255,0.5)",
                textTransform: "uppercase",
              }}
            >
              AI Engineer · Researcher · Builder
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            {[
              { icon: <Mail size={13} />, label: basics.email, href: `mailto:${basics.email}` },
              { icon: <Phone size={13} />, label: basics.phone, href: `tel:${basics.phone}` },
              { icon: <MapPin size={13} />, label: basics.location, href: null },
              {
                icon: (
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                ),
                label: "LinkedIn Profile",
                href: basics.linkedin,
              },
            ].map((item, i) =>
              item.href ? (
                <a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-cyan-400"
                  style={{
                    color: "rgba(139,163,199,0.6)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "12px",
                  }}
                >
                  {item.icon}
                  {item.label}
                </a>
              ) : (
                <span
                  key={i}
                  className="flex items-center gap-2"
                  style={{
                    color: "rgba(139,163,199,0.4)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "12px",
                  }}
                >
                  {item.icon}
                  {item.label}
                </span>
              )
            )}
          </div>
        </div>

        {/* Bottom */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(0,245,255,0.06)" }}
        >
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "10px",
              color: "rgba(139,163,199,0.3)",
              letterSpacing: "0.05em",
            }}
          >
            © {new Date().getFullYear()} Muhammad Ehsan. All rights reserved.
          </span>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "10px",
              color: "rgba(139,163,199,0.3)",
              letterSpacing: "0.05em",
            }}
          >
            Built with Next.js · Framer Motion · TailwindCSS
          </span>
        </div>
      </div>
    </footer>
  );
}
