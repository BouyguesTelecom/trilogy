import type { ComponentProps } from "react"

import { AlertStatus } from "./alert.types"
import { Alert } from "./alert.web"

type AlertArgs = ComponentProps<typeof Alert>
type AlertStory = { args?: AlertArgs }

const meta: {
  title: string
  component: typeof Alert
  args: AlertArgs
  argTypes: Record<string, { control: string; options: AlertStatus[] }>
} = {
  title: "Components/Alert",
  component: Alert,
  args: {
    children: "This is an alert message.",
  },
  argTypes: {
    status: {
      control: "select",
      options: Object.values(AlertStatus),
    },
  },
}

export default meta

export const Information: AlertStory = {
  args: { status: AlertStatus.information },
}

export const Success: AlertStory = {
  args: { status: AlertStatus.success, children: "Your changes were saved." },
}

export const Warning: AlertStory = {
  args: { status: AlertStatus.warning, children: "Review this information." },
}

export const Error: AlertStory = {
  args: { status: AlertStatus.error, children: "Something went wrong." },
}
