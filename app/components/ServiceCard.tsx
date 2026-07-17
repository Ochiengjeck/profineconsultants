import Link from "next/link";
import type { Service } from "@/lib/content";

type Props = { service: Service; index: number };

export default function ServiceCard({ service, index }: Props) {
  return (
    <Link
      href={`/${service.slug}`}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-line bg-paper p-7 transition-all hover:-translate-y-1 hover:border-navy/30 hover:shadow-xl hover:shadow-navy-deep/5"
    >
      {/* Ledger index — services are a real, enumerable set */}
      <span className="font-mono text-xs text-orange">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="font-display mt-4 text-xl font-semibold text-navy">{service.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{service.short}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors group-hover:text-orange">
        Learn more
        <svg width="16" height="10" viewBox="0 0 16 10" aria-hidden className="transition-transform group-hover:translate-x-1">
          <path d="M1 5h13M10 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      </span>
      {/* Bottom accent bar reveals on hover */}
      <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-orange transition-transform duration-300 group-hover:scale-x-100" />
    </Link>
  );
}
