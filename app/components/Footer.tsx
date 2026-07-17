import Image from "next/image";
import Link from "next/link";
import { contact, firm, services } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="ledger-grid bg-navy-deep text-white/80">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <div className="inline-flex rounded-lg bg-white px-4 py-3">
              <Image
                src="/profine-logo.png"
                alt="Profine Consultants"
                width={620}
                height={304}
                className="h-8 w-auto"
              />
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              {firm.legalName} — {firm.descriptor.toLowerCase()}. We go beyond numbers and create
              value for our clients.
            </p>
            <div className="mt-6 flex gap-3">
              {contact.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-xs text-white/70 transition-colors hover:border-orange hover:text-orange"
                  aria-label={s.label}
                >
                  {s.label[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer">
            <p className="data-label text-orange">Quick Links</p>
            <ul className="mt-5 space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-orange">Home</Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-orange">About Us</Link>
              </li>
              <li>
                <Link href="/our-services" className="hover:text-orange">Services</Link>
              </li>
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/${s.slug}`} className="text-white/60 hover:text-orange">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p className="data-label text-orange">Contact Us</p>
            <address className="mt-5 space-y-4 text-sm not-italic">
              <p className="text-white/60">{contact.address}</p>
              <p>
                <a href={`mailto:${contact.email}`} className="hover:text-orange">
                  {contact.email}
                </a>
              </p>
              <ul className="space-y-1 font-mono text-[0.8rem] text-white/70">
                {contact.phones.map((p) => (
                  <li key={p}>
                    <a href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-orange">
                      {p}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="text-white/50">{contact.hours}</p>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {firm.legalName}. All rights reserved.</p>
          <p className="font-mono">{firm.city}</p>
        </div>
      </div>
    </footer>
  );
}
