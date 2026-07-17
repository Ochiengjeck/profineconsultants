import Link from "next/link";

type Props = {
  heading?: string;
  body?: string;
};

/** Reusable closing call-to-action band. */
export default function CTABand({
  heading = "Ready to go beyond the numbers?",
  body = "Book a meeting now for consultations, queries, compliments and quotations.",
}: Props) {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div className="ledger-grid absolute inset-0 opacity-60" aria-hidden />
      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-8 px-5 py-16 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 text-white/70">{body}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/contact-us"
            className="rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
          >
            Book A Consultation
          </Link>
          <Link
            href="/our-services"
            className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/60"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}
