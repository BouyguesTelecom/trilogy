import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Textarea } from './index'
import { TextareaProps } from './TextareaProps'
import { CountdownProps } from '../countdown/CountdownProps'
import { Countdown } from '../countdown'
import { IconName } from '../icon'
import { InputStatus } from '../input'

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  argTypes:{
    iconNameLeft: {
      options: Object.values(IconName),
      table: {
        type: { summary: 'IconName' },
      },
    },
    iconNameRight: {
      options: Object.values(IconName),
      table: {
        type: { summary: 'IconName' },
      },
    },
    status: {
      options: Object.values(InputStatus),
      table: {
        type: { summary: 'InputStatus' },
      },
    },
  }
} satisfies Meta<TextareaProps>

export default meta
type Story = StoryObj<typeof meta>

const Template = (args: TextareaProps) => (
  // L'utilisation du textarea nécessite l'injection de Trilogy-Vanilla pour fonctioner :
  // <script id='vanilla-script' lib="https://assets.bouyguestelecom.fr/TRILOGY/trilogy-vanilla@3.2.0/trilogy-vanilla.min.js"></script>
  <Textarea {...args} />
)

export const Base: Story = {
  render: Template,
  args: {
    placeholder: 'placeholder',
    label: 'Label non dynamique',
    dynamicPlaceholder: false,
  },
}

export const LabelDynamique: Story = {
  render: Template,
  args: {
    placeholder: 'placeholder',
    label: 'Label dynamique',
  },
}

export const Disabled: Story = {
  render: Template,
  args: {
    disabled: true,
    placeholder: 'placeholder',
    label: 'Label dynamique',
  },
}

export const AvecUneIcône: Story = {
  render: Template,
  args: {
    placeholder: 'placeholder',
    label: 'Label dynamique',
    iconNameLeft: IconName.INFOS_CIRCLE,
  },
}

export const AvecCompteur: Story = {
  render: Template,
  args: {
    placeholder: 'placeholder',
    label: 'Label dynamique',
    maxLength: 150,
  },
}

export const Status: Story = {
  render: Template,
  args: {
    placeholder: 'placeholder',
    label: 'Label dynamique',
    status: InputStatus.ERROR,
  },
}
