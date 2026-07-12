export function Input({ label, ...rest }) {
  return (
    <label className="field">
      {label && <span className="field__label">{label}</span>}
      <input className="field__input" {...rest} />
    </label>
  );
}

export function Textarea({ label, rows = 5, ...rest }) {
  return (
    <label className="field">
      {label && <span className="field__label">{label}</span>}
      <textarea className="field__input" rows={rows} {...rest} />
    </label>
  );
}
