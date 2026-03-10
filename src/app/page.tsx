"use client";
import { useState, useEffect } from "react";
import SplashScreen from "@/components/SplashScreen";
import AnimatedBackground from "@/components/AnimatedBackground";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Publications from "@/components/Publications";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";

export default function Home() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
      {!splashDone && <SplashScreen onComplete={() => setSplashDone(true)} />}
      <div
        className="relative min-h-screen"
        style={{ opacity: splashDone ? 1 : 0, transition: "opacity 0.5s ease" }}
      >
        <AnimatedBackground />
        <Navigation />
        <main>
          <section id="hero">
            <Hero />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="achievements">
            <Achievements />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="education">
            <Education />
          </section>
          <section id="publications">
            <Publications />
          </section>
          <section id="certifications">
            <Certifications />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
