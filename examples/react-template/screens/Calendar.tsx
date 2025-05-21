import { Calendar, Column, Columns, Section, Text } from '@trilogy-ds/react/components'
import React, { useState } from 'react'

export const CalendarScreen = (): JSX.Element => {
  const [value, setValue] = useState(new Date(2025, 10, 2))
  return (
    <Section>
      <Columns>
        <Column narrow>
          <Calendar
            value={value}
            onChange={(e) => {
              console.log(e)
            }}
          />
        </Column>
        <Column>
          <Text>Date sélectionnée : {JSON.stringify(value, null, 2)}</Text>
        </Column>
      </Columns>
    </Section>
  )
}
