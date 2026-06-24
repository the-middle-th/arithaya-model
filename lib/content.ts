import {
  BarChart3,
  Brain,
  Building2,
  CircleDot,
  Database,
  Landmark,
  Network,
  Sparkles,
  Users
} from "lucide-react";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/ecosystem", label: "Ecosystem" },
  { href: "/products", label: "Products" },
  { href: "/knowledge", label: "Knowledge" },
  { href: "/enterprise", label: "Enterprise" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/contact", label: "Contact" }
];

export const metrics = [
  { value: "7", label: "Connected platform layers", detail: "Knowledge, wellness, performance, AI, community, data, and enterprise." },
  { value: "3", label: "Transformation outcomes", detail: "Wisdom, intelligence, and people operating at their best." },
  { value: "1", label: "National infrastructure thesis", detail: "A premium platform for Thailand's next human capability chapter." }
];

export const ecosystemLayers = [
  { title: "Knowledge", description: "Research, learning assets, and expert frameworks made usable for daily decisions.", icon: Brain },
  { title: "Wellness", description: "A non-clinical foundation for energy, rhythm, resilience, and sustainable performance.", icon: Sparkles },
  { title: "Human Performance", description: "Programs that help people improve focus, leadership, creativity, and execution.", icon: BarChart3 },
  { title: "AI", description: "Responsible AI experiences that translate human context into better recommendations.", icon: CircleDot },
  { title: "Community", description: "Trusted circles for leaders, learners, creators, and enterprise partners.", icon: Users },
  { title: "Data", description: "Privacy-conscious signals that turn participation into practical intelligence.", icon: Database },
  { title: "Enterprise Solutions", description: "Workforce and leadership solutions for measurable organizational capability.", icon: Building2 }
];

export const products = [
  { title: "ARITHAYA Passport", category: "Member Intelligence", description: "A personal record of learning, practices, goals, and capability progress." },
  { title: "Knowledge Studio", category: "Learning System", description: "Premium content, briefings, and guided journeys for wisdom-building." },
  { title: "Enterprise Labs", category: "B2B Programs", description: "Custom programs for leadership intelligence, AI readiness, and team performance." },
  { title: "Performance Dashboard", category: "Data Layer", description: "A future analytics surface for progress, engagement, and capability signals." },
  { title: "Community Circles", category: "Network", description: "Curated partner and member groups for shared learning and accountability." },
  { title: "AI Companion", category: "Applied AI", description: "A future intelligence assistant for reflection, learning paths, and performance insight." }
];

export const knowledgeAssets = [
  {
    title: "Human Intelligence Infrastructure",
    slug: "human-intelligence-infrastructure",
    category: "Platform Thesis",
    summary: "Why Thailand needs a new layer connecting human capability, trusted knowledge, and responsible data.",
    isPremium: false
  },
  {
    title: "From Knowledge to Wisdom",
    slug: "knowledge-to-wisdom",
    category: "Learning",
    summary: "A practical model for turning information into judgment, practice, and better action.",
    isPremium: false
  },
  {
    title: "Enterprise Performance Culture",
    slug: "enterprise-performance-culture",
    category: "Enterprise",
    summary: "How organizations can combine AI adoption with human performance systems.",
    isPremium: true
  }
];

export const roadmap = [
  { phase: "Phase 01", title: "Foundation", description: "Brand platform, website, lead capture, Supabase structure, and partner narrative." },
  { phase: "Phase 02", title: "Pilot Programs", description: "Enterprise labs, curated knowledge assets, early member journeys, and reporting loops." },
  { phase: "Phase 03", title: "Data Intelligence", description: "Dashboard prototypes, privacy model, segmentation, and measurable performance indicators." },
  { phase: "Phase 04", title: "National Platform", description: "Partner ecosystem, investor-ready product architecture, and scalable operations." }
];

export const footerLinks = [
  { href: "/enterprise", label: "Enterprise" },
  { href: "/knowledge", label: "Knowledge" },
  { href: "/contact", label: "Partnerships" }
];

export const partner = {
  founder: "Arithach Chartariyapong",
  founderThai: "อริทัช ริยะพงษ์",
  technologyPartner: "Asian Coding Systems (ACS)",
  icon: Landmark
};
