import type { Meta, StoryObj } from '@storybook/react'
import { IconName } from '../icon'
import type { DividerProps } from './DividerProps'
import { Divider } from './index'
import React from 'react'

type DividerStoryArgs = DividerProps & {
  marginless?: boolean
  testId?: string
}

const meta: Meta<DividerStoryArgs> = {
  title: 'Components/Divider',
  component: Divider,
  render: (args) => <Divider {...args} content={args.iconName ? '' : args.content} />,
  tags: ['autodocs'],
  parameters: {
    controls: {
      exclude: ['marginless', 'testId', 'id', 'className'],
    },
    docs: {
      description: {
        component: ' ',
      },
    },
  },
  argTypes: {
    content: {
      control: 'text',
      description: 'Text content for Divider (ignored when iconName is set).',
    },
    unboxed: {
      control: 'boolean',
      description: 'Full-width separator in another component',
    },
    iconName: {
      control: 'select',
      options: Object.values(IconName),
      description: 'Custom icon for Divider (has priority over content).',
    },
    marginless: { table: { disable: true } },
    testId: { table: { disable: true } },
    id: { table: { disable: true } },
    className: { table: { disable: true } },
    inverted: {
      control: 'boolean',
      description: 'Inverted divider color',
    },
  },
}

export default meta

export const Default: StoryObj<DividerStoryArgs> = {
  args: {
    content: 'Divider',
    unboxed: false,
    inverted: false,
  },
}

export const WithIcon: StoryObj<DividerStoryArgs> = {
  args: {
    ...Default.args,
    content: '',
    iconName: IconName.CHECK,
  },
}

export const Unboxed: StoryObj<DividerStoryArgs> = {
  args: {
    ...Default.args,
    unboxed: true,
  },
}

export const Inverted: StoryObj<DividerStoryArgs> = {
  args: {
    ...Default.args,
    inverted: true,
  },
}
