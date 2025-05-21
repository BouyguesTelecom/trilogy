import { Calendar, Column, Columns, Section } from '@trilogy-ds/react/components'
import React, { useState } from 'react'

export const CalendarScreen = (): JSX.Element => {
  const [value, setValue] = useState(new Date(2025, 10, 2))
  return (
    <Section>
      <Columns align='ALIGNED_CENTER'>
        <Column narrow>
          <Calendar
            value={value}
            onChange={(e) => {
              console.log(e)
            }}
          />
        </Column>
      </Columns>
    </Section>
  )
}
