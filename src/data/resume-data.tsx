import {
  Accenture,
  Edge,
  Magna,
  Tesla,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

interface Contact {
  email: string;
  tel: string;
  social: Social[];
}
 
interface Social {
  name: string;
  url: string;
  icon: typeof GitHubIcon | typeof LinkedInIcon;
}
 
interface Education {
  school: string;
  degree: string;
  start: string;
  end: string;
}
 
interface Work {
  company: string;
  link: string;
  badges: string[];
  title: string;
  logo: typeof Accenture | typeof Edge | typeof Magna | typeof Tesla;
  start: string;
  end: string;
  description: string;
}
 
interface Project {
  title: string;
  techStack: string[];
  description: string;
  logo: typeof Accenture | typeof Edge | typeof Magna | typeof Tesla;
  link?: {
    href: string;
  };
}

export const RESUME_DATA: {
  name: string;
  initials: string;
  location: string;
  locationLink: string;
  about: string;
  summary: string;
  personalWebsiteUrl: string;
  avatarUrl: string;
  contact: Contact;
  education: Education[];
  work: Work[];
  skills: string[];
  projects: Project[];
} = {
  name: "Lucas Lepore",
  initials: "LL",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/SanFrancisco",
  about:
    "Staff full-stack engineer building AI-enabled production systems for advanced manufacturing",
  summary:
    "Staff software and product engineer with a controls and robotics background who ships end-to-end internal products for high-velocity manufacturing. I build AI-enabled tools, fault-tolerant distributed systems, and operator-facing workflows spanning plant-floor systems, backend services, and React interfaces. I work directly with production, supply chain, quality, and engineering teams to find high-leverage bottlenecks and turn them into reliable software used across factories.",
  avatarUrl: "https://avatars.githubusercontent.com/u/57828886?v=4",
  personalWebsiteUrl: "",
  contact: {
    email: "leporejlucas@gmail.com",
    tel: "+5104210381",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/lucasjlepore",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/lucaslepore/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "McMaster University",
      degree: "Bachelor's Degree in Control Systems Engineering and Robotics",
      start: "2012",
      end: "2017",
    },
  ],
  work: [
    {
      company: "Tesla",
      link: "https://www.tesla.com",
      badges: [],
      title: "Robotics Controls Engineer → Staff Software & Product Engineer, Manufacturing Systems",
      logo: Tesla,
      start: "2019",
      end: "current",
      description:
        "Own internal software from problem discovery through production rollout for manufacturing teams across Tesla factories. Partner directly with production, supply chain, quality, finance, and engineering to identify bottlenecks; design operator-facing workflows; and ship the backend services, data integrations, and React interfaces behind Tesla’s Factory Operating System. Architect distributed, fault-tolerant Go systems and AI-enabled support tooling that help engineers diagnose issues, safely validate changes, and keep production moving.",
    },
    {
      company: "Accenture Industry X",
      link: "https://www.accenture.com/us-en/services/digital-engineering-manufacturing-index",
      badges: [],
      title: "Controls Engineer",
      logo: Accenture,
      start: "2017",
      end: "2019",
      description:
        "Electrical and instrumentation design, implementing, installing and commissioning control systems for clients globally. Electrical and Software design for MVP of an AGV(Automated Guided Vehicle) for use in distribution centers.",
    },
    {
      company: "Magna International",
      link: "https://www.magna.com",
      badges: ["Intern"],
      title: "Automation Engineer",
      logo: Magna,
      start: "2016",
      end: "2016",
      description: 
        "Created internal application to automatically prepare reports, and generate FMEA (Failure Mode and Effects Analysis). Rolled out to the whole engineering and manufacturing team. Prepared cycle-time analysis and time studies to facilitate line balancing. Created and set up preventative/predictive maintenance requirements for process cooling water, compressed air, and machine-specific maintenance tasks.",
    },
    {
      company: "Edge Automation",
      link: "https://www.edgeautomation.ca",
      badges: ["Intern"],
      title: "Mechanical Designer",
      logo: Edge,
      start: "2014",
      end: "2014",
      description: "Machine, fixture and automation design, weldment and casting design, motion studies, hydraulics/pneumatics, electrical interfacing and applicable R&D.",
    },
  ],
  skills: [
    "Go",
    "TypeScript",
    "React",
    "Python",
    "LLM Agents",
    "Kubernetes",
    "Distributed Systems",
    "Event-Driven Architecture",
    "Production Infrastructure",
    "GraphQL",
    "Database Design",
    "Product Management",
    "UI/UX Design"
  ],
  projects: [
    {
      title: "Factory Operating System",
      techStack: ["Go", "TypeScript", "Distributed Systems"],
      description:
        "Built a full-stack operating system that turns factory data into the workflows and automation production teams use to run and improve operations across Tesla factories.",
      logo: Tesla,
      link: {
        href: "https://www.tesla.com/manufacturing",
      },
    },
    {
      title: "Industrial Connectivity Platform",
      techStack: ["Go", "Kubernetes", "Distributed Systems"],
      description:
        "Built a multi-vendor factory connectivity platform that securely bridges plant-floor controllers with manufacturing applications—handling protocol translation, high-availability routing, and schema-driven messaging at global scale.",
      logo: Tesla,
      link: {
        href: "https://www.tesla.com/manufacturing",
      },
    },
    {
      title: "Factory Support AI",
      techStack: ["Go", "React", "LLM Agents"],
      description:
        "Built a multi-agent support system that investigates logs, code, production systems, and infrastructure to help engineers diagnose factory issues and shorten time to resolution.",
      logo: Tesla,
      link: {
        href: "https://www.tesla.com/manufacturing",
      },
    },
    {
      title: "Self-Service Factory Environments",
      techStack: ["Go", "Kubernetes", "React"],
      description:
        "Shipped a self-service platform that gives engineers production-like factory software environments on demand, enabling faster development and safer validation across multi-site systems.",
      logo: Tesla,
      link: {
        href: "https://www.tesla.com/manufacturing",
      },
    },
    {
      title: "Manufacturing Integration Layer",
      techStack: ["Go", "TypeScript", "Event-Driven"],
      description:
        "Architected a config-driven integration layer that connects factory-floor events to manufacturing backends in real time, with hot-reloadable mappings and end-to-end observability across global factories.",
      logo: Tesla,
      link: {
        href: "https://www.tesla.com/manufacturing",
      },
    },
    {
      title: "Material Flow & Carrier Systems",
      techStack: ["Go", "Redis", "Low Latency"],
      description:
        "Developed low-latency services for tracking material carriers and conveyance on the production line—focused on reliability, failover, and line-stopping availability guarantees.",
      logo: Tesla,
      link: {
        href: "https://www.tesla.com/manufacturing",
      },
    },
  ],
}
