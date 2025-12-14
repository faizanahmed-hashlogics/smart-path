import { Shield, Settings, TrendingUp, Target, Rocket, BarChart3, Building } from "lucide-react"

export const SITE_CONFIG = {
  name: "Smart Path Consultancy",
  description: "Your Strategic Partner for Administrative & Economic Success in the UAE.",
  url: "https://smartpath-consultancy.com",
  ogImage: "https://smartpath-consultancy.com/og.jpg",
  links: {
    twitter: "https://twitter.com/smartpath",
    github: "https://github.com/smartpath",
  },
  contact: {
    email: "info@smartpath-consultancy.com",
    phone: "+971 52332 3494",
    location: "United Arab Emirates",
    whatsapp: "https://wa.me/971523323494",
  },
  social: {
    linkedin: "https://linkedin.com/company/smartpath",
    facebook: "https://facebook.com/smartpath",
    instagram: "https://instagram.com/smartpath",
    twitter: "https://twitter.com/smartpath",
  },
}

export const SERVICES = [
  {
    id: "assurance",
    title: "Assurance Advisory",
    description: "Our assurance services provide stakeholders with confidence in the reliability of your financial information. We go beyond compliance to identify opportunities for operational improvement.",
    icon: Shield,
    items: [
      "Internal Audit",
      "Review & Assurance Engagements",
      "Special Purpose Audits",
      "Agreed Upon Procedures (AUP)",
      "Audit for Investors",
    ],
  },
  {
    id: "accounting",
    title: "Accounting & Bookkeeping",
    description: "Streamline your financial operations with our comprehensive bookkeeping services. We ensure your records are accurate, up-to-date, and compliant with all regulations.",
    icon: Settings,
    items: [
      "Daily Bookkeeping",
      "General Ledger Management",
      "Accounts Payable & Receivable",
      "Bank Reconciliation",
      "Monthly, Quarterly & Annual Closing",
      "MIS & Management Reporting",
    ],
  },
  {
    id: "financials",
    title: "Financial Statements & IFRS",
    description: "Ensure your financial statements are prepared in accordance with International Financial Reporting Standards (IFRS). We help you navigate complex accounting standards with ease.",
    icon: BarChart3,
    items: [
      "Balance Sheet, P&L & Cash Flow Statements",
      "IFRS Advisory & Implementation",
      "Notes to Accounts",
      "Year-End Finalization",
      "External Audit Coordination",
    ],
  },
  {
    id: "vat",
    title: "VAT & Taxation Services",
    description: "Navigate the UAE's tax landscape with confidence. Our tax experts assist with VAT registration, filing, and compliance to minimize risk and optimize your tax position.",
    icon: TrendingUp,
    items: [
      "VAT Registration & Deregistration",
      "VAT Return Filing",
      "VAT Review & Health Check",
      "Voluntary Disclosures",
      "VAT Advisory",
    ],
  },
  {
    id: "compliance",
    title: "Internal Controls & Compliance",
    description: "Strengthen your governance framework with robust internal controls. We help you identify risks, develop policies, and ensure compliance with regulatory requirements.",
    icon: Target,
    items: [
      "Internal Control Review",
      "Risk Assessment",
      "SOP & Policy Development",
      "Fraud Risk Assessment",
      "Compliance Audits",
    ],
  },
  {
    id: "advisory",
    title: "Business Advisory & CFO",
    description: "Get strategic financial guidance without the cost of a full-time CFO. We provide insights to help you make informed decisions, manage cash flow, and drive growth.",
    icon: Rocket,
    items: [
      "Budgeting & Forecasting",
      "Cash Flow Management",
      "Cost Control & Profitability Analysis",
      "Business Valuation Support",
      "Feasibility Studies",
      "Virtual CFO Services",
    ],
  },
  {
    id: "startup",
    title: "Startup & Business Setup",
    description: "Launch your business on the right foot. We assist with financial planning, system setup, and compliance to ensure a smooth and successful startup journey.",
    icon: Building,
    items: [
      "Accounting System Setup",
      "Compliance Framework",
      "Financial Planning",
      "VAT & Tax Setup",
      "Ongoing Accounting Support",
    ],
  },
]

export const WHY_CHOOSE_US = [
  {
    title: "Experienced Professionals",
    description: "Our team consists of highly qualified audit and accounting experts.",
    icon: "users",
  },
  {
    title: "Full Compliance",
    description: "We ensure strict adherence to UAE laws and IFRS standards.",
    icon: "check-circle",
  },
  {
    title: "Timely Reporting",
    description: "We guarantee on-time delivery of all financial reports and audits.",
    icon: "clock",
  },
  {
    title: "Transparent Pricing",
    description: "No hidden fees. Our pricing is affordable and completely transparent.",
    icon: "wallet",
  },
  {
    title: "Personalized Support",
    description: "Dedicated support tailored to your specific business needs.",
    icon: "heart-handshake",
  },
  {
    title: "Data Security",
    description: "We maintain strict confidentiality and security of your financial data.",
    icon: "lock",
  },
]

export const INDUSTRIES = [
  { name: "Trading & Retail", icon: "shopping-bag" },
  { name: "Construction & Contracting", icon: "hard-hat" },
  { name: "Manufacturing", icon: "factory" },
  { name: "Restaurants & Hospitality", icon: "utensils" },
  { name: "Logistics & Transport", icon: "truck" },
  { name: "Real Estate", icon: "building-2" },
  { name: "Healthcare", icon: "stethoscope" },
  { name: "Technology & Services", icon: "laptop" },
  { name: "Startups & SMEs", icon: "rocket" },
]

export const PRICING_PACKAGES = [
  {
    name: "Starter Package",
    description: "Essential financial compliance for small businesses.",
    price: "AED 2,500",
    period: "/month",
    features: [
      "Monthly Bookkeeping",
      "VAT Filing",
      "Basic Financial Reports",
      "Email Support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth Package",
    description: "Comprehensive support for growing companies.",
    price: "AED 5,000",
    period: "/month",
    features: [
      "Full Accounting Support",
      "IFRS Financial Statements",
      "Audit Support",
      "VAT Compliance",
      "Monthly Management Reports",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Premium Package",
    description: "Strategic financial leadership for established enterprises.",
    price: "Custom",
    period: "",
    features: [
      "Complete Finance Outsourcing",
      "Virtual CFO Services",
      "Budgeting & Forecasting",
      "Internal Controls & Risk Management",
      "Board Presentation Support",
    ],
    cta: "Contact Us",
    popular: false,
  },
]

export const FAQS = [
  {
    question: "Do you work with all business industries?",
    answer: "Yes, we serve all industries across the UAE.",
  },
  {
    question: "Do you offer outsourcing services?",
    answer: "Yes, we provide full finance outsourcing services.",
  },
  {
    question: "Do you help with VAT audits?",
    answer: "Yes, we fully support VAT audits and FTA reviews.",
  },
  {
    question: "Can you prepare financials for investors?",
    answer: "Yes, we prepare audit-ready financial statements for investors.",
  },
]

export const STATS = [
  { value: "500+", label: "Clients Served" },
  { value: "98%", label: "Success Rate" },
  { value: "10+", label: "Years Experience" },
]
