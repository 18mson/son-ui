import React from "react";

export default function Card({ children }: { children: React.ReactNode }) {
  return <div className="p-4 rounded-lg border border-slate-100 bg-white">{children}</div>;
}
