import { ReactNode } from "react";
import { ArrowRight, Loader2 } from "lucide-react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "accent" | "whatsapp";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  loading?: boolean;
  arrow?: boolean;
  className?: string;
  target?: string;
  id?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  type = "button",
  disabled = false,
  loading = false,
  arrow = false,
  className = "",
  target,
  id,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-navy-900 text-white hover:bg-navy-800 active:bg-navy-950 shadow-sm hover:shadow-lg hover:-translate-y-0.5",
    secondary:
      "bg-green-700 text-white hover:bg-green-600 active:bg-green-800 shadow-sm hover:shadow-lg hover:-translate-y-0.5",
    outline:
      "border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white hover:-translate-y-0.5",
    ghost:
      "text-navy-900 hover:bg-navy-50 active:bg-navy-100",
    accent:
      "bg-gold-500 text-navy-900 hover:bg-gold-400 active:bg-gold-600 shadow-sm hover:shadow-lg hover:-translate-y-0.5 font-bold",
    whatsapp:
      "bg-[#25D366] text-white hover:bg-[#20bd5a] shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 font-bold",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-sm rounded-full gap-1.5",
    md: "px-7 py-3 text-sm rounded-full gap-2",
    lg: "px-8 py-3.5 text-base rounded-full gap-2.5",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {loading && <Loader2 className="w-4 h-4 animate-spin" />}
      {children}
      {arrow && !loading && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`group ${classes}`}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        id={id}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`group ${classes}`}
      id={id}
    >
      {content}
    </button>
  );
}
