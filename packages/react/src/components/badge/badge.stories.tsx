import type { ComponentProps, ReactElement } from "react"

import { BackgroundColors } from "../../interfaces/backgroundColors"
import { BadgeAnchorPosition } from "./anchor/badgeAnchor.types"
import { BadgeAnchor } from "./anchor/badgeAnchor.web"
import { BadgeSize } from "./badge.types"
import { Badge } from "./badge.web"

type BadgeArgs = ComponentProps<typeof Badge>
type BadgeStory = { args?: BadgeArgs; render?: () => ReactElement }

const meta: {
  title: string
  component: typeof Badge
  args: BadgeArgs
  argTypes: Record<string, { control: string; options?: string[] }>
} = {
  title: "Components/Badge",
  component: Badge,
  args: { children: "5" },
  argTypes: {
    size: { control: "select", options: Object.values(BadgeSize) },
    background: { control: "select", options: Object.values(BackgroundColors) },
  },
}

export default meta

export const Default: BadgeStory = {}

export const Small: BadgeStory = {
  args: { size: BadgeSize.small },
}

export const Error: BadgeStory = {
  args: { background: BackgroundColors.error, children: "99+" },
}

export const OnAnElement: BadgeStory = {
  render: () => (
    <BadgeAnchor position={BadgeAnchorPosition.topRight}>
      <span
        style={{
          display: "block",
          width: 48,
          height: 48,
          borderRadius: "50%",
          background: "#cbd5db",
        }}
      />
      <Badge background={BackgroundColors.error}>5</Badge>
    </BadgeAnchor>
  ),
}
