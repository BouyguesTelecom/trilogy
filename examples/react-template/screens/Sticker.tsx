import React from "react";
import {
  AutoLayout,
  Box,
  BoxContent,
  Section,
  Spacer,
  SpacerSize,
  Sticker,
} from "@trilogy-ds/react/components";
import { AlertState, VariantState } from "@trilogy-ds/react";

export const StickerScreen = (): JSX.Element => {
  return (
    <Section>
      <AutoLayout>
        <Sticker>Sticker</Sticker>
        <Sticker alert={AlertState.INFO}>Sticker</Sticker>
        <Sticker alert={AlertState.INFO} small>
          Sticker
        </Sticker>
        <Sticker variant={VariantState.ACCENT} small>
          Sticker
        </Sticker>
        <Sticker variant={VariantState.ACCENT} small>
          Sticker
        </Sticker>
        <Sticker alert={AlertState.INFO} small>
          Sticker
        </Sticker>
        <Sticker small>Small</Sticker>
        <Sticker>Sticker </Sticker>
        <Sticker small>Sticker</Sticker>
        <Sticker>Sticker </Sticker>
        <Sticker small>Sticker</Sticker>

        <Spacer size={SpacerSize.HUGE} />
        <Box hat>
          <Sticker hat>Labellaa</Sticker>
          <BoxContent></BoxContent>
        </Box>
      </AutoLayout>
    </Section>
  );
};
