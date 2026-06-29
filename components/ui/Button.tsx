import { cn } from "@/lib/utils";
import Link from "next/link";

type Variant = "primary" | "ghost" | "mint" | "light";

interface ButtonProps {
  href?: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  fullWidth?: boolean;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-orange text-white shadow-[0_6px_18px_rgba(249,115,22,.30)] hover:bg-orange-700 hover:-translate-y-0.5",
  ghost:
    "bg-transparent text-navy border border-ink/20 hover:border-navy hover:bg-navy/[.03]",
  mint: "bg-mint text-navy hover:-translate-y-0.5",
  light: "bg-white text-navy hover:-translate-y-0.5 hover:shadow-card-lg",
};

export default function Button({
  href,
  variant = "primary",
  className,
  children,
  onClick,
  type = "button",
  fullWidth,
}: ButtonProps) {
  const base = cn(
    "inline-flex items-center gap-2 font-display font-bold text-[15px] px-6 py-3.5 rounded-full border border-transparent cursor-pointer transition-all duration-150 whitespace-nowrap",
    variants[variant],
    fullWidth && "w-full justify-center",
    className
  );

  if (href) {
    return (
      <Link href={href} className={base}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={base}>
      {children}
    </button>
  );
}
