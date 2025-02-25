import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from './index'
import { SwitchProps } from './SwitchProps'
import { StatusState } from '../../objects'

const meta = {
  title: 'Components/Switch',
  component: Switch,
  argTypes: {
    status: {
      control: 'select',
      options: Object.values(StatusState),
      table: {
        type: { summary: 'StatusState' },
      },
    },
  },
} satisfies Meta<SwitchProps>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    label: 'Switch one',
    name: 'switch one',
    onChange: (e) => {
      console.log('SwitchState =>', e.switchState)
      console.log('SwitchSName =>', e.switchName)
    },
    onClick: (e) => {
      console.log('SwitchState =>', e.switchState)
      console.log('SwitchSName =>', e.switchName)
    },
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Switch disabled',
    name: 'switch disabled',
    onChange: (e) => {
      console.log('SwitchState =>', e.switchState)
      console.log('SwitchSName =>', e.switchName)
    },
    onClick: (e) => {
      console.log('SwitchState =>', e.switchState)
      console.log('SwitchSName =>', e.switchName)
    },
  },
}

export const Checked: Story = {
  args: {
    checked: true,
    label: 'Switch checked',
    name: 'switch checked',
    onChange: (e) => {
      console.log('SwitchState =>', e.switchState)
      console.log('SwitchSName =>', e.switchName)
    },
    onClick: (e) => {
      console.log('SwitchState =>', e.switchState)
      console.log('SwitchSName =>', e.switchName)
    },
  },
}
