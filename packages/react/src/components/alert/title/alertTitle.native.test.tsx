import { render, screen } from "@testing-library/react-native"

import { theme } from "../../../constants/theme"
import { AlertTitle } from "./alertTitle.native"

describe("AlertTitle native", () => {
  it("renders themed title and identifiers", async () => {
    await render(
      <AlertTitle testId="title" id="title-id">
        Titre
      </AlertTitle>
    )
    expect(screen.getByTestId("title")).toHaveTextContent("Titre")
    expect(screen.getByTestId("title")).toHaveStyle({
      fontFamily: theme.fonts.fontFamilySecondary,
      color: theme.colors.light.colorPrimary,
    })
    expect(screen.getByTestId("title").props.id).toBe("title-id")
  })
})
