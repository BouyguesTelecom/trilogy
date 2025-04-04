import type { Meta, StoryObj } from '@storybook/react'
import Progress from './Progress'
import { Row, Rows, Section } from '@trilogy-ds/react'

const meta: Meta<typeof Progress> = {
  component: Progress,
}

export default meta

type Story = StoryObj<typeof Progress>


// @ts-ignore
export const Example: Story = {
  render: () => (
    <Section>
      <Rows>
        <Row>
          <Progress legendCenter="My unique legend" status="INFO" value={30} />
        </Row>
        <Row>
          <Progress legendEnd="5 Go" legendStart="0 Go" status="INFO" value={15} />
        </Row>
      </Rows>
    </Section>
  ),
}
