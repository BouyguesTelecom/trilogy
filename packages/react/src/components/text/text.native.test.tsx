import { render, screen } from "@testing-library/react-native"
import type { TextStyle } from "react-native"

import { theme } from "../../constants/theme"
import { TrilogyContextProvider } from "../../contexts/trilogyContext.native"
import { Text } from "./text.native"
import { TextColor, TextFontWeight, TextSize } from "./text.types"

describe("Text native", () => {
  it("renders default styles and accessible content", async () => {
    await render(
      <Text testId="text" accessibilityLabel="Accessible">
        Bonjour
      </Text>
    )
    expect(screen.getByLabelText("Accessible")).toHaveTextContent("Bonjour")
    expect(screen.getByTestId("text")).toHaveStyle({
      fontSize: theme.fonts.fontSizeXxxxl,
      color: theme.colors.light.colorPrimary,
    })
  })

  it.each([
    [TextSize.xs, theme.fonts.fontSizeXs],
    [TextSize.sm, theme.fonts.fontSizeSm],
    [TextSize.base, theme.fonts.fontSizeBase],
    [TextSize.md, theme.fonts.fontSizeMd],
    [TextSize.lg, theme.fonts.fontSizeLg],
    [TextSize.xl, theme.fonts.fontSizeXl],
    [TextSize.xxl, theme.fonts.fontSizeXxl],
    [TextSize.xxxl, theme.fonts.fontSizeXxxl],
    [TextSize.xxxxl, theme.fonts.fontSizeXxxxl],
  ])("applies size %s", async (size, fontSize) => {
    await render(
      <Text size={size} testId="text">
        Texte
      </Text>
    )
    expect(screen.getByTestId("text")).toHaveStyle({ fontSize })
  })

  it("applies size, color and weight in dark mode", async () => {
    await render(
      <TrilogyContextProvider mode="dark">
        <Text
          testId="text"
          size={TextSize.base}
          color={TextColor.secondary}
          fontWeight={TextFontWeight.bold}
        >
          Texte
        </Text>
      </TrilogyContextProvider>
    )
    expect(screen.getByTestId("text")).toHaveStyle({
      fontSize: theme.fonts.fontSizeBase,
      color: theme.colors.dark.colorSecondary,
      fontWeight: String(theme.fonts.fontWeightBold) as TextStyle["fontWeight"],
    })
  })

  it("falls back to size xxxxl for invalid input", async () => {
    await render(
      <Text testId="text" size={99 as unknown as TextSize}>
        Texte
      </Text>
    )
    expect(screen.getByTestId("text")).toHaveStyle({
      fontSize: theme.fonts.fontSizeXxxxl,
    })
  })

  it("overrides weight without changing the variant size or family", async () => {
    await render(
      <Text
        size={TextSize.xxxxl}
        fontWeight={TextFontWeight.bold}
        testId="text"
      >
        Texte
      </Text>
    )
    expect(screen.getByTestId("text")).toHaveStyle({
      fontSize: theme.fonts.fontSizeXxxxl,
      fontFamily: theme.fonts.fontFamilySecondary,
      fontWeight: String(theme.fonts.fontWeightBold) as TextStyle["fontWeight"],
    })
  })

  it("applies a caller-provided native style after typography styles", async () => {
    await render(
      <Text testId="text" style={{ opacity: 0.5 }}>
        Styled
      </Text>
    )
    expect(screen.getByTestId("text")).toHaveStyle({ opacity: 0.5 })
  })
})
