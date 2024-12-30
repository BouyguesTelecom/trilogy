import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import Row from './row'
import { RowProps } from './row/RowProps'
import Rows from './Rows'
import { Column, Columns } from '../columns'
import { RangeProps } from '../range/RangeProps'
import { Range } from '../range'

const meta = {
  title: 'Components/Rows',
  component: Row,
  subcomponents: { Rows },
} satisfies Meta<RowProps>

export default meta
type Story = StoryObj<typeof meta>

const Template = (args: RowProps) => (
  <Columns>
    <Column>
      <Rows>
        <Row {...args}>1</Row>
        <Row>2</Row>
        <Row>3</Row>
      </Rows>
    </Column>
    <Column>
      <Rows>
        <Row>4</Row>
        <Row>5</Row>
        <Row>6</Row>
      </Rows>
    </Column>
  </Columns>
)

export const Base: Story = {
  render: Template,
}
