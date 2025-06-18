import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonList } from '../index';
import { ButtonVariant } from '../ButtonEnum';
import { IconName } from '../../icon';
import { renderBefore } from '../../../../storybook/preview';

import { ButtonScreen } from '../../../../../examples/react-template/screens/Button';

const meta = {
  title: 'Button',
  component: Button,
  subcomponents: {
    ButtonList,
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The Button component is used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing an operation.',
      },
    },
  },
  argTypes: {
    variant: {
      description: 'The visual style of the button',
      control: { type: 'inline-radio' },
      options: [
        ButtonVariant.PRIMARY,
        ButtonVariant.SECONDARY,
        ButtonVariant.CONVERSION,
        ButtonVariant.GHOST,
      ],
    },
    iconName: {
      description: 'Icon to display inside the button',
      options: [
        undefined,
        IconName.ALERT,
        IconName.CHECK,
        IconName.BELL,
        IconName.EYE,
        IconName.INFOS_CIRCLE,
        IconName.SEARCH,
        IconName.TRASH,
      ],
    },
    disabled: {
      description: 'Whether the button is disabled',
      control: 'boolean',
    },
    children: {
      description: 'The content of the button',
      control: 'text',
    },
  },
} as Meta<typeof Button>;

renderBefore(meta);

// Screen example showing the component in action
export const Screen: StoryObj = {
  render: ({ ...args }) => {
    return <ButtonScreen />;
  },
};

// Basic examples
export const Basic: StoryObj<typeof Button> = {
  args: {
    children: 'Button',
  },
};

export const Primary: StoryObj<typeof Button> = {
  args: {
    variant: ButtonVariant.PRIMARY,
    children: 'Primary Button',
  },
};

export const Secondary: StoryObj<typeof Button> = {
  args: {
    variant: ButtonVariant.SECONDARY,
    children: 'Secondary Button',
  },
};

export const Conversion: StoryObj<typeof Button> = {
  args: {
    variant: ButtonVariant.CONVERSION,
    children: 'Conversion Button',
  },
};

export const Ghost: StoryObj<typeof Button> = {
  args: {
    variant: ButtonVariant.GHOST,
    children: 'Ghost Button',
  },
};

export const WithIcon: StoryObj<typeof Button> = {
  args: {
    iconName: IconName.SEARCH,
    children: 'Search',
  },
};

export const Disabled: StoryObj<typeof Button> = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};

export default meta;
