"use client";

import { Check, Copy } from "lucide-react";
import React, { ReactNode } from "react";

type Props = {
  title: string;
  description?: string;
  preview?: ReactNode;
  code?: string;
};

export default function ComponentCard({ title, description, preview, code }: Props) {
  const [copied, setCopied] = React.useState(false);

  const copyCode = () => {
    if (code) {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="gap-4">
        <div>
          <h4 className="font-semibold text-slate-900">{title}</h4>
          {description && <p className="text-sm text-muted-foreground mt-1">{description}</p>}
        </div>
        <div className="py-2">
          {preview}
        </div>
      </div>

      {code && (
        <pre className="overflow-auto bg-slate-100 p-3 rounded-t-lg text-xs text-slate-700">{code}</pre>
      )}

      <button
        onClick={copyCode}
        className="w-full px-4 py-2 rounded-b-lg border border-slate-200 text-sm text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 flex items-center justify-center gap-2 active:scale-95"
      >
        {copied ? (
          <>
            <Check className="w-4 h-4 text-emerald-600" />
            <span className="text-emerald-600">Copied!</span>
          </>
        ) : (
          <>
            <Copy className="w-4 h-4" />
            <span>Copy Code</span>
          </>
        )}
      </button>
    </div>
  );
}
