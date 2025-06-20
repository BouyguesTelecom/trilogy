import { Calendar, Column, Columns, Section, Text } from '@trilogy-ds/react/components'
import { DateValue } from '@trilogy-ds/react/components/calendar/CalendarProps'
import { useState } from 'react'

const minDate = new Date(2025, 9, 10)
const maxDate = new Date(2032, 11, 20)
const disabledDates = [new Date(2025, 10, 4), new Date(2025, 10, 10)]

export const CalendarScreen = (): JSX.Element => {
  const [value, setValue] = useState(new Date(2025, 10, 2))
  const [values, setValues] = useState<DateValue>([])

  return (
    <Section>
      <Columns align='ALIGNED_CENTER'>
        <Column narrow>
          <Text>Simple Calendar</Text>
          <Calendar
            onMonthChange={(e) => console.log(e)}
            onViewChange={(e) => console.log(e)}
            disabledDates={disabledDates}
            maxDate={maxDate}
            minDate={minDate}
            value={value}
            onChange={(e) => {
              console.log(e)
            }}
          />
        </Column>
        <Column narrow>
          <Text>Range Calendar</Text>
        </Column>
      </Columns>
    </Section>
  )
}
