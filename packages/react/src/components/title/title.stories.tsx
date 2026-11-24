import type { ComponentProps } from "react"

import { TitleColor, TitleFontWeight, TitleSize } from "./title.types"
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
    size: TitleSize.xxxxl,
  },
  argTypes: {
    size: { control: "select", options: Object.values(TitleSize) },
    color: { control: "select", options: Object.values(TitleColor) },
    fontWeight: { control: "select", options: Object.values(TitleFontWeight) },
  },
}

export default meta

export const SizeXXXXL: TitleStory = {}

export const SizeXXLAccent: TitleStory = {
  args: {
    size: TitleSize.xxl,
    color: TitleColor.accent,
    fontWeight: TitleFontWeight.bold,
  },
}

export const AllSizes: TitleStory = {
  args: {
    children: "Les tailles sont disponibles avec la propriété size.",
  },
}

