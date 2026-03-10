import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Ehsan — AI Engineer",
  description:
    "Artificial Intelligence Engineer specializing in Computer Vision, Deep Learning, and Full-Stack Software Engineering. Published researcher and builder of real-time intelligent systems.",
  keywords: ["AI Engineer", "Computer Vision", "Deep Learning", "YOLOv8", "Muhammad Ehsan"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
