"use client";

import React, { useId } from "react";
import { Search } from "lucide-react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export default function SearchInput({ label = "Search", className, id, placeholder, ...rest }: Props) {
  const generatedId = useId();
  const inputId = id || generatedId;

  return (
    <div className="relative mt-4">
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-slate-400">
        <Search className="w-4 h-4" />
      </div>
      <input
        id={inputId}
        placeholder={placeholder ?? " "}
        {...rest}
        className={`w-full pl-10 pr-4 py-3 rounded-lg border-2 border-slate-200 transition-all duration-300 focus:outline-none focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/20 peer ${className ?? ""}`}
      />
      {label && (
        <label htmlFor={inputId} className="absolute left-10 top-3 text-slate-500 transition-all duration-300 peer-focus:-top-6 peer-focus:left-10 peer-focus:text-sm peer-focus:font-medium peer-focus:text-blue-600 peer-placeholder-shown:top-3 peer-placeholder-shown:text-slate-500">
          {label}
        </label>
      )}
    </div>
  );
}
