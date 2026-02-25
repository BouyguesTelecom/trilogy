import { Section, Spacer, Text, Timepicker, View } from '@trilogy-ds/react/components'
import { useState } from 'react'

export const TimepickerScreen = (): JSX.Element => {
  const [time, setTime] = useState('05:45')

  const handleTimeChange = (newTime: string) => {
    setTime(newTime)
    console.log(`Time changed: ${newTime}`)
  }

  return (
    <Section>
      <View>
        <Text>Limite quotidienne du mardi</Text>

        <Spacer size={24} />

        <Timepicker circular value={time} onChange={handleTimeChange} step={10} />
        <Timepicker />

        <Spacer size={24} />

        <Text>Temps sélectionné : {time}</Text>
      </View>
      {/*
      <Spacer size={48} />

      <View>
        <Text>TimepickerCircular avec taille personnalisée</Text>

        <Spacer size={24} />

        <TimepickerCircular
          hours={12}
          minutes={30}
          size={200}
          thickness={40}
          onChange={(h, m) => console.log(`Custom size picker: ${h}:${m}`)}
        />
      </View>

      <Spacer size={48} />

      <View>
        <Text>TimepickerCircular désactivé</Text>

        <Spacer size={24} />

        <TimepickerCircular
          hours={8}
          minutes={15}
          disabled
        />
      </View> */}
    </Section>
  )
}
