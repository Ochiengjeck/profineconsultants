import type { Metadata } from "next";
import { Geist, Geist_Mono, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { firm } from "@/lib/content";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://profineconsultants.com"),
  title: {
    default: `${firm.name} — Audit · Tax · Consulting`,
    template: `%s — ${firm.name}`,
  },
  description:
    "Profine Consultants is an audit, tax, accounting and consulting firm based in Juba, South Sudan. More than just numbers — we create value for our clients.",
  icons: { icon: "/profine-icon.png" },
  openGraph: {
    title: `${firm.name} — Audit · Tax · Consulting`,
    description:
      "Audit, tax, accounting and consulting firm based in Juba, South Sudan.",
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
      className={`${geistSans.variable} ${geistMono.variable} ${bricolage.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
