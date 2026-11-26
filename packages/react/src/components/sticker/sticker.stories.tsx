import type { ComponentProps } from "react"

import { BackgroundColors } from "../../interfaces/backgroundColors"
import { StickerSize } from "./sticker.types"
import { Sticker } from "./sticker.web"

type StickerArgs = ComponentProps<typeof Sticker>
type StickerStory = { args?: StickerArgs }

const meta: {
  title: string
  component: typeof Sticker
  args: StickerArgs
  argTypes: Record<string, { control: string; options?: (string | boolean)[] }>
} = {
  title: "Components/Sticker",
  component: Sticker,
  args: { children: "Information" },
  argTypes: {
    size: { control: "select", options: Object.values(StickerSize) },
    background: { control: "select", options: Object.values(BackgroundColors) },
  },
}

export default meta

export const Default: StickerStory = {}

export const Small: StickerStory = {
  args: { size: StickerSize.small },
}

export const Accent: StickerStory = {
  args: { background: BackgroundColors.accent, children: "Code Promo" },
}

export const LightBackground: StickerStory = {
  args: { background: BackgroundColors.warning, children: "Attention" },
}
