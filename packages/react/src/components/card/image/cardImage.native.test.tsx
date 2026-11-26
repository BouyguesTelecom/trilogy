import { render, screen } from "@testing-library/react-native"
import { Image, StyleSheet } from "react-native"

import { Card } from "../card.native"
import { CardOrientation } from "../card.types"
import { CardImage } from "./cardImage.native"

const mockNaturalSize = (width: number, height: number): jest.SpyInstance =>
  jest
    .spyOn(Image, "getSize")
    .mockImplementation(((
      _uri: string,
      success: (width: number, height: number) => void
    ) => success(width, height)) as typeof Image.getSize)

afterEach(() => jest.restoreAllMocks())

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

it("uses the natural ratio of the image when the card is horizontal", async () => {
  const getSize = mockNaturalSize(300, 100)
  await render(
    <Card orientation={CardOrientation.horizontal}>
      <CardImage src="https://example.com/a.png" alt="A" testId="image" />
    </Card>
  )
  expect(getSize).toHaveBeenCalledWith(
    "https://example.com/a.png",
    expect.any(Function),
    expect.any(Function)
  )
  expect(
    StyleSheet.flatten(screen.getByTestId("image").props.style).aspectRatio
  ).toBe(3)
})

it("lets an explicit aspectRatio win and skips the lookup", async () => {
  const getSize = mockNaturalSize(300, 100)
  await render(
    <Card orientation={CardOrientation.horizontal}>
      <CardImage
        src="https://example.com/a.png"
        alt="A"
        testId="image"
        aspectRatio={1.5}
      />
    </Card>
  )
  expect(getSize).not.toHaveBeenCalled()
  expect(
    StyleSheet.flatten(screen.getByTestId("image").props.style).aspectRatio
  ).toBe(1.5)
})

it("skips the lookup when the card is vertical", async () => {
  const getSize = mockNaturalSize(300, 100)
  await render(
    <Card>
      <CardImage src="https://example.com/a.png" alt="A" testId="image" />
    </Card>
  )
  expect(getSize).not.toHaveBeenCalled()
  expect(
    StyleSheet.flatten(screen.getByTestId("image").props.style).aspectRatio
  ).toBe(2)
})
