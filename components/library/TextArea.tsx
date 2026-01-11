"use client";

import React, { useId } from "react";

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
};

export default function TextArea({ label, className, id, rows = 4, ...rest }: Props) {
  const generatedId = useId();
  const inputId = id || `textarea-${generatedId}`;

  if (label) {
    return (
      <div className="relative mt-4">
        <textarea
          id={inputId}
          rows={rows}
          placeholder=" "
          {...rest}
          className={`w-full px-4 py-3 rounded-lg border-2 border-slate-200 transition-all duration-300 focus:outline-none focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/20 peer ${className ?? ""}`}
        />
        <label htmlFor={inputId} className="absolute left-4 top-3 text-slate-500 transition-all duration-300 peer-focus:-top-6 peer-focus:left-4 peer-focus:text-sm peer-focus:font-medium peer-focus:text-blue-600 peer-placeholder-shown:top-3 peer-placeholder-shown:text-slate-500">
          {label}
        </label>
      </div>
    );
  }

  return <textarea id={inputId} rows={rows} {...rest} className={`w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-200 ${className ?? ""}`} />;
}
