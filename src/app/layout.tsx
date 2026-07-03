import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TracePoint | Operational Accountability",
  description:
    "Firearms, training, qualification, and compliance management for law enforcement agencies.",
  applicationName: "TracePoint",
  keywords: [
    "TracePoint",
    "law enforcement firearms software",
    "police firearms management",
    "firearms qualification tracking",
    "armory management",
    "off duty firearms",
    "range training management",
  ],
  openGraph: {
    title: "TracePoint | Operational Accountability",
    description:
      "Firearms, training, qualification, and compliance management for law enforcement agencies.",
    siteName: "TracePoint",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
