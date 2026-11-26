import { render, screen } from "@testing-library/react-native"
import { StyleSheet, Text } from "react-native"

import { Card } from "./card.native"

it.each([
  ["shadow", "boxShadow"],
  ["outlined", "boxShadow"],
  ["accent-start", "boxShadow"],
] as const)(
  "renders content with the %s appearance",
  async (appearance, key) => {
    await render(
      <Card testId="card" appearance={appearance}>
        <Text>Content</Text>
      </Card>
    )
    expect(screen.getByText("Content")).toBeTruthy()
    expect(screen.getByTestId("card")).toHaveStyle({ overflow: "hidden" })
    expect(
      StyleSheet.flatten(screen.getByTestId("card").props.style)[key]
    ).toBeTruthy()
  }
)
