import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Text } from '../index';
import { TextLevels, TextMarkup } from '../TextEnum';
import { renderBefore } from '../../../../storybook/preview';
import { TypographyBold, TypographyAlign, TypographyColor, TypographyTransform } from '../../../objects';

import { TextScreen } from '../../../../../examples/react-template/screens/Text';

const meta = {
  title: 'Text',
  component: Text,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The Text component is used to display text content with various styling options.',
      },
    },
  },
  argTypes: {
    children: {
      description: 'The text content to display',
      control: 'text',
    },
    level: {
      description: 'The size level of the text',
      control: { type: 'select' },
      options: [
        TextLevels.ONE,
        TextLevels.TWO,
        TextLevels.THREE,
        TextLevels.FOUR,
      ],
    },
    markup: {
      description: 'The HTML element to use for rendering the text',
      control: { type: 'select' },
      options: Object.values(TextMarkup),
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
    inverted: {
      description: 'Whether to use inverted colors for the text',
      control: 'boolean',
    },
    className: {
      description: 'Additional CSS class names',
      control: 'text',
    },
    numberOfLines: {
      description: 'Truncate text after this number of lines',
      control: 'number',
    },
  },
} as Meta<typeof Text>;

renderBefore(meta);

// Screen example showing the component in action
export const Screen: StoryObj = {
  render: () => <TextScreen />,
};

// Basic examples
export const Basic: StoryObj<typeof Text> = {
  args: {
    children: 'This is a standard text component',
  },
};

export const Levels: StoryObj = {
  render: () => (
    <div>
      <Text level={TextLevels.ONE}>Text Level 1 (Largest)</Text>
      <Text level={TextLevels.TWO}>Text Level 2</Text>
      <Text level={TextLevels.THREE}>Text Level 3</Text>
      <Text level={TextLevels.FOUR}>Text Level 4 (Smallest)</Text>
    </div>
  ),
};

export const Bold: StoryObj<typeof Text> = {
  args: {
    children: 'This text is bold',
    typo: TypographyBold.TEXT_WEIGHT_BOLD,
  },
};

export const SemiBold: StoryObj<typeof Text> = {
  args: {
    children: 'This text is semi-bold',
    typo: TypographyBold.TEXT_WEIGHT_SEMIBOLD,
  },
};

export const Centered: StoryObj<typeof Text> = {
  args: {
    children: 'This text is centered',
    typo: TypographyAlign.TEXT_CENTERED,
  },
};

export const Uppercase: StoryObj<typeof Text> = {
  args: {
    children: 'This text is uppercase',
    typo: TypographyTransform.TEXT_UPPERCASE,
  },
};

export const ColoredText: StoryObj<typeof Text> = {
  args: {
    children: 'This text has a specific color',
    typo: TypographyColor.TEXT_ACCENT,
  },
};

export const WithMarkup: StoryObj<typeof Text> = {
  args: {
    children: 'This text uses the span element',
    markup: TextMarkup.SPAN,
  },
};

export const Inverted: StoryObj<typeof Text> = {
  args: {
    children: 'This text has inverted colors',
    inverted: true,
  },
  render: (args) => (
    <div style={{ backgroundColor: '#333', padding: '20px' }}>
      <Text {...args} />
    </div>
  ),
};

export const TruncatedText: StoryObj<typeof Text> = {
  args: {
    children: 'This is a very long text that will be truncated after a specific number of lines. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, quis ultricies nisl nisl quis nisl.',
    numberOfLines: 2,
  },
};

export const MultipleStyles: StoryObj<typeof Text> = {
  args: {
    children: 'Text with multiple typography styles',
    typo: [
      TypographyBold.TEXT_WEIGHT_BOLD,
      TypographyAlign.TEXT_CENTERED,
      TypographyColor.TEXT_ACCENT,
    ],
  },
};

export default meta;
