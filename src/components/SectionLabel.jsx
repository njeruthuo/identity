export function SectionLabel({ index, children }) {
  return (
    <div className="section-label">
      <span className="section-label__index">{index ? index + ' /' : '/'}</span>
      <span className="section-label__text">{children}</span>
      <span className="section-label__rule" />
    </div>
  );
}
