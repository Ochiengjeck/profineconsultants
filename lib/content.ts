// Single source of truth for site content, recovered from the archived
// profineconsultants.com. See docs/CONTENT.md for provenance.

export const firm = {
  name: "Profine Consultants",
  legalName: "Profine Consultants Limited",
  tagline: "More Than Just Numbers",
  descriptor: "Audit · Tax · Consulting",
  city: "Juba, South Sudan",
} as const;

export const contact = {
  address: "Hai Tarawa Block 4, House 279, After Nana Corner Bridge, Juba, South Sudan",
  email: "info@profineconsultants.com",
  hours: "8AM – 5PM, Mon – Sat",
  phones: [
    "+211 925 771 799",
    "+211 920 101 164",
    "+254 705 010 610",
    "+254 727 276 831",
  ],
  socials: [
    { label: "Facebook", href: "#" },
    { label: "Twitter", href: "#" },
    { label: "YouTube", href: "#" },
  ],
} as const;

export const aboutParagraphs = [
  "Profine Consultants is an audit, tax, accounting and consulting firm. It is located in the business hub and capital city Juba, South Sudan. It is our strong, collaborative approach that differentiates Profine Consultants from other firms.",
  "Our commitment to our clients is that we will strive to deliver timely and quality service in the most efficient and economic manner. By sharing the ideas and insight of our experienced professionals, we bring our expert knowledge and resources to your environment, so you feel understood and empowered to move forward with confidence. We go beyond numbers and create value for our clients.",
  "The fundamental purpose of Profine Consultants is to provide tailor-made professional services that are consistent and comply with relevant legislation and professional standards. Our vision is to go beyond numbers and, by so doing, become a leading professional firm in the market. We always ensure that our employees and business partners also share our vision, mission and success.",
] as const;

export type WhyItem = { title: string; body: string };

export const whyChooseUs: WhyItem[] = [
  {
    title: "Tailored Solutions",
    body: "We provide fully customized services that meet your specific business needs and comply with industry standards.",
  },
  {
    title: "Timely Delivery",
    body: "Our commitment to delivering quality services on time empowers you to make confident decisions.",
  },
  {
    title: "Proactive Approach",
    body: "We stay ahead of industry trends to ensure your business remains competitive and resilient.",
  },
  {
    title: "Comprehensive Services",
    body: "A full range of services — audit, risk management, tax compliance and consulting — under one roof.",
  },
];

export type Service = {
  slug: string;
  title: string;
  short: string; // homepage/nav summary
  summary: string; // full intro on the detail page
  whatWeDo: string[];
};

export const services: Service[] = [
  {
    slug: "audit-assurance",
    title: "Audit & Assurance",
    short:
      "Tailored audit, assurance and advisory that delivers robust financial statements.",
    summary:
      "Our expertise in audit, assurance and advisory services enables us to tailor our approach to deliver robust financial statements which recognize the specific challenges of our client's businesses and the sector in which they operate.",
    whatWeDo: [
      "Statutory audits",
      "Non-statutory audits including agreed-upon procedures",
      "Compilation of financial statements",
      "Internal controls assurance",
      "Due diligence and capacity assessments",
      "Expenditure audits",
    ],
  },
  {
    slug: "internal-audit-risk-management",
    title: "Internal Audit & Risk Management",
    short:
      "We review your systems and controls to mitigate business risk and protect your future.",
    summary:
      "We will review your systems and procedures, identify the key controls to mitigate business risk, and test their operating effectiveness, enabling you to make the right decisions for your business and its future success. The need for risk management is rising as corporates realize its value. Our risk management services ensure that uncertainties do not prevent organizations from achieving their goals.",
    whatWeDo: [
      "Fraud risk assessment",
      "Risk register generation",
      "Development and evaluation of policies and procedures",
      "Internal control reviews",
    ],
  },
  {
    slug: "tax-compliance-consulting",
    title: "Tax Compliance & Consulting",
    short:
      "Stay informed of your tax responsibilities, liabilities and new developments in legislation.",
    summary:
      "Our tax services are designed to help our clients stay informed of any tax responsibilities and liabilities as well as new developments in tax legislation.",
    whatWeDo: [
      "Tax diagnostic reviews & health checks",
      "Tax advisory services",
      "Structuring of new businesses",
      "Training on tax matters",
      "Tax due diligence",
      "Computation of current and deferred tax liabilities",
    ],
  },
  {
    slug: "management-consulting",
    title: "Management Consulting",
    short:
      "Reliable guidance to improve performance and enhance shareholder value.",
    summary:
      "We offer sound and reliable guidance to improve business performance and enhance shareholder value to help our clients achieve competitive advantage.",
    whatWeDo: [
      "Developing and implementing strategic plans",
      "Developing risk-measurement strategies and risk management plans",
      "Building performance indicators for monitoring the organization's performance",
      "Conducting organizational health assessments",
      "Reviewing and re-engineering business processes for efficiency, control and effectiveness",
    ],
  },
  {
    slug: "outsourced-services",
    title: "Outsourced Services",
    short:
      "Outsource your non-core finance functions to enhance efficiency and growth.",
    summary:
      "With increasing competition, new technologies and increasing costs, it has become increasingly important for corporates to outsource their non-core functions to professional firms to enhance their efficiency and growth.",
    whatWeDo: [
      "Bookkeeping and financial reporting including preparation of annual financial statements",
      "Management accounting and reporting service including reviews",
      "Payroll management and processing including e-payslips, payroll payments and returns",
      "Assistance in registration of statutory requirements for companies and individuals",
      "Treasury services",
      "Project accounting services",
      "Fixed assets management",
      "Stock / inventory management",
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export type Engagement = { client: string; work: string; since?: string };

export const engagements: Engagement[] = [
  {
    client: "UNICEF South Sudan",
    work: "Spot checks, micro assessments and special audits for UNICEF implementing partners in South Sudan.",
    since: "2015",
  },
  {
    client: "UNDP South Sudan",
    work: "Spot checks, micro assessments and special audits for UNDP's implementing partners in South Sudan.",
    since: "2015",
  },
  {
    client: "World Food Programme (WFP) South Sudan",
    work: "Spot checks and micro assessments for WFP's implementing partners in South Sudan.",
    since: "2020",
  },
  { client: "Nile Hope", work: "Annual statutory audit.", since: "2019" },
  { client: "SEA Partners", work: "Annual statutory audit.", since: "2019" },
  {
    client: "Universal Intervention and Development Organization (UNIDOR)",
    work: "Annual statutory audit.",
    since: "2020",
  },
  {
    client: "Christian Mission for Development (CMD) South Sudan",
    work: "Annual statutory audit.",
    since: "2020",
  },
  {
    client: "Eye Media (owners of Eye Radio)",
    work: "Internal audit services (quarterly basis).",
    since: "2021",
  },
  {
    client: "Grass Roots Empowerment and Development Organization (GREDO)",
    work: "Internal audit services (monthly basis).",
  },
  {
    client: "Nile Sustainable Development Organization (NSDO)",
    work: "Annual statutory audit.",
    since: "2022",
  },
  {
    client: "Action Against Hunger (AAH)",
    work: "SIDA project audits.",
    since: "2022",
  },
  {
    client: "International Federation of Red Cross and Red Crescent (IFRC)",
    work: 'Audit of "IFRC cash transfers to Ethiopian Red Cross Society" — a financial audit in accordance with International Standards on Auditing.',
  },
  {
    client: "UNHCR Funded Projects — South Sudan",
    work: "Audit on behalf of UNHCR of the Implementing Partner Financial Monitoring Reports (IPFMR) for programs implemented by several agencies in development and sanitation projects in South Sudan.",
  },
  {
    client: "TEARFUND",
    work: "BUZA project audit, March 2019 – February 2020.",
  },
];

// Marquee of recognizable organizations for the hero "trusted by" strip.
export const trustedBy = [
  "UNICEF",
  "UNDP",
  "WFP",
  "IFRC",
  "UNHCR",
  "Action Against Hunger",
  "TEARFUND",
  "Eye Radio",
];

export const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  {
    label: "Our Services",
    href: "/our-services",
    children: services.map((s) => ({ label: s.title, href: `/${s.slug}` })),
  },
  { label: "Staff Experience", href: "/experience" },
  { label: "Contact Us", href: "/contact-us" },
] as const;
