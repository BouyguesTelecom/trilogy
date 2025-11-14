import { Button, DatePicker, Section, Text } from '@trilogy-ds/react/components'

export const DatePickerScreen = (): JSX.Element => {
  return (
    <Section>
      <Text>Date picker</Text>
      <Button variant='CONVERSION'>Click me</Button>

      <DatePicker onChange={(e) => console.log(e)} />
    </Section>
  )
}
