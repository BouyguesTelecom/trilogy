import * as React from 'react'
import {
  Box,
  BoxContent,
  Countdown,
  CountdownFormat,
  Section,
  Spacer,
  SpacerSize,
  BackgroundColor,
} from '@trilogy-ds/react'

export default function CountdownScreen(): JSX.Element {
  return (
    <Section>
      <Box backgroundColor={BackgroundColor.PRIMARY}>
        <BoxContent>
          <Countdown deadline={new Date('2026-05-24 18:00:00')} />
        </BoxContent>
      </Box>
      <Spacer size={SpacerSize.FOUR} />
      <Countdown small deadline={new Date('2026-05-24 18:00:00')} format={CountdownFormat.DAY_HOUR_MIN}></Countdown>
    </Section>
  )
}
