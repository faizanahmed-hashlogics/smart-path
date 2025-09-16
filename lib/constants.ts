export const SITE_CONFIG = {
  name: "Smart Path Consultancy",
  tagline: "Expert Administrative & Economic Consultancy in the UAE",
  description:
    "Specialized in administrative consultancy, economic feasibility studies, and strategic business analysis to drive informed decision-making and sustainable growth.",
  brandBlurb:
    "At Smart Path Consultancy, we provide expert administrative consultancy and economic feasibility studies tailored to the UAE market. Our specialized services include comprehensive administrative process optimization, detailed economic analysis, strategic planning, and regulatory compliance studies. With deep expertise in UAE business regulations and market dynamics, we help organizations make informed decisions through rigorous analysis and strategic guidance.",
  contact: {
    email: "info@smartpath.ae",
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
    title: "Administrative Consultancy & Studies",
    description: "Comprehensive administrative support and strategic studies to optimize your business operations and governance",
    icon: "building",
    features: ["Organizational structure analysis", "Administrative process optimization", "Policy development & implementation", "Governance framework design"],
    duration: "4-8 weeks",
    price: "From AED 12,000",
    popular: true,
  },
  {
    title: "Economic Feasibility Studies",
    description: "Detailed economic analysis and feasibility studies to validate business concepts and investment decisions",
    icon: "target",
    features: ["Market feasibility analysis", "Financial projections & modeling", "ROI & payback calculations", "Risk assessment & mitigation"],
    duration: "6-12 weeks",
    price: "From AED 18,000",
    popular: true,
  },
  {
    title: "Business Process Optimization",
    description: "Streamline operations through systematic analysis and improvement of business processes",
    icon: "settings",
    features: ["Process mapping & analysis", "Workflow optimization", "Efficiency improvement strategies", "Performance measurement systems"],
    duration: "4-10 weeks",
    price: "From AED 15,000",
    popular: false,
  },
  {
    title: "Strategic Planning & Development",
    description: "Comprehensive strategic planning services to guide long-term business growth and development",
    icon: "trending-up",
    features: ["Strategic planning workshops", "Business development strategies", "Growth planning & roadmaps", "Implementation support"],
    duration: "8-16 weeks",
    price: "From AED 25,000",
    popular: false,
  },
  {
    title: "Regulatory Compliance Studies",
    description: "Ensure full compliance with UAE regulations through comprehensive compliance analysis and implementation",
    icon: "shield",
    features: ["Compliance gap analysis", "Regulatory requirement mapping", "Compliance framework design", "Implementation guidance"],
    duration: "3-8 weeks",
    price: "From AED 10,000",
    popular: false,
  },
  {
    title: "Market Research & Analysis",
    description: "In-depth market research and analysis to support informed business decisions and market entry strategies",
    icon: "rocket",
    features: ["Market size & trend analysis", "Competitive landscape assessment", "Customer behavior studies", "Market entry strategies"],
    duration: "6-14 weeks",
    price: "From AED 20,000",
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
