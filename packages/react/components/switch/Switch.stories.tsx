import type { Meta, StoryObj } from '@storybook/react'
import { Switch, Step, Section, Rows, Row } from '../../lib'

const meta: Meta<typeof Switch> = {
  component: Switch,
  subcomponents: { Step },
}

export default meta

type Story = StoryObj<typeof Switch>


// @ts-ignore
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
