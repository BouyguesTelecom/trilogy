import { render, screen } from "@testing-library/react-native"
import { StyleSheet } from "react-native"

import { CardImage } from "./cardImage.native"

it("renders an accessible image and requested ratio", async () => {
  await render(
    <CardImage
      src="https://example.com/image.png"
      alt="Example"
      aspectRatio={1}
      testId="image"
    />
  )
  expect(screen.getByTestId("image")).toHaveStyle({ aspectRatio: 1 })
  expect(screen.getByLabelText("Example")).toBeTruthy()
})

it("defaults to a 2 ratio touching the card edges", async () => {
  await render(
    <CardImage src="https://example.com/image.png" alt="A" testId="image" />
  )
  const style = StyleSheet.flatten(screen.getByTestId("image").props.style)
  expect(style.aspectRatio).toBe(2)
  expect(style.margin).toBeUndefined()
})

it("detaches from the card edges with inset", async () => {
  await render(
    <CardImage
      src="https://example.com/image.png"
      alt="A"
      testId="image"
      inset
    />
  )
  const style = StyleSheet.flatten(screen.getByTestId("image").props.style)
  expect(style.margin).toBeGreaterThan(0)
  expect(style.borderRadius).toBeGreaterThan(0)
})
