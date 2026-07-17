import Link from "next/link";
import type { Service } from "@/lib/content";
import { services } from "@/lib/content";
import Reveal from "./Reveal";

export default function ServiceDetail({ service }: { service: Service }) {
  const others = services.filter((s) => s.slug !== service.slug);
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <div className="grid gap-14 lg:grid-cols-[1.6fr_1fr]">
        {/* Main */}
        <div>
          <Reveal>
            <p className="text-lg leading-relaxed text-muted">{service.summary}</p>
          </Reveal>

          <Reveal className="mt-12" delay={80}>
            <h2 className="eyebrow data-label">What We Do</h2>
            <ul className="mt-6 divide-y divide-line border-y border-line">
              {service.whatWeDo.map((item, i) => (
                <li key={item} className="flex items-baseline gap-4 py-4">
                  <span className="font-mono text-xs text-orange">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Sidebar */}
        <aside className="lg:pl-4">
          <div className="sticky top-28 space-y-8">
            <div className="rounded-2xl border border-line bg-paper-2/50 p-6">
              <p className="data-label text-orange">Other Services</p>
              <ul className="mt-4 space-y-1">
                {others.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/${s.slug}`}
                      className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-navy transition-colors hover:bg-paper"
                    >
                      {s.title}
                      <span className="text-orange opacity-0 transition-opacity group-hover:opacity-100">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-navy p-6 text-white">
              <p className="font-display text-lg font-semibold">Have a question?</p>
              <p className="mt-2 text-sm text-white/70">
                Speak with our team about how this service fits your organization.
              </p>
              <Link
                href="/contact-us"
                className="mt-5 inline-flex rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
              >
                Book A Consultation
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
