import type { ComponentProps } from "react"

import { TextColor, TextFontWeight, TextLevel } from "./text.types"
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
    level: TextLevel.one,
    color: TextColor.primary,
    fontWeight: TextFontWeight.regular,
  },
  argTypes: {
    level: { control: "select", options: [1, 2, 3, 4, 5, 6] },
    color: { control: "select", options: Object.values(TextColor) },
    fontWeight: { control: "select", options: Object.values(TextFontWeight) },
  },
}

export default meta

export const Default: TextStory = {}

export const LevelSixSecondary: TextStory = {
  args: {
    level: TextLevel.six,
    color: TextColor.secondary,
  },
}

export const BoldAccent: TextStory = {
  args: {
    color: TextColor.accent,
    fontWeight: TextFontWeight.bold,
  },
}
