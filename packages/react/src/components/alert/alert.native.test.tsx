import { render, screen } from "@testing-library/react-native"

import { theme } from "../../constants/theme"
import { TrilogyContextProvider } from "../../contexts/trilogyContext.native"
import { Alert } from "./alert.native"
import { AlertStatus } from "./alert.types"
import { AlertContent } from "./content/alertContent.native"
import { AlertDescription } from "./description/alertDescription.native"
import { AlertTitle } from "./title/alertTitle.native"

describe("Alert native", () => {
  it.each([
    [
      AlertStatus.information,
      theme.colors.light.backgroundInformationSubtle,
      theme.colors.light.borderInformation,
    ],
    [
      AlertStatus.success,
      theme.colors.light.backgroundSuccessSubtle,
      theme.colors.light.borderSuccess,
    ],
    [
      AlertStatus.warning,
      theme.colors.light.backgroundWarningSubtle,
      theme.colors.light.borderWarning,
    ],
    [
      AlertStatus.error,
      theme.colors.light.backgroundErrorSubtle,
      theme.colors.light.borderError,
    ],
  ])("applies %s styles", async (status, backgroundColor, borderColor) => {
    await render(
      <Alert status={status} testId="alert">
        Message
      </Alert>
    )
    expect(screen.getByTestId("alert")).toHaveStyle({
      backgroundColor,
      borderColor,
    })
    expect(screen.getByText("Message")).toHaveStyle({
      color: theme.colors.light.colorPrimary,
    })
  })

  it("composes children and uses the dark theme by default status", async () => {
    await render(
      <TrilogyContextProvider mode="dark">
        <Alert testId="alert">
          <AlertContent>
            <AlertTitle>Titre</AlertTitle>
            <AlertDescription>Description</AlertDescription>
          </AlertContent>
        </Alert>
      </TrilogyContextProvider>
    )
    expect(screen.getByTestId("alert").props.accessibilityRole).toBe("alert")
    expect(screen.getByTestId("alert")).toHaveStyle({
      backgroundColor: theme.colors.dark.backgroundInformationSubtle,
    })
    expect(screen.getByText("Titre")).toBeTruthy()
    expect(screen.getByText("Description")).toBeTruthy()
  })
})
