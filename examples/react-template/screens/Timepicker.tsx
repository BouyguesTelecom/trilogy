import { Section, Spacer, Text, TimepickerCircular, View } from '@trilogy-ds/react/components'
import { useState } from 'react'

export const TimepickerScreen = (): JSX.Element => {
  const [hours, setHours] = useState(5)
  const [minutes, setMinutes] = useState(45)

  const handleTimeChange = (newHours: number, newMinutes: number) => {
    setHours(newHours)
    setMinutes(newMinutes)
    console.log(`Time changed: ${newHours.toString().padStart(2, '0')}:${newMinutes.toString().padStart(2, '0')}`)
  }

  return (
    <Section>
      <View>
        <Text>Limite quotidienne du mardi</Text>

        <Spacer size={24} />

        <TimepickerCircular
          hours={hours}
          minutes={minutes}
          onChange={handleTimeChange}
          hoursLabel="Heures"
          minutesLabel="Min"
          step={5}
        />

        <Spacer size={24} />

        <Text>
          Temps sélectionné : {hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}
        </Text>
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
