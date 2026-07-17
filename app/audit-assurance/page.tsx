import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import ServiceDetail from "../components/ServiceDetail";
import CTABand from "../components/CTABand";
import { getService } from "@/lib/content";

const service = getService("audit-assurance")!;

export const metadata: Metadata = {
  title: service.title,
  description: service.summary,
};

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Services Detail"
        title={service.title}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Our Services", href: "/our-services" },
          { label: service.title },
        ]}
      />
      <ServiceDetail service={service} />
      <CTABand />
    </>
  );
}
