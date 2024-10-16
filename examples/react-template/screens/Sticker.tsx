import {
  AutoLayout,
  Box,
  BoxContent,
  Section,
  Spacer,
  SpacerSize,
  Sticker,
} from "@trilogy-ds/react/components";
import {Price, VariantState} from "@trilogy-ds/react";

export const StickerScreen = (): JSX.Element => {
  return (
    <Section>
      <Sticker>Sticker</Sticker>
      <Sticker variant={"ACCENT"}>Sticker</Sticker>
      <Sticker variant={"INFO"}>Sticker</Sticker>
      <Spacer size={SpacerSize.SIX} horizontal/>
      <Sticker variant={VariantState.ACCENT} small>
        Sticker
      </Sticker>
      <Sticker variant={VariantState.INFO} small>
        Sticker
      </Sticker>
      <Sticker variant={VariantState.MAIN} small>
        Sticker
      </Sticker>
      <Spacer size={SpacerSize.SIX}/>
      <Box hat>
        <Sticker hat>Im a sticker hat</Sticker>
        <BoxContent>
          <Price amount={100}/>
        </BoxContent>
      </Box>
    </Section>
  );
};
