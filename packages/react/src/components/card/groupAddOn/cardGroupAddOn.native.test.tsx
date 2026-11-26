import { render, screen } from "@testing-library/react-native"
import { Text } from "react-native"

import { CardGroupAddOn } from "./cardGroupAddOn.native"

it.each([
  ["start", "flex-start"],
  ["center", "center"],
  ["end", "flex-end"],
] as const)(
  "aligns %s without taking vertical space",
  async (align, justifyContent) => {
    await render(
      <CardGroupAddOn testId="addon" align={align}>
        <Text>Badge</Text>
      </CardGroupAddOn>
    )
    expect(screen.getByTestId("addon")).toHaveStyle({
      justifyContent,
      height: 0,
      alignItems: "center",
    })
    expect(screen.getByText("Badge")).toBeTruthy()
  }
)

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
