import { trustedBy } from "@/lib/content";

/** Marquee credibility strip — the firm audits major international organizations. */
export default function TrustedBy() {
  const items = [...trustedBy, ...trustedBy];
  return (
    <div className="border-y border-white/10 bg-navy-deep py-6">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="data-label mb-5 text-center text-white/40">
          Trusted on assignments for
        </p>
        <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
          <div className="marquee-track">
            {items.map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="font-display whitespace-nowrap text-lg font-semibold text-white/55"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
