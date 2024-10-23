import React from 'react'
import { Icon } from './index'
import { Columns, ColumnsItem } from '@/lib'

const IconExample: React.ReactNode = (
  <Columns>
    <ColumnsItem>
      <Icon name='tri-search' size='medium' status='SUCCESS' />
    </ColumnsItem>
    <ColumnsItem>
      <Icon name='tri-check' size='medium' status='SUCCESS' statusPosition='top' />
    </ColumnsItem>
    <ColumnsItem>
      <Icon name='tri-bell' size='medium' status='SUCCESS' statusPosition='bottom' />
    </ColumnsItem>
  </Columns>
)
export default IconExample
