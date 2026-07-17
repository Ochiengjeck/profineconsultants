import type { Metadata } from "next";
import { engagements } from "@/lib/content";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import CTABand from "../components/CTABand";

export const metadata: Metadata = {
  title: "Staff Experience",
  description:
    "Profine's key staff have delivered audit and assurance assignments for UNICEF, UNDP, WFP, IFRC, UNHCR, TEARFUND and many more.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Key Staff Experience"
        title="Staff Experience"
        intro="Profine's key staff members have a wide range of experience and have directly been involved in the execution of various assignments. Below are some of the engagements they have delivered."
        crumbs={[{ label: "Home", href: "/" }, { label: "Staff Experience" }]}
      />

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        {/* Summary stat line */}
        <Reveal className="mb-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
          {[
            { n: `${engagements.length}`, l: "Named engagements" },
            { n: "Since 2015", l: "Auditing in South Sudan" },
            { n: "5+", l: "International agencies served" },
          ].map((s) => (
            <div key={s.l} className="bg-paper px-6 py-7">
              <p className="font-display text-3xl font-bold text-navy">{s.n}</p>
              <p className="data-label mt-2 text-muted">{s.l}</p>
            </div>
          ))}
        </Reveal>

        {/* Ledger of engagements */}
        <div className="overflow-hidden rounded-2xl border border-line">
          {/* header row (desktop) */}
          <div className="hidden grid-cols-[1.1fr_2fr_auto] gap-6 border-b border-line bg-navy px-6 py-4 text-white sm:grid">
            <span className="data-label text-white/60">Client</span>
            <span className="data-label text-white/60">Nature of Assignment</span>
            <span className="data-label text-right text-white/60">Since</span>
          </div>
          <ul>
            {engagements.map((e, i) => (
              <Reveal key={e.client} as="li" delay={Math.min(i * 30, 240)}>
                <div className="grid grid-cols-1 gap-2 border-b border-line px-6 py-5 transition-colors last:border-b-0 hover:bg-paper-2/50 sm:grid-cols-[1.1fr_2fr_auto] sm:gap-6">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-orange">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-display font-semibold text-navy">{e.client}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted sm:pl-0">{e.work}</p>
                  <p className="font-mono text-xs text-ink sm:text-right sm:tabular-nums">
                    {e.since ?? "—"}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CTABand
        heading="Put this experience to work for you."
        body="From statutory audits to donor-funded project assurance, our team has done it before."
      />
    </>
  );
}
