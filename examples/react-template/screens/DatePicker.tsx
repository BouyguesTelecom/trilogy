import { Button, DatePicker, Section, Text } from '@trilogy-ds/react/components'
import { useState } from 'react'

export const DatePickerScreen = (): JSX.Element => {
  const [date, setDate] = useState(new Date())
  return (
    <Section>
      <Text>Date picker</Text>
      <Button
        variant='CONVERSION'
        onClick={() => {
          setDate(new Date('2025-12-10'))
        }}
      >
        Set Date 2025-12-10
      </Button>

      <DatePicker onChange={(e) => console.log(e)} value={date} />
    </Section>
  )
}
