import { Section, Spacer, Text, Timepicker, View } from '@trilogy-ds/react/components'
import { useState } from 'react'

export const TimepickerScreen = (): JSX.Element => {
  const [time, setTime] = useState('05:40')
  const [timeCircular, setTimeCircular] = useState('05:40')

  const handleTimeChange = (newTime: string) => {
    setTime(newTime)
    console.log(`Time changed: ${newTime}`)
  }

  return (
    <Section>
      <View>
        <Text>Limite quotidienne du mardi</Text>

        <Spacer size={24} />

        <Text>Timepicker circular</Text>

        <Spacer size={16} />

        <Timepicker circular value={time} onChange={handleTimeChange} step={10} />

        <Spacer size={16} />

        <Text>Timepicker classic</Text>

        <Spacer size={24} />

        <Timepicker value={timeCircular} onChange={setTimeCircular} step={10} />

        <Spacer size={24} />

        <Text>Temps sélectionné : {time}</Text>
      </View>
    </Section>
  )
}
