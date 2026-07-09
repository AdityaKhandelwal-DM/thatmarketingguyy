import { cn } from "@/lib/utils";

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export default function Card({ className, children }: CardProps) {
  return (
    <div className={cn("bg-white border border-border rounded-card shadow-card p-8", className)}>
      {children}
    </div>
  );
}
