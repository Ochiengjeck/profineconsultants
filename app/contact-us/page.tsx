import type { Metadata } from "next";
import { contact } from "@/lib/content";
import PageHeader from "../components/PageHeader";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Book a meeting with Profine Consultants for consultations, queries, compliments and quotations. Juba, South Sudan.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get In Touch"
        title="Contact Us"
        intro="Our commitment to delivering quality services on time empowers you to make confident decisions."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          {/* Details */}
          <div>
            <h2 className="eyebrow data-label">Get In Touch</h2>
            <p className="font-display mt-4 text-2xl font-semibold leading-snug text-navy">
              Book a meeting now for consultations, queries, compliments and quotations.
            </p>

            <dl className="mt-10 space-y-8">
              <div>
                <dt className="data-label text-muted">Office Hours</dt>
                <dd className="mt-2 font-mono text-sm text-ink">{contact.hours}</dd>
              </div>
              <div>
                <dt className="data-label text-muted">Phone</dt>
                <dd className="mt-2 space-y-1">
                  {contact.phones.map((p) => (
                    <div key={p}>
                      <a
                        href={`tel:${p.replace(/\s/g, "")}`}
                        className="font-mono text-sm text-ink hover:text-orange"
                      >
                        {p}
                      </a>
                    </div>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="data-label text-muted">Email</dt>
                <dd className="mt-2">
                  <a href={`mailto:${contact.email}`} className="text-navy hover:text-orange">
                    {contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="data-label text-muted">Address</dt>
                <dd className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
                  {contact.address}
                </dd>
              </div>
            </dl>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-line bg-paper-2/40 p-6 sm:p-8">
            <p className="font-display text-lg font-semibold text-navy">Send us a message</p>
            <p className="mt-1 text-sm text-muted">We&apos;ll get back to you promptly.</p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
