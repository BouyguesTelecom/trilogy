import { Badge, BadgeAnchor } from "@trilogy-ds/react"

import { IconCamera, ScrollView } from "../components"
import { Wrapper } from "../components/wrapper"

export default function BadgeScreen() {
  return (
    <ScrollView>
      <Wrapper title="Default">
        <Badge>5</Badge>
        <Badge background="error">New</Badge>
        <Badge background="accent">99+</Badge>
        <Badge background="warning">3</Badge>
        <Badge background="brand">1</Badge>
      </Wrapper>

      <Wrapper title="Small">
        <Badge size="small">5</Badge>
        <Badge size="small" background="error">
          New
        </Badge>
        <Badge size="small" background="success-subtle">
          99+
        </Badge>
      </Wrapper>

      <Wrapper title="Icon">
        <Badge background="information">
          <IconCamera />
        </Badge>
      </Wrapper>

      <Wrapper title="Anchor">
        <BadgeAnchor>
          <IconCamera />
          <Badge background="error" size="small">
            5
          </Badge>
        </BadgeAnchor>
        <BadgeAnchor position="top-left">
          <IconCamera />
          <Badge background="accent" size="small">
            New
          </Badge>
        </BadgeAnchor>
        <BadgeAnchor position="bottom-left">
          <IconCamera />
          <Badge background="success" size="small">
            1
          </Badge>
        </BadgeAnchor>
        <BadgeAnchor position="bottom-right">
          <IconCamera />
          <Badge background="information" size="small">
            99+
          </Badge>
        </BadgeAnchor>
      </Wrapper>
    </ScrollView>
  )
}
