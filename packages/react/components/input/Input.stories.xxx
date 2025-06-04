import type { Meta, StoryObj } from '@storybook/react'
import Input from './Input'
import { Alignable, Column, Columns, Container, IconName, Spacer, SpacerSize } from '../../lib'
import { Title, TitleLevels } from '../title'
import { TrilogyColor } from '../../objects'
import { Text } from '../text'

const meta: Meta<typeof Input> = {
  component: Input,
  argTypes:{
    type: {
      options: ['text', 'password'],
      control: { type: 'select' },
    },
    iconNameLeft: {
      options: Object.values(IconName),
      control: { type: 'select' },
    },
    iconNameRight: {
      options: Object.values(IconName),
      control: { type: 'select' },
    },
    status:{
      options: ['success', 'error'],
      control: { type: 'select' },
    }
  }
}

export default meta

type Story = StoryObj<typeof Input>

// @ts-ignore
export const Example: Story = {
  render: () => (
    <Columns multiline>
      <Column size={6}>
        <Title level={6}> Input type text </Title>
        <Input help="this is my help message" placeholder="This is my placeholder" type="text" />
      </Column>
      <Column size={6}>
        <Title level={6}> Input type password </Title>
        <Input help="this is my help message" placeholder="This is my placeholder" type="password" />
      </Column>
      <Column size={6}>
        <Title level={6}> Input type text with icon and status success </Title>
        <Input help="this is my help message" iconNameRight="tri-search" placeholder="This is my placeholder" status="success" type="text" />
      </Column>
      <Column size={6}>
        <Title level={6}> Input type text with icon and status error </Title>
        <Input help="this is my help message" iconNameRight="tri-search" placeholder="This is my placeholder" status="error" type="text" />
      </Column>
    </Columns>
  ),
}

// @ts-ignore
export const Sandbox: Story = {
  render: (args) => (
    <Columns multiline>
      <Column size={6}>
        <Input {...args} />
      </Column>
    </Columns>
  ),
  args:{
    help: "this is my help message",
    iconNameLeft: IconName.SEARCH,
    iconNameRight: IconName.SEARCH,
    placeholder: "This is my placeholder",
    type: "text",
    status: "success",
  }
}
