import type { Metadata } from "next";
import { services } from "@/lib/content";
import PageHeader from "../components/PageHeader";
import ServiceCard from "../components/ServiceCard";
import Reveal from "../components/Reveal";
import CTABand from "../components/CTABand";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Audit & assurance, internal audit & risk management, tax compliance & consulting, management consulting and outsourced services — tailored for every need.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="Tailored services for every need"
        intro="A full range of audit, risk, tax and advisory services — delivered under one roof and shaped around your organization."
        crumbs={[{ label: "Home", href: "/" }, { label: "Our Services" }]}
      />

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 60}>
              <ServiceCard service={s} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
