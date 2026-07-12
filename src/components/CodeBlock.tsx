type CodeBlockProps = {
  filename?: string;
  code?: string;
};

export function CodeBlock({ filename = 'snippet.tsx', code = '' }: CodeBlockProps) {
  const lines = String(code).split('\n');
  return (
    <div className="code-block">
      <div className="code-block__bar">
        <span className="code-block__dot" />
        <span className="code-block__dot" />
        <span className="code-block__dot" />
        <span className="code-block__filename">{filename}</span>
      </div>
      <pre className="code-block__pre">
        {lines.map((ln, i) => (
          <div key={i} className="code-block__line">
            <span className="code-block__num">{i + 1}</span>
            <span style={{ whiteSpace: 'pre' }}>{ln || ' '}</span>
          </div>
        ))}
      </pre>
    </div>
  );
}
