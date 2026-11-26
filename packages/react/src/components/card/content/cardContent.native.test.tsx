import { render, screen } from "@testing-library/react-native"
import { StyleSheet } from "react-native"

import { theme } from "../../../constants/theme"
import { CardContent } from "./cardContent.native"

it("renders content and themed background", async () => {
  await render(
    <CardContent background="secondary" testId="content">
      Content
    </CardContent>
  )
  expect(screen.getByTestId("content")).toHaveStyle({
    backgroundColor: theme.colors.light.backgroundSecondary,
  })
  expect(screen.getByText("Content")).toBeTruthy()
})

it("keeps the md padding without helper", async () => {
  await render(<CardContent testId="content">Content</CardContent>)
  const style = StyleSheet.flatten(screen.getByTestId("content").props.style)
  expect(style.padding).toBe(theme.spacings.spacingMd)
})

it.each([
  ["xxxl", theme.spacings.spacingXxxl],
  ["md", theme.spacings.spacingMd],
  ["xs", theme.spacings.spacingXs],
  ["none", theme.spacings.spacingNone],
] as const)(
  "overrides only the padding with the %s token",
  async (padding, expected) => {
    await render(
      <CardContent testId="content" padding={padding}>
        Content
      </CardContent>
    )
    const style = StyleSheet.flatten(screen.getByTestId("content").props.style)
    expect(style.padding).toBe(expected)
    expect(style.backgroundColor).toBe(theme.colors.light.backgroundPrimary)
  }
)

it("keeps the caller style after the padding helper", async () => {
  await render(
    <CardContent testId="content" padding="sm" style={{ padding: 3 }}>
      Content
    </CardContent>
  )
  const style = StyleSheet.flatten(screen.getByTestId("content").props.style)
  expect(style.padding).toBe(3)
})
