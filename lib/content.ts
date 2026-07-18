import {
  BarChart3,
  Brain,
  Building2,
  Clock3,
  CircleDot,
  Database,
  GitBranch,
  Globe2,
  Landmark,
  Lightbulb,
  MonitorCheck,
  ShieldCheck,
  Network,
  RadioTower,
  Route,
  Sparkles,
  Users,
  Waypoints
} from "lucide-react";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/open-jit-hub", label: "Open Jit Hub" },
  { href: "/ecosystem", label: "Ecosystem" },
  { href: "/products", label: "Products" },
  { href: "/knowledge", label: "Knowledge" },
  { href: "/creativex", label: "CreativeX" },
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
  },
  {
    title: "CreativEX 2026: Branding Thailand in a Disrupting World",
    slug: "creativex-2026-branding-thailand",
    category: "Creative Economy",
    summary: "A field knowledge set connecting city branding, creative organizations, UNESCO creative cities, technology adoption, and UK creative industry systems.",
    isPremium: false
  },
  {
    title: "Thailand Sensory Intelligence Platform",
    slug: "thailand-sensory-intelligence-platform",
    category: "Cultural Data",
    summary: "A prototype direction for turning Thai cultural memory, scent, place, and creative commerce into measurable intelligence assets.",
    isPremium: true
  }
];

export const creativeXBrief = {
  title: "CreativEX 2026",
  theme: "Branding Thailand in a Disrupting World",
  description:
    "A Chula CEA creative economy knowledge set that helps ARITHAYA translate cultural capital into practical intelligence, city branding, and enterprise capability.",
  event: "City Branding & Creative Organization",
  date: "19 June 2026",
  sources: [
    "UNESCO Perspective on Thai Creative Cities and Sustainable Urban Identity",
    "Driving Enterprise Competitiveness: Building a Tech Driven Creative Organization",
    "UK Creative Industries: Case Study of Success",
    "CreativEX2026 Knowledge Brief",
    "Thailand Sensory Intelligence Platform prototype"
  ]
};

export const creativeXInsights = [
  {
    title: "Culture Becomes Infrastructure",
    label: "UNESCO",
    description:
      "Creative cities should operate as long-term cultural corridors that connect place, people, knowledge, and future opportunity.",
    icon: Route
  },
  {
    title: "Creativity Needs Operating Systems",
    label: "Organization",
    description:
      "Technology creates advantage only when people can ask better questions, test ideas quickly, and learn from evidence.",
    icon: Lightbulb
  },
  {
    title: "Branding Requires Backstage Work",
    label: "UK Case",
    description:
      "Strong place brands need policy, funding, ecosystem mapping, trusted networks, measurement, and legacy planning.",
    icon: Network
  },
  {
    title: "Learning Must Become Measurable",
    label: "Platform",
    description:
      "The CreativeX platform direction links articles, speaker pages, downloads, search, portfolios, and impact evaluation.",
    icon: BarChart3
  }
];

export const creativeXProgramFlow = [
  {
    phase: "01",
    title: "Thailand Today",
    detail: "Frame Thailand through three images and three words: current identity, strengths, and tensions."
  },
  {
    phase: "02",
    title: "The Disruption",
    detail: "Select the forces that matter most: AI, climate, tourism shifts, geopolitics, aging, work, and creative economy."
  },
  {
    phase: "03",
    title: "Future Thailand Brand",
    detail: "Define vision, brand personality, core values, and one big idea that can guide national storytelling."
  },
  {
    phase: "04",
    title: "Make It Real",
    detail: "Turn ideas into action across government, business, community, education, culture, soft power, and technology."
  }
];

export const roadmap = [
  { phase: "Phase 01", title: "Foundation", description: "Brand platform, website, lead capture, Supabase structure, and partner narrative." },
  { phase: "Phase 02", title: "Pilot Programs", description: "Enterprise labs, curated knowledge assets, early member journeys, and reporting loops." },
  { phase: "Phase 03", title: "Data Intelligence", description: "Dashboard prototypes, privacy model, segmentation, and measurable performance indicators." },
  { phase: "Phase 04", title: "National Platform", description: "Partner ecosystem, investor-ready product architecture, and scalable operations." }
];

export const controlSignals = [
  {
    title: "Single Source",
    label: "GitHub",
    description: "All code, documentation, QA notes, and reference packs resolve to the ARITHAYA GitHub repository.",
    icon: GitBranch
  },
  {
    title: "Live Display",
    label: "Screen",
    description: "Codex keeps one working browser screen visible during active implementation and review.",
    icon: MonitorCheck
  },
  {
    title: "Time Control",
    label: "Cadence",
    description: "Work moves through short status cycles: check, build, display, report, fix, retest.",
    icon: Clock3
  },
  {
    title: "Executive Report",
    label: "ACS",
    description: "Asian Coding Systems receives a concise status report covering source, preview, blockers, and next actions.",
    icon: ShieldCheck
  }
];

export const operatingCadence = [
  "Start with GitHub status and visible screen check.",
  "Keep Manus communication in Issue #1 and MANUS_BRIEF.md.",
  "Update ACS status when deployment, QA, or blockers change.",
  "Commit every verified improvement back to the source of truth."
];

export const openJitHub = {
  name: "เปิดจิตฮับ",
  label: "Open Jit Hub",
  thesis:
    "ศูนย์กลางเดียวสำหรับเปิดความคิด จัดลำดับงาน และเชื่อม ARITHAYA เข้ากับ Codex, Manus, GitHub และ Asian Coding Systems.",
  founderSignal: "อริย์ธัช ชาติอาริยะพงศ์",
  operatingUrl: "http://127.0.0.1:3000",
  sourceUrl: "https://github.com/the-middle-th/arithaya-model",
  manuscriptUrl: "https://arithayamod-euhqmijc.manus.space",
  issueUrl: "https://github.com/the-middle-th/arithaya-model/issues/1"
};

export const hubGateways = [
  {
    title: "Human Intelligence",
    label: "Core",
    href: "/ecosystem",
    description: "รวมความรู้ สุขภาวะ AI ข้อมูล ชุมชน และองค์กรเป็นระบบเดียวที่ตัดสินใจได้เร็วขึ้น.",
    icon: Brain
  },
  {
    title: "Knowledge Center",
    label: "Library",
    href: "/knowledge",
    description: "เปิดคลังความรู้และบทสังเคราะห์ที่ใช้ต่อยอด ARITHAYA, CreativeX และงานวิจัยที่ควบคุมแหล่งอ้างอิง.",
    icon: Lightbulb
  },
  {
    title: "Product System",
    label: "Build",
    href: "/products",
    description: "จัดชุดผลิตภัณฑ์ Passport, Studio, Labs, Dashboard, Community และ AI Companion ให้เห็นเป็น portfolio.",
    icon: Waypoints
  },
  {
    title: "Enterprise Bridge",
    label: "Partners",
    href: "/enterprise",
    description: "ทางเข้าเดียวสำหรับองค์กร พันธมิตร นักลงทุน และทีมที่ต้องการโปรแกรม human capability.",
    icon: Building2
  },
  {
    title: "CreativeX Layer",
    label: "Culture",
    href: "/creativex",
    description: "เชื่อม city branding, creative economy, Thai cultural capital และ future thinking เข้ากับ ARITHAYA.",
    icon: Sparkles
  },
  {
    title: "Roadmap Control",
    label: "2030",
    href: "/roadmap",
    description: "ไล่ลำดับจาก foundation, pilot, data intelligence ไปสู่ national platform แบบตรวจสอบได้.",
    icon: Route
  }
];

export const hubProtocolSteps = [
  {
    phase: "01",
    title: "Check",
    detail: "ตรวจ local display, GitHub status, Manus channel และ ACS report ก่อนเริ่มแก้."
  },
  {
    phase: "02",
    title: "Build",
    detail: "แก้เฉพาะ source of truth เดียวใน repo นี้ แล้วรักษา visual language แบบ ARITHAYA."
  },
  {
    phase: "03",
    title: "Display",
    detail: "เปิดเว็บไซต์ที่ local URL ให้เห็นระหว่างทำงาน และตรวจ route สำคัญหลัง build."
  },
  {
    phase: "04",
    title: "Report",
    detail: "อัปเดต ACS report, Manus next task และ Issue #1 เมื่อมีสถานะหรือ handoff ใหม่."
  },
  {
    phase: "05",
    title: "Commit",
    detail: "commit และ push เฉพาะงานที่ verified แล้ว เพื่อให้ Manus ทดสอบจาก GitHub ได้ทันที."
  }
];

export const hubControlRooms = [
  {
    title: "Codex Build Room",
    owner: "Codex",
    description: "สร้าง แก้ ตรวจ build และรักษา repository ให้เป็น source of truth.",
    icon: MonitorCheck
  },
  {
    title: "Manus QA Room",
    owner: "Manus",
    description: "ทดสอบ live preview, mobile, form, SEO, performance และรายงานกลับใน Issue #1.",
    icon: RadioTower
  },
  {
    title: "ACS Executive Room",
    owner: "Asian Coding Systems",
    description: "อ่านสถานะ executive, blockers, production readiness และ next actions.",
    icon: ShieldCheck
  },
  {
    title: "Public Gateway",
    owner: "ARITHAYA",
    description: "เปิดภาพรวม platform ให้พันธมิตรเข้าใจระบบ ผลิตภัณฑ์ และเส้นทางความร่วมมือ.",
    icon: Globe2
  }
];

export const footerLinks = [
  { href: "/open-jit-hub", label: "Open Jit Hub" },
  { href: "/enterprise", label: "Enterprise" },
  { href: "/knowledge", label: "Knowledge" },
  { href: "/contact", label: "Partnerships" }
];

export const partner = {
  founder: "Arithach Chartariyapong",
  founderThai: "อริย์ธัช ชาติอาริยะพงศ์",
  technologyPartner: "Asian Coding Systems (ACS)",
  icon: Landmark
};
