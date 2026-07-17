import type { Metadata } from "next";
import Link from "next/link";
import { aboutParagraphs, whyChooseUs } from "@/lib/content";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import CTABand from "../components/CTABand";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Profine Consultants Limited is an audit, tax, accounting and consulting firm based in Juba, South Sudan.",
};

const pillars = [
  { label: "Vision", body: "To go beyond numbers and, by so doing, become a leading professional firm in the market." },
  { label: "Mission", body: "To deliver timely, quality service in the most efficient and economic manner." },
  { label: "Purpose", body: "To provide tailor-made professional services consistent with legislation and professional standards." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="About Profine Consultants"
        intro="We go beyond numbers and create value for our clients."
        crumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-14 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-6">
            {aboutParagraphs.map((p, i) => (
              <Reveal key={i} delay={i * 60}>
                <p className="text-base leading-relaxed text-muted sm:text-lg">{p}</p>
              </Reveal>
            ))}
          </div>

          <aside>
            <div className="sticky top-28 space-y-4">
              {pillars.map((p) => (
                <div key={p.label} className="rounded-2xl border border-line bg-paper-2/40 p-6">
                  <p className="data-label text-orange">{p.label}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink">{p.body}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>

        {/* Values row */}
        <div className="mt-20">
          <h2 className="eyebrow data-label">What We Value</h2>
          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, i) => (
              <Reveal key={item.title} delay={i * 70} className="bg-paper">
                <div className="flex h-full flex-col p-7">
                  <span className="font-mono text-xs text-orange">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-display mt-3 text-lg font-semibold text-navy">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <Link href="/experience" className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-orange">
            See the assignments our staff have delivered
            <svg width="16" height="10" viewBox="0 0 16 10" aria-hidden>
              <path d="M1 5h13M10 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
          </Link>
        </div>
      </section>

      <CTABand />
    </>
  );
}
