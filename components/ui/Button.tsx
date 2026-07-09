import { cn } from "@/lib/utils";
import Link from "next/link";

type Variant = "primary" | "secondary" | "light";

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
  primary: "bg-primary text-white hover:bg-primary-dark",
  secondary:
    "bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white",
  light: "bg-white text-text-primary hover:bg-bg-light",
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
    "inline-flex items-center gap-2 font-sans font-semibold text-[16px] px-[28px] py-[16px] rounded-btn border-2 border-transparent cursor-pointer transition-all duration-[250ms] whitespace-nowrap hover:-translate-y-0.5",
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
