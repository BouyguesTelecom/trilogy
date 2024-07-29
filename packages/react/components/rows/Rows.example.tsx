import React from 'react'
import { RowItem, Rows } from './index'
import { Columns, ColumnsItem } from '@/components/columns'

const RowsExample: React.ReactNode =
  <Columns>
    <ColumnsItem>
      <Rows>
        <RowItem>
          1
        </RowItem>
        <RowItem>
          2
        </RowItem>
        <RowItem>
          3
        </RowItem>
      </Rows>
    </ColumnsItem>
    <ColumnsItem>
      <Rows>
        <RowItem>
          4
        </RowItem>
        <RowItem>
          5
        </RowItem>
        <RowItem>
          6
        </RowItem>
      </Rows>
    </ColumnsItem>
  </Columns>
export default RowsExample;
