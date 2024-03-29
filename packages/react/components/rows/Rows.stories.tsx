import React from 'react'

import { Meta, Story } from '@storybook/react'
import { RowItem } from './index'
import { RowsItemProps } from './item/RowItemProps'
import { Columns, ColumnsItem } from '../columns'
import Rows from './Rows'

export default {
  title: 'Components/Rows',
  component: RowItem,
  subcomponents: { Rows },
} as Meta

export const Base: Story<RowsItemProps> = (args) => (
  <Columns>
    <ColumnsItem>
      <Rows>
        <RowItem {...args}>1</RowItem>
        <RowItem>2</RowItem>
        <RowItem>3</RowItem>
      </Rows>
    </ColumnsItem>
    <ColumnsItem>
      <Rows>
        <RowItem>4</RowItem>
        <RowItem>5</RowItem>
        <RowItem>6</RowItem>
      </Rows>
    </ColumnsItem>
  </Columns>
)
