import {
  Box,
  BoxContent,
  Countdown,
  CountdownFormat,
  Section,
  Spacer,
  SpacerSize,
  TrilogyColor,
} from '@trilogy-ds/react'

export const CountdownScreen = (): JSX.Element => {
  return (
    <Section>
      <Box backgroundColor={TrilogyColor.MAIN}>
        <BoxContent>
          <Countdown inverted deadline={new Date('2023-12-24 18:00:00')} />
        </BoxContent>
      </Box>
      <Spacer size={SpacerSize.FOUR} />
      <Countdown small deadline={new Date('2024-09-28 18:00:00')} format={CountdownFormat.DAY_HOUR_MIN}></Countdown>
    </Section>
  )
}
