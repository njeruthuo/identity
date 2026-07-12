import { LucideProps } from "lucide-react";
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ComponentType,
  InputHTMLAttributes,
  ReactNode,
} from "react";

export type Social = {
  icon: ComponentType<LucideProps>;
  label: string;
  href: string;
};

export type AboutProps = {
  onNavigate?: (page: string) => void;
};

type IconType = ComponentType<LucideProps>;

export type ButtonProps = {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  icon?: IconType;
  iconAfter?: IconType;
  href?: string;
  children?: ReactNode;
} & Omit<
  ButtonHTMLAttributes<HTMLButtonElement> &
    AnchorHTMLAttributes<HTMLAnchorElement>,
  "children"
>;

export type CodeBlockProps = {
  filename?: string;
  code?: string;
};

export type FooterProps = {
  name?: string;
  email?: string;
  socials?: Social[];
};

export type IconButtonProps = {
  icon: ComponentType<LucideProps>;
  label: string;
  href?: string;
  inverse?: boolean;
} & Omit<
  ButtonHTMLAttributes<HTMLButtonElement> &
    AnchorHTMLAttributes<HTMLAnchorElement>,
  "icon"
>;

export type InputProps = {
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export type NavbarProps = {
  name?: string;
  links?: string[];
  active?: string;
  onNavigate?: (page: string) => void;
  cta?: string;
};

export type Project = {
  title: string;
  blurb?: string;
  tags?: string[];
  image?: string;
  imageLabel?: string;
  href?: string;
};

export type SectionLabelProps = {
  index?: string;
  children: ReactNode;
};
