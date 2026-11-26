import { render, screen } from "@testing-library/react-native"
import { StyleSheet, Text } from "react-native"

import { Badge } from "../badge.native"
import { BadgeAnchor } from "./badgeAnchor.native"
import { BadgeAnchorPosition } from "./badgeAnchor.types"

const flat = (testId: string) =>
  StyleSheet.flatten(screen.getByTestId(testId).props.style)

it("wraps its children and hugs their size", async () => {
  await render(
    <BadgeAnchor testId="anchor" id="a">
      <Text>Avatar</Text>
    </BadgeAnchor>
  )
  expect(screen.getByText("Avatar")).toBeTruthy()
  expect(flat("anchor").alignSelf).toBe("flex-start")
  expect(screen.getByTestId("anchor").props.nativeID).toBe("a")
})

it("keeps the caller style last", async () => {
  await render(<BadgeAnchor testId="anchor" style={{ alignSelf: "center" }} />)
  expect(flat("anchor").alignSelf).toBe("center")
})

it("positions the badge on the top right corner by default", async () => {
  await render(
    <BadgeAnchor>
      <Text>Avatar</Text>
      <Badge testId="badge">5</Badge>
    </BadgeAnchor>
  )
  expect(flat("badge")).toMatchObject({
    position: "absolute",
    top: 0,
    right: 0,
    transform: [{ translateX: "25%" }, { translateY: "-25%" }],
  })
})

it.each([
  [BadgeAnchorPosition.topLeft, { top: 0, left: 0 }, "-25%", "-25%"],
  [BadgeAnchorPosition.bottomLeft, { bottom: 0, left: 0 }, "-25%", "25%"],
  [BadgeAnchorPosition.bottomRight, { bottom: 0, right: 0 }, "25%", "25%"],
] as const)(
  "positions the badge on the %s corner",
  async (position, edges, x, y) => {
    await render(
      <BadgeAnchor position={position}>
        <Badge testId="badge">5</Badge>
      </BadgeAnchor>
    )
    expect(flat("badge")).toMatchObject({
      position: "absolute",
      ...edges,
      transform: [{ translateX: x }, { translateY: y }],
    })
  }
)
