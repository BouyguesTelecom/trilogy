import { fireEvent, render, screen } from "@testing-library/react-native"
import { Text } from "react-native"

import { CardGroupAddOn } from "./cardGroupAddOn.native"

it.each([
  ["start", "flex-start"],
  ["center", "center"],
  ["end", "flex-end"],
] as const)("aligns %s", async (align, justifyContent) => {
  await render(
    <CardGroupAddOn testId="addon" align={align}>
      <Text>Badge</Text>
    </CardGroupAddOn>
  )
  expect(screen.getByTestId("addon")).toHaveStyle({
    justifyContent,
    alignItems: "center",
  })
  expect(screen.getByText("Badge")).toBeTruthy()
})

it("offsets half of its measured height so it straddles the card edge", async () => {
  await render(
    <CardGroupAddOn testId="addon">
      <Text>Badge</Text>
    </CardGroupAddOn>
  )
  await fireEvent(screen.getByTestId("addon"), "layout", {
    nativeEvent: { layout: { x: 0, y: 0, width: 100, height: 40 } },
  })
  expect(screen.getByTestId("addon")).toHaveStyle({
    marginTop: -20,
    marginBottom: -20,
  })
})

it("defaults to center and lets the caller style win", async () => {
  await render(
    <CardGroupAddOn testId="addon" style={{ zIndex: 5 }}>
      <Text>Badge</Text>
    </CardGroupAddOn>
  )
  expect(screen.getByTestId("addon")).toHaveStyle({
    justifyContent: "center",
    zIndex: 5,
  })
})
