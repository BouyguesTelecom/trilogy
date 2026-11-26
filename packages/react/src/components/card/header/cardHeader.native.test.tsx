import { TrilogyContextProvider } from "@/contexts/trilogyContext.native"
import { BackgroundColors } from "@/interfaces/backgroundColors"
import { render, screen } from "@testing-library/react-native"

import { theme } from "../../../constants/theme"
import { CardHeader } from "./cardHeader.native"

it("renders content and themed background", async () => {
  await render(
    <CardHeader background="primary" testId="header">
      Header
    </CardHeader>
  )
  expect(screen.getByTestId("header")).toHaveStyle({
    backgroundColor: theme.colors.light.backgroundPrimary,
  })
  expect(screen.getByText("Header")).toBeTruthy()
})
it.each(Object.values(BackgroundColors))(
  "maps semantic background %s in dark mode",
  async (background) => {
    const key =
      background === "background"
        ? "background"
        : `background${background
            .split("-")
            .map((part) => part[0].toUpperCase() + part.slice(1))
            .join("")}`
    await render(
      <TrilogyContextProvider mode="dark">
        <CardHeader background={background} testId="header">
          Header
        </CardHeader>
      </TrilogyContextProvider>
    )
    expect(screen.getByTestId("header")).toHaveStyle({
      backgroundColor: theme.colors.dark[key as keyof typeof theme.colors.dark],
    })
  }
)
it("applies caller styles last", async () => {
  await render(
    <CardHeader
      background="primary"
      testId="header"
      style={{ backgroundColor: "red" }}
    >
      Header
    </CardHeader>
  )
  expect(screen.getByTestId("header")).toHaveStyle({ backgroundColor: "red" })
})
