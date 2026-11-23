import { render, screen } from "@testing-library/react-native"
import { Text } from "react-native"

import { theme } from "../../../constants/theme"
import { AlertContent } from "./alertContent.native"

describe("AlertContent native", () => {
  it("renders children and layout", async () => {
    await render(
      <AlertContent testId="content">
        <Text>Premier</Text>
        <Text>Second</Text>
      </AlertContent>
    )
    expect(screen.getByTestId("content")).toHaveStyle({
      flexDirection: "column",
      gap: theme.spacings.spacingXs,
      flexShrink: 1,
    })
    expect(screen.getByText("Premier")).toBeTruthy()
    expect(screen.getByText("Second")).toBeTruthy()
  })
})
