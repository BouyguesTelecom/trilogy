import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Chips, ChipsList } from '../index';
import { renderBefore } from '../../../../storybook/preview';

const meta = {
  title: 'Chips/ChipsList',
  component: ChipsList,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The ChipsList component is used to display a collection of chips, with options for scrolling and multiple selection.',
      },
    },
  },
  argTypes: {
    multiple: {
      description: 'Whether multiple chips can be selected simultaneously',
      control: 'boolean',
    },
    scrollable: {
      description: 'Whether the chips list is horizontally scrollable',
      control: 'boolean',
    },
    accessibilityLabelledBy: {
      description: 'ID of an element that labels this list for accessibility',
      control: 'text',
    },
    className: {
      description: 'Additional CSS class names',
      control: 'text',
    },
  },
} as Meta<typeof ChipsList>;

renderBefore(meta);

// Basic example with interactive chips
const InteractiveChipsList = ({ multiple = false, scrollable = false }) => {
  const [activeChips, setActiveChips] = useState<Record<string, boolean>>({});
  
  const toggleChip = (id: string) => {
    if (multiple) {
      setActiveChips({
        ...activeChips,
        [id]: !activeChips[id],
      });
    } else {
      const newState: Record<string, boolean> = {};
      newState[id] = !activeChips[id];
      setActiveChips(newState);
    }
  };
  
  return (
    <ChipsList multiple={multiple} scrollable={scrollable} accessibilityLabelledBy="filter-options">
      <p id="filter-options">Filter options:</p>
      <Chips id="chip1" active={activeChips["chip1"]} onClick={() => toggleChip("chip1")}>Option 1</Chips>
      <Chips id="chip2" active={activeChips["chip2"]} onClick={() => toggleChip("chip2")}>Option 2</Chips>
      <Chips id="chip3" active={activeChips["chip3"]} onClick={() => toggleChip("chip3")}>Option 3</Chips>
      <Chips id="chip4" active={activeChips["chip4"]} onClick={() => toggleChip("chip4")}>Option 4</Chips>
      {scrollable && (
        <>
          <Chips id="chip5" active={activeChips["chip5"]} onClick={() => toggleChip("chip5")}>Option 5</Chips>
          <Chips id="chip6" active={activeChips["chip6"]} onClick={() => toggleChip("chip6")}>Option 6</Chips>
          <Chips id="chip7" active={activeChips["chip7"]} onClick={() => toggleChip("chip7")}>Option 7</Chips>
          <Chips id="chip8" active={activeChips["chip8"]} onClick={() => toggleChip("chip8")}>Option 8</Chips>
        </>
      )}
    </ChipsList>
  );
};

// Examples
export const Basic: StoryObj<typeof ChipsList> = {
  render: () => <InteractiveChipsList />,
};

export const MultipleSelection: StoryObj<typeof ChipsList> = {
  render: () => <InteractiveChipsList multiple={true} />,
};

export const Scrollable: StoryObj<typeof ChipsList> = {
  render: () => <InteractiveChipsList scrollable={true} />,
};

export const ScrollableMultiple: StoryObj<typeof ChipsList> = {
  render: () => <InteractiveChipsList scrollable={true} multiple={true} />,
};

export const WithMixedContent: StoryObj<typeof ChipsList> = {
  render: () => (
    <ChipsList accessibilityLabelledBy="categories">
      <p id="categories">Categories:</p>
      <Chips>All</Chips>
      <Chips>New</Chips>
      <Chips disabled>Premium</Chips>
      <Chips>Sale</Chips>
      <Chips>Limited</Chips>
    </ChipsList>
  ),
};

export default meta;