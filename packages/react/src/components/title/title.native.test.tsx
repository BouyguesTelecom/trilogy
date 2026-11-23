import { render, screen } from "@testing-library/react-native"
import type { TextStyle } from "react-native"

import { theme } from "../../constants/theme"
import { TrilogyContextProvider } from "../../contexts/trilogyContext.native"
import { Title } from "./title.native"
import { TitleColor, TitleFontWeight, TitleSize } from "./title.types"

describe("Title native", () => {
  it.each([
    [TitleSize.xs, theme.fonts.fontSizeXs],
    [TitleSize.sm, theme.fonts.fontSizeSm],
    [TitleSize.base, theme.fonts.fontSizeBase],
    [TitleSize.md, theme.fonts.fontSizeMd],
    [TitleSize.lg, theme.fonts.fontSizeLg],
    [TitleSize.xl, theme.fonts.fontSizeXl],
    [TitleSize.xxl, theme.fonts.fontSizeXxl],
    [TitleSize.xxxl, theme.fonts.fontSizeXxxl],
    [TitleSize.xxxxl, theme.fonts.fontSizeXxxxl],
  ])("applies size %s", async (size, fontSize) => {
    await render(
      <Title size={size} testId="title">
        Titre
      </Title>
    )
    expect(screen.getByTestId("title")).toHaveStyle({
      fontSize,
      fontFamily:
        size === TitleSize.xxxl || size === TitleSize.xxxxl
          ? theme.fonts.fontFamilySecondary
          : theme.fonts.fontFamilyPrimary,
    })
    expect(screen.getByTestId("title").props.accessibilityRole).toBe("header")
  })

  it("applies dark colors, explicit weight and accessibility", async () => {
    await render(
      <TrilogyContextProvider mode="dark">
        <Title
          testId="title"
          accessibilityLabel="Accessible"
          color={TitleColor.secondary}
          fontWeight={TitleFontWeight.bold}
        >
          Titre
        </Title>
      </TrilogyContextProvider>
    )
    expect(screen.getByLabelText("Accessible")).toHaveTextContent("Titre")
    expect(screen.getByTestId("title")).toHaveStyle({
      color: theme.colors.dark.colorSecondary,
      fontWeight: String(theme.fonts.fontWeightBold) as TextStyle["fontWeight"],
    })
  })

  it("uses size xxxxl for an invalid value", async () => {
    await render(
      <Title size={99 as unknown as TitleSize} testId="title">
        Titre
      </Title>
    )
    expect(screen.getByTestId("title")).toHaveStyle({
      fontSize: theme.fonts.fontSizeXxxxl,
    })
  })
})
