import type { Meta, StoryObj } from '@storybook/react'
import { Column, Columns, Section, Textarea } from '../../lib'
import { IconName } from '../icon'

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  argTypes:{
    className: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    maxLength: {
      control: { type: 'number' },
    },
    iconNameLeft: {
      options:[
        IconName.ALERT,
        IconName.CHECK,
        IconName.BELL,
        IconName.EYE,
        IconName.INFOS_CIRCLE,
        IconName.SEARCH,
        IconName.TRASH,
      ],
      control: { type: 'select' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  }
}

export default meta

type Story = StoryObj<typeof Textarea>


export const Example: Story = {
  render: () => (
    <Section>
      <Columns>
        <Column>
          <Textarea label="Label dynamique" maxLength={150} placeholder="placeholder" />
        </Column>
        <Column>
          <Textarea disabled label="Label dynamique" placeholder="placeholder" />
        </Column>
        <Column>
          <Textarea iconNameLeft="tri-alert" label="Label dynamique" placeholder="placeholder" />
        </Column>
      </Columns>
    </Section>
  ),
}

export const Sandbox: Story = {
  render: (args) => (
    <Section>
      <Columns>
        <Column>
          <Textarea {...args}/>
        </Column>
      </Columns>
    </Section>
  ),
  args:{
    label: "Label dynamique",
    placeholder: "Sandbox placeholder",
    maxLength: 250,
    iconNameLeft: undefined,
    disabled: false,
    className: "",
  }
}
