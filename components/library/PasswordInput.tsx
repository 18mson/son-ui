"use client";

import React from "react";
import { Eye, EyeOff } from "lucide-react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export default function PasswordInput({ label = "Password", className, id, ...rest }: Props) {
  const generatedId = React.useId();
  const inputId = id || `password-${generatedId}`;
  const [visible, setVisible] = React.useState(false);

  return (
    <div className="relative mt-4">
      <input
        id={inputId}
        type={visible ? "text" : "password"}
        placeholder=" "
        {...rest}
        className={`w-full px-4 py-3 rounded-lg border-2 border-slate-200 transition-all duration-300 focus:outline-none focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/20 peer ${className ?? ""}`}
      />
      {label && (
        <label htmlFor={inputId} className="absolute left-4 top-3 text-slate-500 transition-all duration-300 peer-focus:-top-6 peer-focus:left-4 peer-focus:text-sm peer-focus:font-medium peer-focus:text-blue-600 peer-placeholder-shown:top-3 peer-placeholder-shown:text-slate-500">
          {label}
        </label>
      )}

      <button
        type="button"
        aria-label={visible ? "Hide password" : "Show password"}
        onClick={() => setVisible((s) => !s)}
        className="absolute right-3 top-2.5 p-2 rounded-md text-slate-500 hover:text-slate-700"
      >
        {visible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
      </button>
    </div>
  );
}
