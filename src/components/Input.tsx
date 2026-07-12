import type { TextareaHTMLAttributes } from "react";
import { InputProps } from "../types";

export function Input({ label, ...rest }: InputProps) {
  return (
    <label className="field">
      {label && <span className="field__label">{label}</span>}
      <input className="field__input" {...rest} />
    </label>
  );
}

type TextareaProps = {
  label?: string;
  rows?: number;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Textarea({ label, rows = 5, ...rest }: TextareaProps) {
  return (
    <label className="field">
      {label && <span className="field__label">{label}</span>}
      <textarea className="field__input" rows={rows} {...rest} />
    </label>
  );
}
