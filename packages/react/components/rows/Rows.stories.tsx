import * as React from 'react'

import { Meta, Story } from '@storybook/react'
import { Row } from './index'
import { RowProps } from './row/RowProps'
import { Column, Columns } from '../columns'
import Rows from './Rows'

export default {
  title: 'Components/Rows',
  component: Row,
  subcomponents: { Rows },
} as Meta

export const Base: Story<RowProps> = (args) => (
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
