import { Button, Calendar, Column, Columns, Section, Text } from '@trilogy-ds/react/components'
import { ChangeEventCalendar } from '@trilogy-ds/react/components/calendar/CalendarProps'
import { useState } from 'react'

const minDate = new Date(2025, 9, 10)
const maxDate = new Date(2032, 11, 20)
const disabledDates = [new Date(2025, 10, 4), new Date(2025, 10, 10)]

export const CalendarScreen = (): JSX.Element => {
  const [value, setValue] = useState<ChangeEventCalendar>(new Date(2025, 10, 30))
  const [values, setValues] = useState<ChangeEventCalendar>([])

  return (
    <Section>
      <Columns align='ALIGNED_CENTER'>
        <Column narrow>
          <Text>Simple Calendar</Text>
          <Button onClick={() => setValue(new Date(2025, 9, 11))} variant='CONVERSION'>
            Set Date {new Date(2025, 9, 11).toLocaleDateString()}
          </Button>
          <Calendar
            onMonthChange={(e) => console.log(e)}
            disabledDates={disabledDates}
            maxDate={maxDate}
            minDate={minDate}
            value={value}
            onChange={(e) => {
              setValue(e)
            }}
          />
        </Column>
        <Column narrow>
          <Text>Range Calendar</Text>
          <Button onClick={() => setValues([new Date(2025, 9, 11), new Date(2025, 9, 20)])} variant='CONVERSION'>
            Set Date [{new Date(2025, 9, 11).toLocaleDateString()}, {new Date(2025, 9, 20).toLocaleDateString()} ]
          </Button>
          <Calendar
            value={values}
            onChange={(e) => {
              setValues(e)
            }}
          />
        </Column>
      </Columns>
    </Section>
  )
}
