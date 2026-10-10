interface MarkProps {
  children: React.ReactNode;
  /** ms to wait before the stroke sweeps — stagger multiple marks in one heading */
  delay?: number;
}

/**
 * Highlighter stroke on a phrase. The same words carry this stroke in the
 * text-only ad creative; keeping the treatment identical is what makes the
 * click-to-page handoff read as one continuous message.
 */
export default function Mark({ children, delay = 0 }: MarkProps) {
  return (
    <span className="mark" style={{ "--mark-delay": `${delay}ms` } as React.CSSProperties}>
      {children}
    </span>
  );
}
