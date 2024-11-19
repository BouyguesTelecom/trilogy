import { Countdown, CountdownFormat, Section, Spacer, SpacerSize } from '@trilogy-ds/react/components'
import * as React from 'react'

export const CountdownScreen = (): JSX.Element => {
  return (
    <Section>
      <Countdown deadline={new Date('2025-12-24 20:00:00')}></Countdown>
      <Spacer size={SpacerSize.FOUR} />
      <Countdown
        inverted
        small
        deadline={new Date('2025-12-24 20:00:00')}
        format={CountdownFormat.DAY_HOUR_MIN}
      ></Countdown>
    </Section>
  )
}
