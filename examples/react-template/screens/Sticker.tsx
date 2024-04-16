import React from 'react'
import {AutoLayout, Box, BoxContent, Section, Spacer, SpacerSize, Sticker} from '@trilogy-ds/react/components'
import {AlertState, VariantState} from "@trilogy-ds/react";

export const StickerScreen = (): JSX.Element => {
  return (
    <Section>
      <AutoLayout>
        <Sticker>Sticker</Sticker>
        <Sticker alert={AlertState.INFO}>Sticker</Sticker>
        <Sticker alert={AlertState.INFO} small>Sticker</Sticker>
        <Sticker variant={VariantState.PRIMARY} small>Sticker</Sticker>
        <Sticker variant={VariantState.SECONDARY} small>Sticker</Sticker>
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

        <Spacer size={SpacerSize.HUGE}/>
        <Box hat>
          <Sticker hat>Labellaa</Sticker>
          <BoxContent></BoxContent>
        </Box>
      </AutoLayout>
    </Section>
  )
}
