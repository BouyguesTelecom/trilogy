import type { ComponentProps } from "react"

import { TitleColor, TitleFontWeight, TitleLevel } from "./title.types"
import { Title } from "./title.web"

type TitleArgs = ComponentProps<typeof Title>
type TitleStory = { args?: TitleArgs }

const meta: {
  title: string
  component: typeof Title
  args: TitleArgs
  argTypes: Record<string, { control: string; options?: (string | number)[] }>
} = {
  title: "Components/Title",
  component: Title,
  args: {
    children: "Titre Trilogy",
    level: TitleLevel.one,
    color: TitleColor.primary,
  },
  argTypes: {
    level: { control: "select", options: [1, 2, 3, 4, 5, 6] },
    color: { control: "select", options: Object.values(TitleColor) },
    fontWeight: { control: "select", options: Object.values(TitleFontWeight) },
  },
}

export default meta

export const LevelOne: TitleStory = {}

export const LevelThreeAccent: TitleStory = {
  args: {
    level: TitleLevel.three,
    color: TitleColor.accent,
    fontWeight: TitleFontWeight.bold,
  },
}

export const AllLevels: TitleStory = {
  args: {
    children: "Les six niveaux sont disponibles via la propriété level.",
  },
}
