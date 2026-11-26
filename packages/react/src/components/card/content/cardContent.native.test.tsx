import { render, screen } from "@testing-library/react-native"

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
