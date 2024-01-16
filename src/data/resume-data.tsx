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
    "Full Stack Engineer focused on building highly resiliant and scalable applications",
  summary:
  "In my role as a Full Stack Engineer, I have successfully launched products from concept to completion. My leadership skills enable me to create an environment that fosters exceptional performance from my team members. My area of expertise lies in backend development, primarily using Go. For frontend development, I frequently utilize TypeScript and React.",
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
      title: "Robotics Controls Engineer → Senior Software Engineer",
      logo: Tesla,
      start: "2021",
      end: "current",
      description:
        "Implemented new features, led team, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
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
      "Created internal application to automatically prepare reports, and generate FMEA(Failure Mode and Effects Analysis). This was rolled out to the whole engineering and manufacturing team.\n" +
      "Prepare cycle-time analysis and time studies to facilitate line balancing.\n" +
      "Created and setup preventative/predictive maintenance requirements for process cooling water, compressed air and machine specific maintenance tasks",
    },
    {
      company: "Edge Automation",
      link: "https://www.edgeautomation.ca",
      badges: ["Intern"],
      title: "Mechanical Designer",
      logo: Edge,
      start: "2014",
      end: "2014",
      description: "Machine, fixture and automation design, weldment and casting design, motion studies hydraulics/pneumatics, electrical interfacing and applicable R&D",
    },
  ],
  skills: [
    "Go",
    "TypeScript",
    "React",
    "GraphQL",
  ],
  projects: [
    // {
    //   title: "",
    //   techStack: [],
    //   description:
    //   logo: ,
    // },
  ],
}