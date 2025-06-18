import type { Meta, StoryObj } from '@storybook/react'
import { Switch, Section, Rows, Row } from '../../lib'

const meta: Meta<typeof Switch> = {
  component: Switch,
  argTypes:{
    className: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
    },
    checked: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    status: {
      options: ['MAIN', 'ACCENT', 'INFO'],
      control: { type: 'inline-radio' },
    }
  }
}

export default meta

type Story = StoryObj<typeof Switch>


export const Example: Story = {
  render: () => (
    <Section>
      <Rows>
        <Row>
          <Switch label="Switch one" name="switch one" />
        </Row>
        <Row>
          <Switch checked label="Switch checked" name="switch checked" />
        </Row>
        <Row>
          <Switch disabled label="Switch disabled" name="switch disabled" />
        </Row>
      </Rows>
    </Section>
  ),
}


export const Sandbox: Story = {
  render: (args) => (
    <Section>
      <Rows>
        <Row>
          <Switch label="Classic switch" name="Classic switch" />
        </Row>
        <Row>
          <Switch {...args} />
        </Row>
      </Rows>
    </Section>
  ),
  args:{
    checked: false,
    disabled: false,
    label: "Sandbox",
    name: "sandbox",
    className: "sandbox",
    status: undefined,
  }
}
