import React from "react";

export default function Badge({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-slate-100 text-slate-800">{children}</span>;
}
