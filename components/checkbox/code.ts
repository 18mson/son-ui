export const code = `import React from 'react';

function SimpleCheckbox() {
  return (
    <label className="inline-flex items-center gap-3">
      <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
      <span className="text-sm text-slate-700">Accept terms</span>
    </label>
  );
}

export default function Example() {
  return <SimpleCheckbox />;
}
`;
