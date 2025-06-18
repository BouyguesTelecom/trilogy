import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Title } from '../index';
import { TitleLevels, TitleMarkup } from '../TitleEnum';
import { renderBefore } from '../../../../storybook/preview';
import { TypographyAlign, TypographyBold, TypographyColor, TypographyTransform } from '../../../objects';

import { TitleScreen } from '../../../../../examples/react-template/screens/Title';

const meta = {
  title: 'Title',
  component: Title,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The Title component is used to display headings with various levels and styling options.',
      },
    },
  },
  argTypes: {
    children: {
      description: 'The content of the title',
      control: 'text',
    },
    level: {
      description: 'The heading level of the title',
      control: { type: 'select' },
      options: [
        TitleLevels.ONE,
        TitleLevels.TWO,
        TitleLevels.THREE,
        TitleLevels.FOUR,
        TitleLevels.FIVE,
        TitleLevels.SIX,
      ],
    },
    markup: {
      description: 'The HTML element to use for rendering the title',
      control: { type: 'select' },
      options: Object.values(TitleMarkup),
    },
    typo: {
      description: 'Typography style variations to apply',
      control: { type: 'multi-select' },
      options: [
        ...Object.values(TypographyBold),
        ...Object.values(TypographyAlign),
        ...Object.values(TypographyColor),
        ...Object.values(TypographyTransform),
      ],
    },
    subtitle: {
      description: 'Whether the title is a subtitle',
      control: 'boolean',
    },
    overline: {
      description: 'Whether the title is an overline (displayed above content)',
      control: 'boolean',
    },
    inverted: {
      description: 'Whether to use inverted colors for the title',
      control: 'boolean',
    },
    marginless: {
      description: 'Whether to remove margins from the title',
      control: 'boolean',
    },
    onClick: {
      description: 'Function called when the title is clicked',
      action: 'clicked',
    },
    className: {
      description: 'Additional CSS class names',
      control: 'text',
    },
  },
} as Meta<typeof Title>;

renderBefore(meta);

// Screen example showing the component in action
export const Screen: StoryObj = {
  render: () => <TitleScreen />,
};

// Basic examples
export const Basic: StoryObj<typeof Title> = {
  args: {
    children: 'This is a standard title',
    level: TitleLevels.TWO,
  },
};

export const Levels: StoryObj = {
  render: () => (
    <div>
      <Title level={TitleLevels.ONE}>Title Level 1</Title>
      <Title level={TitleLevels.TWO}>Title Level 2</Title>
      <Title level={TitleLevels.THREE}>Title Level 3</Title>
      <Title level={TitleLevels.FOUR}>Title Level 4</Title>
      <Title level={TitleLevels.FIVE}>Title Level 5</Title>
      <Title level={TitleLevels.SIX}>Title Level 6</Title>
    </div>
  ),
};

export const Subtitle: StoryObj<typeof Title> = {
  args: {
    children: 'This is a subtitle',
    subtitle: true,
  },
};

export const Overline: StoryObj<typeof Title> = {
  args: {
    children: 'This is an overline',
    overline: true,
  },
};

export const Bold: StoryObj<typeof Title> = {
  args: {
    children: 'This title is bold',
    level: TitleLevels.THREE,
    typo: TypographyBold.TEXT_WEIGHT_BOLD,
  },
};

export const Centered: StoryObj<typeof Title> = {
  args: {
    children: 'This title is centered',
    level: TitleLevels.THREE,
    typo: TypographyAlign.TEXT_CENTERED,
  },
};

export const Uppercase: StoryObj<typeof Title> = {
  args: {
    children: 'This title is uppercase',
    level: TitleLevels.THREE,
    typo: TypographyTransform.TEXT_UPPERCASE,
  },
};

export const ColoredTitle: StoryObj<typeof Title> = {
  args: {
    children: 'This title has a specific color',
    level: TitleLevels.THREE,
    typo: TypographyColor.TEXT_ACCENT,
  },
};

export const CustomMarkup: StoryObj<typeof Title> = {
  args: {
    children: 'This title uses a custom HTML tag',
    level: TitleLevels.THREE,
    markup: TitleMarkup.DIV,
  },
};

export const Marginless: StoryObj<typeof Title> = {
  args: {
    children: 'This title has no margins',
    level: TitleLevels.THREE,
    marginless: true,
  },
};

export const Inverted: StoryObj<typeof Title> = {
  args: {
    children: 'This title has inverted colors',
    level: TitleLevels.THREE,
    inverted: true,
  },
  render: (args) => (
    <div style={{ backgroundColor: '#333', padding: '20px' }}>
      <Title {...args} />
    </div>
  ),
};

export const Clickable: StoryObj<typeof Title> = {
  args: {
    children: 'This title is clickable',
    level: TitleLevels.THREE,
    onClick: () => alert('Title clicked!'),
  },
};


export default meta;