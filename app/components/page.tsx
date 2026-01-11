'use client';

import { useState } from 'react';
import Sidebar from '../../components/ui/Sidebar';
import ComponentCard from '../../components/ui/ComponentCard';
import Input from '../../components/library/Input';

import BtnMagPreview from '../../components/button-magnetic/preview';
import { code as btnMagCode } from '../../components/button-magnetic/code';
import BtnShimmerPreview from '../../components/button-shimmer/preview';
import { code as btnShimmerCode } from '../../components/button-shimmer/code';
import InputPreview from '../../components/input/preview';
import { code as inputCode } from '../../components/input/code';
import SearchPreview from '../../components/search-input/preview';
import { code as searchCode } from '../../components/search-input/code';
import PasswordPreview from '../../components/password-input/preview';
import { code as passwordCode } from '../../components/password-input/code';
import TextareaPreview from '../../components/textarea/preview';
import { code as textareaCode } from '../../components/textarea/code';
import SelectPreview from '../../components/select/preview';
import { code as selectCode } from '../../components/select/code';
import CheckboxPreview from '../../components/checkbox/preview';
import { code as checkboxCode } from '../../components/checkbox/code';
import CardPreview from '../../components/card/preview';
import { code as cardCode } from '../../components/card/code';
import BadgePreview from '../../components/badge/preview';
import { code as badgeCode } from '../../components/badge/code';
import ArrowBtnPreview from '../../components/button-arrow/preview';
import { code as arrowBtnCode } from '../../components/button-arrow/code';
import GlowBtnPreview from '../../components/button-glow/preview';
import { code as glowBtnCode } from '../../components/button-glow/code';

const CATEGORIES = ['All', 'Buttons', 'Inputs', 'Display', 'Data'];

const COMPONENTS = [
  {
    id: 'btn-1',
    title: 'Magnetic Button',
    category: 'Buttons',
    description: 'Use for main actions.',
    preview: <BtnMagPreview />,
    code: btnMagCode,
  },
  {
    id: 'btn-2',
    title: 'Hover Shimmer Button',
    category: 'Buttons',
    description: 'Button with shimmer effect.',
    preview: <BtnShimmerPreview />,
    code: btnShimmerCode,
  },
  {
    id: 'btn-3',
    title: 'Get Started Button',
    category: 'Buttons',
    description: 'Arrow button used for call-to-action.',
    preview: <ArrowBtnPreview />,
    code: arrowBtnCode,
  },
  {
    id: 'btn-4',
    title: 'Glow Button',
    category: 'Buttons',
    description: 'Button with colorful glow effect.',
    preview: <GlowBtnPreview />,
    code: glowBtnCode,
  },
  {
    id: 'input-1',
    title: 'Text Input',
    category: 'Inputs',
    description: 'Basic text input with label.',
    preview: <InputPreview />,
    code: inputCode,
  },
  {
    id: 'search-1',
    title: 'Search Input',
    category: 'Inputs',
    description: 'Search field with icon and floating label.',
    preview: <SearchPreview />,
    code: searchCode,
  },
  {
    id: 'password-1',
    title: 'Password Input',
    category: 'Inputs',
    description: 'Password field with show/hide toggle.',
    preview: <PasswordPreview />,
    code: passwordCode,
  },
  {
    id: 'textarea-1',
    title: 'Textarea',
    category: 'Inputs',
    description: 'Large text area with floating label.',
    preview: <TextareaPreview />,
    code: textareaCode,
  },
  {
    id: 'select-1',
    title: 'Select',
    category: 'Inputs',
    description: 'Styled select element with label.',
    preview: <SelectPreview />,
    code: selectCode,
  },
  {
    id: 'checkbox-1',
    title: 'Checkbox',
    category: 'Inputs',
    description: 'Styled checkbox with label.',
    preview: <CheckboxPreview />,
    code: checkboxCode,
  },
  {
    id: 'card-1',
    title: 'Info Card',
    category: 'Display',
    description: 'Card for short content blocks.',
    preview: <CardPreview />,
    code: cardCode,
  },
  {
    id: 'badge-1',
    title: 'Badge',
    category: 'Data',
    description: 'Small contextual label.',
    preview: <BadgePreview />,
    code: badgeCode,
  },
];

export default function ComponentsPage() {
  const [selected, setSelected] = useState<string>('All');
  const [query, setQuery] = useState('');

  const visible = COMPONENTS.filter((c) => {
    const matchesCat = selected === 'All' || c.category === selected;
    const matchesQuery = [c.title, c.description, c.category]
      .join(' ')
      .toLowerCase()
      .includes(query.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-6 py-12 grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8">
        <Sidebar
          categories={CATEGORIES}
          selected={selected}
          onSelect={setSelected}
        />

        <section>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <h2 className="text-2xl font-semibold">Components</h2>
            <div className="w-full max-w-sm">
              <Input
                placeholder="Search components..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((c) => (
              <ComponentCard
                key={c.id}
                title={c.title}
                description={c.description}
                preview={c.preview}
                code={c.code}
              />
            ))}

            {visible.length === 0 && (
              <div className="col-span-full text-center text-muted-foreground py-8">
                No components found.
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
