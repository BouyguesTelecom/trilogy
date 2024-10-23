import React from 'react'
import { Columns, ColumnsItem } from './index'
import { Title } from '@/components/title'
import { Box } from '@/components/box'

const ColumnsExample: React.ReactNode = <Columns>
  <ColumnsItem>
    <Box flat>
      <Title level='TWO'>
        Column
      </Title>
    </Box>
  </ColumnsItem>
  <ColumnsItem>
    <Box flat>
      <Title level='TWO'>
        Column
      </Title>
    </Box>
  </ColumnsItem>
  <ColumnsItem>
    <Box flat>
      <Title level='TWO'>
        Column
      </Title>
    </Box>
  </ColumnsItem>
</Columns>

export default ColumnsExample