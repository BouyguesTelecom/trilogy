import { Calendar, Column, Columns, Section } from '@trilogy-ds/react/components'
import { useState } from 'react'

const minDate = new Date(2025, 9, 10)
const maxDate = new Date(2025, 11, 20)
const disabledDates = [new Date(2025, 10, 4), new Date(2025, 10, 10)]

export const CalendarScreen = (): JSX.Element => {
  const [value, setValue] = useState(new Date(2025, 10, 2))
  return (
    <Section>
      <Columns align='ALIGNED_CENTER'>
        <Column narrow>
          <Calendar
            disabledDates={disabledDates}
            maxDate={maxDate}
            minDate={minDate}
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
