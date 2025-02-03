import * as React from "react";

import { Meta, Story } from "@storybook/react";

import { Sticker } from "./index";
import { StickerProps } from "./StickerProps";
import { VariantState } from "../../objects";

export default {
  title: "Components/Sticker",
  component: Sticker,
} as Meta;

export const Base: Story<StickerProps> = (args) => (
  <Sticker {...args}> Code promo </Sticker>
);
Base.args = {
  variant: VariantState.MAIN,
};
export const Small: Story<StickerProps> = (args) => (
  <Sticker {...args}> Code promo </Sticker>
);
Small.args = {
  variant: VariantState.MAIN,
  small: true,
};
