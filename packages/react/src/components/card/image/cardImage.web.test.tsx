import { render, screen } from "@testing-library/react"
import { expect, it } from "vitest"

import { CardImage } from "./cardImage.web"

it("renders an accessible image and requested ratio", () => {
  render(<CardImage src="/image.png" alt="Example" aspectRatio={1} />)
  expect(screen.getByRole("img", { name: "Example" })).toHaveStyle({
    aspectRatio: "1",
  })
})

it("forwards its source and lets style override the default ratio", () => {
  render(
    <CardImage
      src="/image.png"
      alt=""
      testId="image"
      style={{ aspectRatio: 3 }}
    />
  )
  expect(screen.getByTestId("image")).toHaveAttribute("src", "/image.png")
  expect(screen.getByTestId("image")).toHaveAttribute("alt", "")
  expect(screen.getByTestId("image")).toHaveStyle({ aspectRatio: "3" })
})

it("sets no inline ratio by default so the card orientation decides", () => {
  render(<CardImage src="/image.png" alt="Example" testId="image" />)
  expect(screen.getByTestId("image").style.aspectRatio).toBe("")
})

it("touches the card edges by default and detaches with inset", () => {
  const { rerender } = render(
    <CardImage src="/image.png" alt="Example" testId="image" />
  )
  expect(screen.getByTestId("image")).not.toHaveClass("cardImage-inset")
  rerender(<CardImage src="/image.png" alt="Example" testId="image" inset />)
  expect(screen.getByTestId("image")).toHaveClass(
    "cardImage",
    "cardImage-inset"
  )
})
