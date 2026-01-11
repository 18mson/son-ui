import React, { useId } from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export default function Input({ label, className, id, placeholder, onFocus, onBlur, ...rest }: Props) {
  const generatedId = useId();
  const inputId = id || generatedId;
  const [focused, setFocused] = React.useState(false);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true);
    if (onFocus) onFocus(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(false);
    if (onBlur) onBlur(e);
  };

  if (label) {
    const placeholderText = focused ? (placeholder ?? label) : " ";
    return (
      <div className="relative mt-4">
        <input
          id={inputId}
          placeholder={placeholderText}
          {...rest}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`w-full px-4 py-3 rounded-lg border-2 border-slate-200 transition-all duration-300 focus:outline-none focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/20 peer ${className ?? ""}`}
        />
        <label htmlFor={inputId} className="absolute left-4 top-3 text-slate-500 transition-all duration-300 peer-focus:-top-6 peer-focus:left-4 peer-focus:text-sm peer-focus:font-medium peer-focus:text-blue-600 peer-placeholder-shown:top-3 peer-placeholder-shown:text-slate-500">
          {label}
        </label>
      </div>
    );
  }

  return (
    <input
      id={inputId}
      {...rest}
      className={`w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-200 ${className ?? ""}`}
    />
  );
}

