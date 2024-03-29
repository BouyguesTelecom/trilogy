import React from 'react'
import { Section, AutoLayout, Sticker, Box, BoxContent, Spacer, SpacerSize } from '@trilogy-ds/react/components'

export const StickerScreen = (): JSX.Element => {
  return (
    <Section>
      <AutoLayout>
        <Sticker>Sticker</Sticker>
        <Sticker small>Small</Sticker>
        <Sticker outlined>Outlined</Sticker>
        <Sticker flag>Sticker flag</Sticker>
        <Sticker flag small>
          Sticker flag
        </Sticker>
        <Sticker flag outlined>
          Sticker flag outlined
        </Sticker>
        <Sticker flag outlined small>
          Sticker flag outlined
        </Sticker>

        <Spacer size={SpacerSize.HUGE} />
        <Box hat>
          <Sticker hat>Labellaa</Sticker>
          <BoxContent></BoxContent>
        </Box>
      </AutoLayout>
    </Section>
  )
}
