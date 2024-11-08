import { Box, BoxContent, Section, Spacer, SpacerSize, Sticker } from '@trilogy-ds/react/components'
import { Price, VariantState } from '@trilogy-ds/react'

export const StickerScreen = (): JSX.Element => {
  return (
    <Section>
      <Sticker label='Sticker' />
      <Sticker variant={VariantState.ACCENT} label='Sticker' />
      <Sticker variant={VariantState.INFO} label='Sticker' />

      <Spacer size={SpacerSize.SIX} horizontal />

      <Sticker label='Sticker' small />
      <Sticker variant={VariantState.ACCENT} label='Sticker' small />
      <Sticker variant={VariantState.INFO} label='Sticker' small />

      <Spacer size={SpacerSize.SIX} />

      <Box>
        <Sticker label='PROMO' variant={VariantState.ACCENT} />
        <BoxContent>
          <Price amount={100} />
        </BoxContent>
      </Box>
    </Section>
  )
}
