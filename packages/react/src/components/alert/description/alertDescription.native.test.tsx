import { render, screen } from "@testing-library/react-native"

import { theme } from "../../../constants/theme"
import { AlertDescription } from "./alertDescription.native"

describe("AlertDescription native", () => {
  it("renders themed description and identifiers", async () => {
    await render(
      <AlertDescription testId="description" id="description-id">
        Message
      </AlertDescription>
    )
    expect(screen.getByTestId("description")).toHaveTextContent("Message")
    expect(screen.getByTestId("description")).toHaveStyle({
      fontFamily: theme.fonts.fontFamilyPrimary,
      color: theme.colors.light.colorPrimary,
    })
    expect(screen.getByTestId("description").props.id).toBe("description-id")
  })

  it("applies a caller-provided native style", async () => {
    await render(
      <AlertDescription testId="description" style={{ opacity: 0.5 }}>
        Description
      </AlertDescription>
    )
    expect(screen.getByTestId("description")).toHaveStyle({ opacity: 0.5 })
  })
})
