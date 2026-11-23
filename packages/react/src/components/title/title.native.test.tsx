import { render, screen } from "@testing-library/react-native"
import type { TextStyle } from "react-native"

import { theme } from "../../constants/theme"
import { TrilogyContextProvider } from "../../contexts/trilogyContext.native"
import { Title } from "./title.native"
import { TitleColor, TitleFontWeight, TitleLevel } from "./title.types"

describe("Title native", () => {
  it.each([
    [TitleLevel.one, theme.fonts.fontSizeXxxxl],
    [TitleLevel.two, theme.fonts.fontSizeXxxl],
    [TitleLevel.three, theme.fonts.fontSizeXxl],
    [TitleLevel.four, theme.fonts.fontSizeXl],
    [TitleLevel.five, theme.fonts.fontSizeMd],
    [TitleLevel.six, theme.fonts.fontSizeBase],
  ])("applies level %s", async (level, fontSize) => {
    await render(
      <Title level={level} testId="title">
        Titre
      </Title>
    )
    expect(screen.getByTestId("title")).toHaveStyle({
      fontSize,
      fontFamily:
        level <= 2
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

  it("uses level one for an invalid value", async () => {
    await render(
      <Title level={99 as TitleLevel} testId="title">
        Titre
      </Title>
    )
    expect(screen.getByTestId("title")).toHaveStyle({
      fontSize: theme.fonts.fontSizeXxxxl,
    })
  })
})
