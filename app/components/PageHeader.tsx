import Link from "next/link";

type Crumb = { label: string; href?: string };

type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
  crumbs?: Crumb[];
};

/** Navy interior-page hero with the ledger-grid motif. */
export default function PageHeader({ eyebrow, title, intro, crumbs }: Props) {
  return (
    <section className="relative overflow-hidden bg-navy-deep text-white">
      <div className="ledger-grid absolute inset-0 opacity-70" aria-hidden />
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange/20 blur-3xl" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        {crumbs && (
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 font-mono text-xs text-white/50">
            {crumbs.map((c, i) => (
              <span key={`${c.label}-${i}`} className="flex items-center gap-2">
                {c.href ? (
                  <Link href={c.href} className="hover:text-orange">{c.label}</Link>
                ) : (
                  <span className="text-white/80">{c.label}</span>
                )}
                {i < crumbs.length - 1 && <span className="text-white/25">/</span>}
              </span>
            ))}
          </nav>
        )}
        <span className="eyebrow data-label reveal">{eyebrow}</span>
        <h1 className="font-display reveal mt-4 max-w-3xl text-4xl font-bold leading-[1.05] sm:text-5xl">
          {title}
        </h1>
        {intro && (
          <p className="reveal mt-6 max-w-2xl text-lg leading-relaxed text-white/70">{intro}</p>
        )}
      </div>
    </section>
  );
}
