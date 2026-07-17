import Link from "next/link";
import {
  aboutParagraphs,
  contact,
  firm,
  services,
  whyChooseUs,
} from "@/lib/content";
import SectionHeading from "./components/SectionHeading";
import ServiceCard from "./components/ServiceCard";
import TrustedBy from "./components/TrustedBy";
import CTABand from "./components/CTABand";
import ContactForm from "./components/ContactForm";
import Reveal from "./components/Reveal";

export default function Home() {
  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="relative flex min-h-[calc(100dvh-5rem)] items-center overflow-hidden bg-navy-deep text-white">
        <div className="ledger-grid absolute inset-0 opacity-70" aria-hidden />
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-navy/60 blur-3xl" aria-hidden />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-orange/15 blur-3xl" aria-hidden />

        <div className="relative mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
          <p className="eyebrow data-label reveal">{firm.descriptor} — {firm.city}</p>

          <h1 className="font-display reveal mt-6 max-w-4xl text-5xl font-bold leading-[0.98] tracking-tight sm:text-7xl">
            More Than
            <br />
            Just <span className="text-orange">Numbers.</span>
          </h1>

          <p className="reveal mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            An audit, tax, accounting and consulting firm in the heart of Juba, South Sudan. We bring
            expert knowledge to your environment so you can move forward with confidence.
          </p>

          <div className="reveal mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact-us"
              className="rounded-full bg-orange px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
            >
              Book A Consultation
            </Link>
            <Link
              href="/our-services"
              className="rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/60"
            >
              Our Services
            </Link>
          </div>

          {/* Discipline strip */}
          <div className="reveal mt-12 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:mt-14 sm:grid-cols-4">
            {["Audit", "Tax", "Risk", "Advisory"].map((d) => (
              <div key={d} className="bg-navy-deep px-5 py-4 sm:py-5">
                <p className="font-display text-2xl font-semibold">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustedBy />

      {/* ---------------- About ---------------- */}
      <section id="about" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <SectionHeading
              eyebrow="About Profine"
              title={<>A collaborative approach that sets us apart.</>}
            />
            <Link
              href="/about-us"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-orange"
            >
              Read our full story
              <svg width="16" height="10" viewBox="0 0 16 10" aria-hidden>
                <path d="M1 5h13M10 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" />
              </svg>
            </Link>
          </div>
          <div className="space-y-5">
            {aboutParagraphs.map((p, i) => (
              <Reveal key={i} delay={i * 60}>
                <p className="text-base leading-relaxed text-muted sm:text-lg">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Why choose us ---------------- */}
      <section className="border-y border-line bg-paper-2/40">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading
            eyebrow="Why Choose Us"
            title={<>Built for the way you actually work.</>}
            align="center"
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, i) => (
              <Reveal key={item.title} delay={i * 70} className="bg-paper">
                <div className="flex h-full flex-col p-7">
                  <span className="font-mono text-xs text-orange">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display mt-3 text-lg font-semibold text-navy">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Services ---------------- */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Our Services"
            title={<>Tailored services for every need.</>}
          />
          <Link
            href="/our-services"
            className="hidden shrink-0 items-center gap-2 text-sm font-semibold text-navy hover:text-orange sm:inline-flex"
          >
            View all services
            <svg width="16" height="10" viewBox="0 0 16 10" aria-hidden>
              <path d="M1 5h13M10 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
          </Link>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 60}>
              <ServiceCard service={s} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand />

      {/* ---------------- Contact ---------------- */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Tips & Tricks"
              title={<>Let&apos;s start a conversation.</>}
              intro="Have a question, a project, or a compliance deadline on the horizon? Send us a note and our team will respond promptly."
            />
            <dl className="mt-10 space-y-6">
              <div>
                <dt className="data-label text-muted">Email</dt>
                <dd className="mt-1">
                  <a href={`mailto:${contact.email}`} className="text-navy hover:text-orange">
                    {contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="data-label text-muted">Phone</dt>
                <dd className="mt-1 font-mono text-sm text-ink">
                  {contact.phones.slice(0, 2).join("  ·  ")}
                </dd>
              </div>
              <div>
                <dt className="data-label text-muted">Office</dt>
                <dd className="mt-1 max-w-xs text-sm text-muted">{contact.address}</dd>
              </div>
            </dl>
          </div>
          <div className="rounded-3xl border border-line bg-paper-2/40 p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
