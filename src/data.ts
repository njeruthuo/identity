import { Github, Linkedin, Mail } from "lucide-react";
import { Social } from "./types";

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

export default items;
