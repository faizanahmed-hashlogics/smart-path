export const SITE_CONFIG = {
  name: "Smart Path Consultancy",
  tagline: "Expert Administrative & Economic Consultancy in the UAE",
  description:
    "Specialized in administrative consultancy, economic feasibility studies, and strategic business analysis to drive informed decision-making and sustainable growth.",
  brandBlurb:
    "At Smart Path Consultancy, we provide expert administrative consultancy and economic feasibility studies tailored to the UAE market. Our specialized services include comprehensive administrative process optimization, detailed economic analysis, strategic planning, and regulatory compliance studies. With deep expertise in UAE business regulations and market dynamics, we help organizations make informed decisions through rigorous analysis and strategic guidance.",
  contact: {
    email: "info@smartpath-consultancy.com",
    phone: "+971-000-0000",
    whatsapp: "https://wa.me/971000000000",
    location: "Dubai, UAE",
  },
  social: {
    linkedin: "https://linkedin.com/company/smartpath-consultancy",
  },
} as const

export const SERVICES = [
  {
    title: "Accounting & Bookkeeping",
    description: "Accurate, compliant accounting and bookkeeping tailored to your business needs",
    icon: "settings",
    features: [
      "Recording income, expenses, and payments",
      "Managing accounts payable and receivable (invoicing & tracking)",
      "Maintaining up‑to‑date ledgers (GL & subsidiary)"
    ],
    duration: "Ongoing",
    price: "Contact us",
    popular: true,
  },
  {
    title: "Corporate Tax Consultancy",
    description: "Navigate complex tax laws to minimize liabilities and optimize performance",
    icon: "shield",
    features: [
      "Tax planning and advisory",
      "Regulatory compliance and filings",
      "Tailored solutions to your business context"
    ],
    duration: "Varies by engagement",
    price: "Contact us",
    popular: true,
  },
  {
    title: "VAT Consultancy",
    description: "Expert VAT compliance, registration, return filing, and audit support",
    icon: "shield",
    features: [
      "VAT registration and advisory",
      "Accurate VAT calculation, reporting, and reclaim",
      "Return filing, audits, and error/penalty prevention"
    ],
    duration: "Varies by engagement",
    price: "Contact us",
    popular: false,
  },
  {
    title: "Transfer Pricing Services",
    description: "OECD‑aligned policies, documentation, and audits to reduce TP risk",
    icon: "target",
    features: [
      "Transfer pricing documentation & policies",
      "Compliance with OECD guidelines & local regulations",
      "Audit readiness and dispute minimization"
    ],
    duration: "Varies by engagement",
    price: "Contact us",
    popular: false,
  },
  {
    title: "Internal Audit Support",
    description: "Plan, execute, and report internal audits to enhance control and compliance",
    icon: "shield",
    features: [
      "Internal audit planning, execution, and reporting",
      "Regulatory compliance reviews",
      "Enhance internal controls and operational efficiency"
    ],
    duration: "Varies by engagement",
    price: "Contact us",
    popular: false,
  },
  {
    title: "Business Advisory",
    description: "Strategic guidance for growth, innovation, and operational excellence",
    icon: "trending-up",
    features: [
      "Business planning and market analysis",
      "Operational improvements",
      "Financial management advisory"
    ],
    duration: "Varies by engagement",
    price: "Contact us",
    popular: false,
  },
  {
    title: "Strategy & Transformation",
    description: "Custom strategies and change programs to drive growth and efficiency",
    icon: "rocket",
    features: [
      "Strategy development and execution",
      "Change management and digital transformation",
      "Organizational design and cultural transformation"
    ],
    duration: "Varies by engagement",
    price: "Contact us",
    popular: false,
  },
  {
    title: "Mergers & Acquisitions Support",
    description: "Comprehensive support across the deal lifecycle for long‑term success",
    icon: "building",
    features: [
      "Buy‑side/sell‑side advisory and due diligence",
      "Deal structuring and regulatory coordination",
      "Integration planning and execution"
    ],
    duration: "Varies by engagement",
    price: "Contact us",
    popular: false,
  },
  {
    title: "Risk Advisory",
    description: "Identify, assess, and mitigate risks impacting performance and compliance",
    icon: "shield",
    features: [
      "Enterprise risk assessments",
      "Regulatory compliance and controls",
      "Risk mitigation strategies"
    ],
    duration: "Varies by engagement",
    price: "Contact us",
    popular: false,
  },
  {
    title: "Technology Advisory",
    description: "IT strategy, cybersecurity, and data analytics to power your business",
    icon: "settings",
    features: [
      "IT strategy and digital transformation",
      "Cybersecurity assessments",
      "Data analytics and technology implementation"
    ],
    duration: "Varies by engagement",
    price: "Contact us",
    popular: false,
  },
  {
    title: "Financial Management",
    description: "Planning, budgeting, forecasting, and analysis to optimize results",
    icon: "trending-up",
    features: [
      "Financial reporting and analysis",
      "Cash flow management",
      "Financial modelling and performance improvement"
    ],
    duration: "Varies by engagement",
    price: "Contact us",
    popular: false,
  },
] as const

export const PROCESS_STEPS = [
  { title: "Analyze", description: "Comprehensive assessment of administrative processes and economic factors" },
  { title: "Study", description: "Detailed feasibility analysis and economic modeling" },
  { title: "Design", description: "Developing optimized administrative frameworks and strategies" },
  { title: "Implement", description: "Executing solutions with precision and monitoring" },
  { title: "Validate", description: "Measuring outcomes and ensuring sustainable results" },
] as const

export const TESTIMONIALS = [
  {
    quote: "Smart Path Consultancy transformed our market entry strategy. Their deep UAE expertise was invaluable.",
    name: "Sarah Ahmed",
    role: "CEO",
    company: "TechStart UAE",
  },
  {
    quote: "From formation to growth, they've been our trusted partner every step of the way.",
    name: "Michael Chen",
    role: "Founder",
    company: "GrowthCorp",
  },
  {
    quote: "Their operational excellence framework helped us scale efficiently across the region.",
    name: "Fatima Al-Rashid",
    role: "COO",
    company: "Regional Dynamics",
  },
] as const

export const FAQS = [
  {
    question: "How do you help with company formation in the UAE?",
    answer:
      "We provide comprehensive guidance on choosing between Mainland and Free Zone setups, handling all documentation, licensing requirements, and regulatory compliance to ensure a smooth formation process tailored to your business needs.",
  },
  {
    question: "Do you work with startups and established businesses?",
    answer:
      "Yes, we work with entrepreneurs, startups, and established enterprises at every stage of their journey. Our services are tailored to meet the unique needs and challenges of businesses regardless of their size or maturity.",
  },
  {
    question: "What's your typical engagement timeline?",
    answer:
      "Engagement timelines vary based on project scope. Company formation typically takes 2-4 weeks, while comprehensive growth strategies can span 3-6 months. We provide detailed timelines during our initial consultation.",
  },
  {
    question: "What documents are required to get started?",
    answer:
      "Required documents vary by service but typically include business plans, financial statements, identification documents, and any existing legal documentation. We'll provide a complete checklist during our initial consultation.",
  },
  {
    question: "Do you offer ongoing advisory retainers?",
    answer:
      "Yes, we offer flexible retainer arrangements for ongoing advisory services, including monthly strategic reviews, quarterly business assessments, and continuous operational support to ensure sustained growth.",
  },
] as const

export const STATS = [
  { value: "100+", label: "Clients Advised" },
  { value: "12+", label: "Industries" },
  { value: "4.8/5", label: "Client Satisfaction" },
] as const
