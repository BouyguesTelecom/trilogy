import type { Meta, StoryObj } from '@storybook/react'
import Rows from './Rows'
import { Column, Columns, Row, Section } from '@trilogy-ds/react'

const meta: Meta<typeof Rows> = {
  component: Rows,
  argTypes:{
    gap: {
      control: { type: 'range', min: 0, max: 10, step: 1 },
    },
    className: {
      control: { type: 'text' },
    },
    children: {
      control: { type: 'text' },
    },
  }
}

export default meta

type Story = StoryObj<typeof Rows>


export const Example: Story = {
  render: () => (
    <Section>
      <Columns>
        <Column>
          <Rows>
            <Row> 1 </Row>
            <Row> 2 </Row>
            <Row> 3 </Row>
          </Rows>
        </Column>
        <Column>
          <Rows>
            <Row> 4 </Row>
            <Row> 5 </Row>
            <Row> 6 </Row>
          </Rows>
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
          <Rows gap={args.gap}>
            <Row> Classic row </Row>
            <Row> Classic row </Row>
            <Row> Classic row </Row>
          </Rows>
        </Column>
        <Column>
          <Rows gap={args.gap}>
            <Row {...args}/>
            <Row {...args}/>
            <Row {...args}/>
          </Rows>
        </Column>
      </Columns>
    </Section>
  ),
  args:{
    className: `sandbox-row has-background-main has-text-white`,
    children: "Sandbox row",
    gap: 5,
  }
}
