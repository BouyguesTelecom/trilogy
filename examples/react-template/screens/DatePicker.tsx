import { Button, DatePicker, Section, Text } from '@trilogy-ds/react/components'
import { useState } from 'react'

export const DatePickerScreen = (): JSX.Element => {
  const [date, setDate] = useState<string | null>(null)

  return (
    <Section>
      <Text>Date picker</Text>
      <Button
        variant='CONVERSION'
        onClick={() => {
          setDate('2025-12-10')
        }}
      >
        Set Date 2025-12-10
      </Button>

      <DatePicker
        maxDate='2025-12-24'
        minDate='2025-12-01'
        data-cy='birthday'
        onChange={(e) => {
          setDate(e)
          console.log(e)
        }}
        value={date}
        label='Input label without accessibilityLabel'
        sample='Input sample'
        help='Search helper input'
        required
      />
      <input type='date' onChange={(e) => console.log(e.target.value)} />
    </Section>
  )
}
