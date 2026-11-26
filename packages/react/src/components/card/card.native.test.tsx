import { render, screen } from "@testing-library/react-native"
import { Image, StyleSheet, Text } from "react-native"

import { theme } from "../../constants/theme"
import { Card } from "./card.native"
import { CardContent } from "./content/cardContent.native"
import { CardImage } from "./image/cardImage.native"

it("keeps the default radius without helpers", async () => {
  await render(
    <Card testId="card">
      <Text>Content</Text>
    </Card>
  )
  const style = StyleSheet.flatten(screen.getByTestId("card").props.style)
  expect(style.borderRadius).toBe(theme.radius.radiusLg)
  expect(style.padding).toBeUndefined()
})

it.each([
  ["full", theme.radius.radiusFull],
  ["md", theme.radius.radiusMd],
  ["sm", theme.radius.radiusSm],
  ["none", theme.radius.radiusNone],
] as const)(
  "overrides only the radius with the %s token",
  async (borderRadius, expected) => {
    await render(
      <Card testId="card" borderRadius={borderRadius}>
        <Text>Content</Text>
      </Card>
    )
    const style = StyleSheet.flatten(screen.getByTestId("card").props.style)
    expect(style.borderRadius).toBe(expected)
    expect(style.padding).toBeUndefined()
    expect(style.overflow).toBe("hidden")
  }
)

it("keeps the caller style after the radius helper", async () => {
  await render(
    <Card testId="card" borderRadius="sm" style={{ borderRadius: 3 }}>
      <Text>Content</Text>
    </Card>
  )
  const style = StyleSheet.flatten(screen.getByTestId("card").props.style)
  expect(style.borderRadius).toBe(3)
})

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
  // The size lookup never resolves, so the image has no ratio yet.
  jest
    .spyOn(Image, "getSize")
    .mockImplementation((() => {}) as unknown as typeof Image.getSize)
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
  jest.restoreAllMocks()
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
