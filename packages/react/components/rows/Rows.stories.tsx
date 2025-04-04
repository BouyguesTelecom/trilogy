import type { Meta, StoryObj } from '@storybook/react'
import Rows from './Rows'
import { Column, Columns, Row, Section } from '@trilogy-ds/react'

const meta: Meta<typeof Rows> = {
  component: Rows,
}

export default meta

type Story = StoryObj<typeof Rows>


// @ts-ignore
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
