import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "main";
  id?: string;
}

export default function Container({
  children,
  className = "",
  as: Component = "div",
  id,
}: ContainerProps) {
  return (
    <Component
      id={id}
      className={`mx-auto w-full max-w-[1400px] px-5 sm:px-6 lg:px-8 xl:px-12 ${className}`}
    >
      {children}
    </Component>
  );
}
