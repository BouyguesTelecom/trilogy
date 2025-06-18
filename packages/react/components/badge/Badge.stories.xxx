import type { Meta, StoryObj } from '@storybook/react'
import { Columns } from '../columns'
import { Alignable, Column, Spacer, SpacerSize } from '../../lib'
import Badge from './Badge'
import { Text } from '../text'

const meta: Meta<typeof Badge> = {
  component: Badge,
  argTypes: {
    variant: {
      options: ['MAIN', 'ACCENT', 'INFO', 'ERROR', 'SUCCESS'],
      control: { type: 'inline-radio' },
    },
  }
}

export default meta

type Story = StoryObj<typeof Badge>


export const Variants: Story = {
  render: () => (
    <Columns align="ALIGNED_CENTER">
      <Column narrow align={Alignable.ALIGNED_CENTER}>
        <Badge label="1" variant={"MAIN"}/>
        <Text>Main</Text>
      </Column>
      <Column narrow align={Alignable.ALIGNED_CENTER}>
        <Badge label="2" variant="ACCENT" />
        <Text>Accent</Text>
      </Column>
      <Column narrow align={Alignable.ALIGNED_CENTER}>
        <Badge label="3" variant="INFO" />
        <Text>Info</Text>
      </Column>
      <Column narrow align={Alignable.ALIGNED_CENTER}>
        <Badge label="4" variant="ERROR" />
        <Text>Error</Text>
      </Column>
      <Column narrow align={Alignable.ALIGNED_CENTER}>
        <Badge label="5" variant="SUCCESS" />
        <Text>Success</Text>
      </Column>
    </Columns>
  ),
}

export const Sandbox: Story = {
  render: (args) => (
    <Columns align="ALIGNED_CENTER">
      <Column narrow align={Alignable.ALIGNED_CENTER}>
        <Badge {...args}/>
        <Spacer size={SpacerSize.FIVE}/>
        <Text>Variant : {args.variant}</Text>
      </Column>
    </Columns>
  ),
  args:{
    label: "1",
    testId: "testId",
    accessibilityLabel: "accessibilityLabel",
  }
}
