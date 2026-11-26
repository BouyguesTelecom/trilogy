import { render, screen } from "@testing-library/react-native"
import { StyleSheet, View } from "react-native"

import { theme } from "../../constants/theme"
import { TrilogyContextProvider } from "../../contexts/trilogyContext.native"
import { Sticker } from "./sticker.native"
import { StickerSize } from "./sticker.types"

const flat = (testId: string) =>
  StyleSheet.flatten(screen.getByTestId(testId).props.style)
const textStyle = (text: string) =>
  StyleSheet.flatten(screen.getByText(text).props.style)

it("renders a fixed 32px secondary pill with inverse text by default", async () => {
  await render(<Sticker testId="sticker">Promo</Sticker>)
  expect(flat("sticker")).toMatchObject({
    height: theme.sizes.sizeSm,
    paddingHorizontal: theme.spacings.spacingMd,
    gap: theme.spacings.spacingXs,
    borderRadius: theme.radius.radiusFull,
    backgroundColor: theme.colors.light.backgroundSecondary,
    flexDirection: "row",
    alignSelf: "flex-start",
  })
  expect(textStyle("Promo")).toMatchObject({
    color: theme.colors.light.colorInverse,
    fontSize: theme.fonts.fontSizeBase,
    fontWeight: String(theme.fonts.fontWeightBold),
  })
})

it("never wraps the text", async () => {
  await render(<Sticker>Promo</Sticker>)
  expect(screen.getByText("Promo").props.numberOfLines).toBe(1)
})

it("renders the small size with its own fixed height", async () => {
  await render(
    <Sticker testId="sticker" size={StickerSize.small}>
      Promo
    </Sticker>
  )
  expect(flat("sticker")).toMatchObject({
    height: theme.spacings.spacingLg,
    paddingHorizontal: theme.spacings.spacingSm,
    gap: theme.spacings.spacingXxs,
  })
  expect(textStyle("Promo").fontSize).toBe(theme.fonts.fontSizeXs)
})

it.each([
  ["secondary", theme.colors.light.colorInverse],
  ["accent", theme.colors.light.colorInverse],
  ["warning", theme.colors.light.colorInverse],
  ["information", theme.colors.light.colorInverse],
  ["brand", theme.colors.light.colorPrimary],
] as const)(
  "uses the %s background and the readable text color",
  async (background, color) => {
    await render(
      <Sticker testId="sticker" background={background}>
        Promo
      </Sticker>
    )
    const key =
      `background${background[0].toUpperCase()}${background.slice(1)}` as keyof typeof theme.colors.light
    expect(flat("sticker").backgroundColor).toBe(theme.colors.light[key])
    expect(textStyle("Promo").color).toBe(color)
  }
)

it("resolves the background and the text color in the dark mode", async () => {
  await render(
    <TrilogyContextProvider mode="dark">
      <Sticker testId="sticker" background="success">
        Promo
      </Sticker>
    </TrilogyContextProvider>
  )
  expect(flat("sticker").backgroundColor).toBe(
    theme.colors.dark.backgroundSuccess
  )
  expect(textStyle("Promo").color).toBe(theme.colors.dark.colorInverse)
})

it("renders non-text children as they are next to the text", async () => {
  await render(
    <Sticker>
      <View testID="icon" />
      Promo
    </Sticker>
  )
  expect(screen.getByTestId("icon")).toBeTruthy()
  expect(screen.getByText("Promo")).toBeTruthy()
})

it("sets the native id and keeps the caller style last", async () => {
  await render(
    <Sticker
      testId="sticker"
      id="s"
      background="warning"
      style={{ backgroundColor: "red" }}
    >
      Promo
    </Sticker>
  )
  expect(screen.getByTestId("sticker").props.nativeID).toBe("s")
  expect(flat("sticker").backgroundColor).toBe("red")
})
