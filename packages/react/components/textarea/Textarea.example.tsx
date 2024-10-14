import React from 'react'
import { Textarea } from './index'
import { Columns, ColumnsItem } from '../columns'

const TextareaExample: React.ReactNode =

  <Columns>
      <ColumnsItem>
        <Textarea
          label='Label dynamique'
          maxLength={150}
          placeholder='placeholder'
        />
      </ColumnsItem>
      <ColumnsItem>
        <Textarea
          disabled
          label='Label dynamique'
          placeholder='placeholder'
        />
      </ColumnsItem>
      <ColumnsItem>
        <Textarea
          iconName='tri-alert'
          label='Label dynamique'
          placeholder='placeholder'
        />
      </ColumnsItem>
    </Columns>

export default TextareaExample
