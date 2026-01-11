import React from "react";

type Props = {
  children: React.ReactNode;
  variant?: "solid" | "outline";
};

export default function Button({ children, variant = "solid" }: Props) {
  const base = "px-4 py-2 rounded-md font-medium transition-all duration-150";
  const solid = "bg-blue-600 text-white hover:bg-blue-700";
  const outline = "border border-slate-200 text-slate-900 hover:bg-slate-100";

  return <button className={`${base} ${variant === "solid" ? solid : outline}`}>{children}</button>;
}
