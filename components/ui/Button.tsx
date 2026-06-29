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
    "bg-ember text-white shadow-ember hover:bg-[#e03d00] hover:-translate-y-px active:translate-y-0",
  ghost:
    "bg-transparent text-dark border border-dark/25 hover:border-dark hover:bg-dark/[.04]",
  "ghost-inv":
    "bg-transparent text-white border border-white/20 hover:border-white/60 hover:bg-white/[.05]",
  light:
    "bg-white text-dark hover:-translate-y-px hover:shadow-card",
  sage:
    "bg-sage text-dark hover:-translate-y-px hover:bg-[#00b374]",
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
    "inline-flex items-center gap-2 font-sans font-semibold text-[14px] px-6 py-3 rounded-full border border-transparent cursor-pointer transition-all duration-150 whitespace-nowrap tracking-[-0.01em]",
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
