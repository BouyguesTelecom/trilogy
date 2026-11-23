import { render, screen } from "@testing-library/react-native"
import type { TextStyle } from "react-native"

import { theme } from "../../constants/theme"
import { TrilogyContextProvider } from "../../contexts/trilogyContext.native"
import { Text } from "./text.native"
import { TextColor, TextFontWeight, TextLevel } from "./text.types"

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

  it("applies level, color and weight in dark mode", async () => {
    await render(
      <TrilogyContextProvider mode="dark">
        <Text
          testId="text"
          level={TextLevel.six}
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

  it("falls back to the first level for invalid input", async () => {
    await render(
      <Text testId="text" level={99 as TextLevel}>
        Texte
      </Text>
    )
    expect(screen.getByTestId("text")).toHaveStyle({
      fontSize: theme.fonts.fontSizeXxxxl,
    })
  })
})
