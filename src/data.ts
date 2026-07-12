import { Github, Linkedin, Mail } from "lucide-react";
import { Project, Social } from "./types";

export const EMAIL = "juliusn411@gmail.com";

const items: Social[] = [
  { icon: Github, label: "GitHub", href: "https://github.com/njeruthuo" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/juliusnjeruthuo",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:" + EMAIL,
  },
];

export const stack = [
  "React",
  "React Native",
  "TypeScript",
  "Django",
  "FastAPI",
  "Tailwind CSS",
  "PostgreSQL",
  "MySQL",
  "Redis",
  "Docker",
];

export const heroCode =
  'const engineer = {\n  focus: "frontend",\n  stack: ["react", "django",\n    "fastapi", "postgres"],\n  ships: true,\n};';

export const projects: Project[] = [
  {
    title: "Bluetrax",
    blurb:
      "Fleet tracking system — live vehicle telemetry, geofencing and trip history for fleet operators.",
    tags: ["React", "Django", "PostgreSQL"],
    image: "/images/BLUETRAX.png",
    href: "https://bluetrax.co.ke",
  },
  {
    title: "TMS",
    blurb:
      "Logistics operations management — dispatch, orders and fleet workflows in one console.",
    tags: ["React", "FastAPI", "Redis"],
    image: "/images/TMS.png",
    href: "https://tms.bluetrax.co.ke",
  },
  {
    title: "Kollatix",
    blurb:
      "Risk assessment engine for commercial lenders managing tracked assets.",
    tags: ["TypeScript", "Django", "MySQL"],
    image: "/images/KOLLATIX.png",
    href: "https://app.kollatix.com",
  },
  {
    title: "Rhinocharge Leaderboard",
    blurb:
      "Live rally leaderboard for the Rhino Charge — raising funds to protect endangered species in Kenya.",
    tags: ["React", "Tailwind", "Docker"],
    image: "/images/LEADERBOARD.png",
    href: "https://rhinocharge-leaderboard.bluetrax.co.ke",
  },
];

export default items;
