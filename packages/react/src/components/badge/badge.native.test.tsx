import { render, screen } from "@testing-library/react-native"
import { StyleSheet, View } from "react-native"

import { theme } from "../../constants/theme"
import { TrilogyContextProvider } from "../../contexts/trilogyContext.native"
import { Badge } from "./badge.native"
import { BadgeSize } from "./badge.types"

const flat = (testId: string) =>
  StyleSheet.flatten(screen.getByTestId(testId).props.style)
const textStyle = (text: string) =>
  StyleSheet.flatten(screen.getByText(text).props.style)

it("renders a fixed 24px secondary pill with inverse text by default", async () => {
  await render(<Badge testId="badge">5</Badge>)
  expect(flat("badge")).toMatchObject({
    height: theme.spacings.spacingLg,
    minWidth: theme.spacings.spacingLg,
    paddingHorizontal: theme.spacings.spacingXxs,
    borderRadius: theme.radius.radiusFull,
    backgroundColor: theme.colors.light.backgroundSecondary,
    flexDirection: "row",
    alignSelf: "flex-start",
  })
  expect(flat("badge").position).toBeUndefined()
  expect(textStyle("5")).toMatchObject({
    color: theme.colors.light.colorInverse,
    fontSize: theme.fonts.fontSizeSm,
    fontWeight: String(theme.fonts.fontWeightBold),
  })
})

it("never wraps the text", async () => {
  await render(<Badge>99+</Badge>)
  expect(screen.getByText("99+").props.numberOfLines).toBe(1)
})

it("renders the small size with its own fixed height", async () => {
  await render(
    <Badge testId="badge" size={BadgeSize.small}>
      1
    </Badge>
  )
  expect(flat("badge")).toMatchObject({
    height: theme.sizes.sizeXs,
    minWidth: theme.sizes.sizeXs,
  })
  expect(textStyle("1").fontSize).toBe(theme.fonts.fontSizeXs)
})

it.each([
  ["error", theme.colors.light.colorInverse],
  ["warning", theme.colors.light.colorInverse],
  ["brand", theme.colors.light.colorPrimary],
] as const)(
  "uses the %s background and the readable text color",
  async (background, color) => {
    await render(
      <Badge testId="badge" background={background}>
        1
      </Badge>
    )
    const key =
      `background${background[0].toUpperCase()}${background.slice(1)}` as keyof typeof theme.colors.light
    expect(flat("badge").backgroundColor).toBe(theme.colors.light[key])
    expect(textStyle("1").color).toBe(color)
  }
)

it("resolves the background and the text color in the dark mode", async () => {
  await render(
    <TrilogyContextProvider mode="dark">
      <Badge testId="badge" background="success">
        1
      </Badge>
    </TrilogyContextProvider>
  )
  expect(flat("badge").backgroundColor).toBe(
    theme.colors.dark.backgroundSuccess
  )
  expect(textStyle("1").color).toBe(theme.colors.dark.colorInverse)
})

it("renders non-text children as they are", async () => {
  await render(
    <Badge>
      <View testID="icon" />
    </Badge>
  )
  expect(screen.getByTestId("icon")).toBeTruthy()
})

it("sets the native id and keeps the caller style last", async () => {
  await render(
    <Badge testId="badge" id="b" style={{ backgroundColor: "red" }}>
      1
    </Badge>
  )
  expect(screen.getByTestId("badge").props.nativeID).toBe("b")
  expect(flat("badge").backgroundColor).toBe("red")
})
