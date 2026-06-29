import { cn } from "@/lib/utils";
import Link from "next/link";

type Variant = "primary" | "ghost" | "ghost-inv" | "light" | "sage";

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
    "bg-text text-white hover:bg-slate-800 active:bg-slate-900",
  ghost:
    "bg-transparent text-text border border-border-strong hover:border-text hover:bg-surface-alt",
  "ghost-inv":
    "bg-transparent text-white border border-white/20 hover:border-white/50 hover:bg-white/[.06]",
  light:
    "bg-white text-text hover:bg-surface-alt",
  sage:
    "bg-sage text-white hover:bg-emerald-700",
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
    "inline-flex items-center gap-2 font-sans font-semibold text-[14px] px-5 py-2.5 rounded-lg border border-transparent cursor-pointer transition-colors duration-150 whitespace-nowrap",
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
