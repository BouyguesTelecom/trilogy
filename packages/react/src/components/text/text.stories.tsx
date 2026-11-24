import type { ComponentProps } from "react"

import { TextColor, TextFontWeight, TextSize } from "./text.types"
import { Text } from "./text.web"

type TextArgs = ComponentProps<typeof Text>
type TextStory = { args?: TextArgs }

const meta: {
  title: string
  component: typeof Text
  args: TextArgs
  argTypes: Record<string, { control: string; options?: (string | number)[] }>
} = {
  title: "Components/Text",
  component: Text,
  args: {
    children: "Texte Trilogy",
    size: TextSize.xxxxl,
  },
  argTypes: {
    size: { control: "select", options: Object.values(TextSize) },
    fontSize: { control: "select", options: Object.values(TextSize) },
    color: { control: "select", options: Object.values(TextColor) },
    fontWeight: { control: "select", options: Object.values(TextFontWeight) },
  },
}

export default meta

export const Default: TextStory = {}

export const SizeSMSecondary: TextStory = {
  args: {
    size: TextSize.sm,
    color: TextColor.secondary,
  },
}

export const BoldAccent: TextStory = {
  args: {
    color: TextColor.accent,
    fontWeight: TextFontWeight.bold,
  },
}

export const SizeOverride: TextStory = {
  args: { size: TextSize.xxxxl, fontSize: TextSize.sm },
}
