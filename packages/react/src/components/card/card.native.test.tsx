import { render, screen } from "@testing-library/react-native"
import { StyleSheet, Text } from "react-native"

import { Card } from "./card.native"
import { CardContent } from "./content/cardContent.native"
import { CardImage } from "./image/cardImage.native"

it.each([
  ["vertical", "column"],
  ["horizontal", "row"],
] as const)("lays out %s cards as a %s", async (orientation, flexDirection) => {
  await render(
    <Card testId="card" orientation={orientation}>
      <Text>Content</Text>
    </Card>
  )
  expect(screen.getByTestId("card")).toHaveStyle({ flexDirection })
})

it("defaults to a vertical card", async () => {
  await render(
    <Card testId="card">
      <Text>Content</Text>
    </Card>
  )
  expect(screen.getByTestId("card")).toHaveStyle({ flexDirection: "column" })
})

it("shares the horizontal orientation with its image and content", async () => {
  await render(
    <Card orientation="horizontal">
      <CardContent testId="content">Content</CardContent>
      <CardImage testId="image" src="https://example.com/a.png" alt="A" />
    </Card>
  )
  expect(screen.getByTestId("content")).toHaveStyle({ flex: 1 })
  expect(screen.getByTestId("image")).toHaveStyle({ flex: 1 })
  expect(
    StyleSheet.flatten(screen.getByTestId("image").props.style).aspectRatio
  ).toBeUndefined()
})

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
