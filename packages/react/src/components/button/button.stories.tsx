import type { ComponentProps } from "react"

import { ButtonVariant } from "./button.types"
import { Button } from "./button.web"

type ButtonArgs = ComponentProps<typeof Button>
type ButtonStory = { args?: ButtonArgs }

const meta: {
  title: string
  component: typeof Button
  args: ButtonArgs
  argTypes: Record<string, { control: string; options?: ButtonVariant[] }>
} = {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Button",
    variant: ButtonVariant.primary,
    disabled: false,
    fullwidth: false,
  },
  argTypes: {
    variant: {
      control: "select",
      options: Object.values(ButtonVariant),
    },
    disabled: { control: "boolean" },
    fullwidth: { control: "boolean" },
  },
}

export default meta

export const Primary: ButtonStory = {}

export const Secondary: ButtonStory = {
  args: { variant: ButtonVariant.secondary },
}

export const Ghost: ButtonStory = {
  args: { variant: ButtonVariant.ghost },
}

export const Conversion: ButtonStory = {
  args: { variant: ButtonVariant.conversion },
}

export const Disabled: ButtonStory = {
  args: { disabled: true },
}
