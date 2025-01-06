import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { InputStatus, InputType } from './InputEnum'
import { Input } from './index'
import { InputProps } from './InputProps'
import { IconName } from '../icon'

const meta = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    iconNameLeft: {
      control: 'select',
      options: Object.values(IconName),
      table: {
        type: { summary: 'IconName' },
      },
    },
    iconNameRight: {
      control: 'select',
      options: Object.values(IconName),
      table: {
        type: { summary: 'IconName' },
      },
    },
    status: {
      control: 'select',
      options: Object.values(InputStatus),
      table: {
        type: { summary: 'InputStatus' },
      },
    },
  }
} satisfies Meta<InputProps>

export default meta
type Story = StoryObj<typeof meta>

const Template = (args: InputProps) => (
  //   L'utilisation de l'input Status nécessite l'injection de Trilogy-Vanilla pour fonctioner :
  // <script id='vanilla-script' lib="https://assets.bouyguestelecom.fr/TRILOGY/trilogy-vanilla@3.2.0/trilogy-vanilla.min.js"></script>
  <Input {...args} />
)

const TemplateMultiple = (args: InputProps) => (
  <>
    <Input {...args} />
    <Input {...args} type={InputType.TEXT} placeholder='Input type texte' />
    <Input {...args} type={InputType.NUMBER} placeholder='Input type number' />
    <Input {...args} type={InputType.SEARCH} placeholder='Input type search' />
    <Input {...args} type={InputType.PASSWORD} placeholder='Input type password' />
    <Input {...args} type={InputType.DATE} placeholder='Input type date' />
    <Input {...args} type={InputType.EMAIL} placeholder='Input type mail' />
  </>
)

export const Base: Story = {
  args: {
    accessibilityLabel: 'input base',
    placeholder: 'Label dynamique après saisie',
  },
}

export const Type: Story = {
  render: TemplateMultiple,
  args: {
    accessibilityLabel: 'input base',
    placeholder: 'Label dynamique après saisie',
  },
}

export const AvecIcône: Story = {
  args: {
    help: 'this is my help message',
    type: InputType.TEXT,
    placeholder: 'This is my placeholder',
    iconNameLeft: IconName.INFOS_CIRCLE,
    iconNameRight: IconName.SEARCH,
    status: InputStatus.SUCCESS,
  },
}

export const Status: Story = {
  args: {
    help: 'this is my help message',
    type: InputType.TEXT,
    placeholder: 'This is my placeholder',
    iconNameLeft: IconName.INFOS_CIRCLE,
    iconNameRight: IconName.SEARCH,
    status: InputStatus.ERROR,
  },
}

export const Password: Story = {
  render: Template,
  args: {
    type: InputType.PASSWORD,
    placeholder: 'This is my placeholder',
    securityGauge: true,
    help: 'this is my help message',
    minLength: 8,
    maxLength: 15,
    validationRules: {
      lowercase: true,
      uppercase: true,
      number: true,
      specialChars: true,
      length: { max: 4 },
    },
  },
}
