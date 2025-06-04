import type { Meta, StoryObj } from '@storybook/react'
import Progress from './Progress'
import { Alignable, Row, Rows, Section } from '@trilogy-ds/react'
import { Column, Columns } from '../../lib'

const meta: Meta<typeof Progress> = {
  component: Progress,
  argTypes: {
    status: {
      options: ['INFO', 'ERROR', 'SUCCESS'],
      control: { type: 'inline-radio' },
    },
    legendStart: {
      control: { type: 'text' },
    },
    legendEnd: {
      control: { type: 'text' },
    },
    value: {
      control: { type: 'number' },
    },
    max: {
      control: { type: 'number' },
    },
  },
}

export default meta

type Story = StoryObj<typeof Progress>


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


export const Sandbox: Story = {
  render: (args) => (
    <Section>
      <Columns align={Alignable.ALIGNED_CENTER}>
        <Column size={10} align={Alignable.ALIGNED_CENTER}>
          <Progress {...args}/>
        </Column>
      </Columns>
    </Section>
  ),
  args:{
    legendStart: "0 Go",
    legendEnd: "5 Go",
    status: "INFO",
    value: 50,
    max: 100,
    small: false,
    legendCenter: "My centered legend",
    stacked: false,
  }
}
