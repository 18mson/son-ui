"use client";

import React from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export default function Checkbox({ label, className, id, ...rest }: Props) {
  const inputId = id || `checkbox-${Math.random().toString(36).slice(2, 9)}`;

  return (
    <div className="flex items-center gap-3">
      <input id={inputId} type="checkbox" {...rest} className={`w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 ${className ?? ""}`} />
      {label && <label htmlFor={inputId} className="text-sm text-slate-700">{label}</label>}
    </div>
  );
}
