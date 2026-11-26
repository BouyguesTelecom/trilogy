import { render, screen } from "@testing-library/react-native"
import { StyleSheet } from "react-native"

import { theme } from "../../../constants/theme"
import { CardFooter } from "./cardFooter.native"

const flat = (testId: string) =>
  StyleSheet.flatten(screen.getByTestId(testId).props.style)

it("renders its content with a default top border and md padding", async () => {
  await render(<CardFooter testId="footer">Footer</CardFooter>)
  expect(screen.getByText("Footer")).toBeTruthy()
  expect(flat("footer")).toMatchObject({
    borderTopWidth: theme.borderWidths.borderWidthSm,
    borderTopColor: theme.colors.light.borderPrimary,
    backgroundColor: theme.colors.light.backgroundPrimary,
    padding: theme.spacings.spacingMd,
  })
})

it("gives the top border the same color as the background", async () => {
  await render(
    <CardFooter testId="footer" background="secondary">
      Footer
    </CardFooter>
  )
  expect(flat("footer")).toMatchObject({
    backgroundColor: theme.colors.light.backgroundSecondary,
    borderTopColor: theme.colors.light.backgroundSecondary,
    borderTopWidth: theme.borderWidths.borderWidthSm,
  })
})

it.each([
  ["xxxl", theme.spacings.spacingXxxl],
  ["xs", theme.spacings.spacingXs],
  ["none", theme.spacings.spacingNone],
] as const)(
  "overrides only the padding with the %s token",
  async (padding, expected) => {
    await render(
      <CardFooter testId="footer" padding={padding}>
        Footer
      </CardFooter>
    )
    expect(flat("footer")).toMatchObject({
      padding: expected,
      borderTopWidth: theme.borderWidths.borderWidthSm,
    })
  }
)

it("keeps the caller style last", async () => {
  await render(
    <CardFooter
      testId="footer"
      background="secondary"
      style={{ borderTopColor: "red" }}
    >
      Footer
    </CardFooter>
  )
  expect(flat("footer").borderTopColor).toBe("red")
})
