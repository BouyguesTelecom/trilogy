import {
  Box,
  BoxContent,
  IconName,
  Price,
  Section,
  Spacer,
  SpacerSize,
  Sticker,
  TagVariant,
  VariantState,
} from '@trilogy-ds/react'

export const StickerScreen = (): JSX.Element => {
  return (
    <Section>
      <Sticker iconName={IconName.EYE} small label={'Sticker icon small'} variant={VariantState.ACCENT} />

      <Spacer size={SpacerSize.FOUR} />

      <Sticker iconName={IconName.EYE} label={'Sticker icon !'} variant={TagVariant.INFO} />

      <Spacer size={SpacerSize.FOUR} />

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
