import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Argus UI/UX — The Sovereign Skill",
  description: "Advanced AI-Driven Design & Engineering Hub",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#0A0A0B] text-white">
      <body>{children}</body>
    </html>
  );
}
