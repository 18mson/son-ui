"use client";

import React, { useState } from "react";

type Props = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  children: React.ReactNode;
};

export default function Select({ label, className, id, children, ...rest }: Props) {
  const [inputId] = useState(() => id || `select-${Math.random().toString(36).slice(2, 9)}`);

  if (label) {
    return (
      <div className="relative mt-4">
        <select
          id={inputId}
          {...rest}
          className={`w-full px-4 py-3 rounded-lg border-2 border-slate-200 appearance-none transition-all duration-300 focus:outline-none focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/20 peer ${className ?? ""}`}
        >
          {children}
        </select>
        <label htmlFor={inputId} className="absolute left-4 top-3 text-slate-500 transition-all duration-300 peer-focus:-top-6 peer-focus:left-4 peer-focus:text-sm peer-focus:font-medium peer-focus:text-blue-600">
          {label}
        </label>
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4">
            <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </div>
      </div>
    );
  }

  return (
    <select id={inputId} {...rest} className={`w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-200 ${className ?? ""}`}>
      {children}
    </select>
  );
}
