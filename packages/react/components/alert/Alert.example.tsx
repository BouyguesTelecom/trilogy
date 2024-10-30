import React from 'react'
import { Alert } from './index'
import { Columns, ColumnsItem } from '../columns'

const AlertExample: React.ReactNode =
<Columns multiline>
            <ColumnsItem size={6}>
            <Alert
              status='INFO'
              description='Lorem Ipsum is simply dummy text type and scrambled it to make a type specimen book..'
              display
              title='Alert information'
            />
            </ColumnsItem>
            <ColumnsItem size={6}>
            <Alert
              status='ERROR'
              description='Lorem Ipsum is simply dummy text type and scrambled it to make a type specimen book..'
              display
              title='Alert information'
            />
            </ColumnsItem>
            <ColumnsItem size={6}>
            <Alert
              status='SUCCESS'
              description='Lorem Ipsum is simply dummy text type and scrambled it to make a type specimen book..'
              display
              title='Alert information'
            />
            </ColumnsItem>
            <ColumnsItem size={6}>
            <Alert
              status='WARNING'
              description='Lorem Ipsum is simply dummy text type and scrambled it to make a type specimen book..'
              display
              title='Alert information'
            />
            </ColumnsItem>
        </Columns>

export default AlertExample