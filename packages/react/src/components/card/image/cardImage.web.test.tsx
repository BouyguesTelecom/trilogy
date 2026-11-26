import { render, screen } from "@testing-library/react"
import { expect, it } from "vitest"

import { Card } from "../card.web"
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

it("is constrained to the card width", () => {
  render(
    <Card testId="card">
      <CardImage src="/image.png" alt="Example" testId="image" />
    </Card>
  )
  expect(screen.getByTestId("image")).toHaveStyle({
    width: "100%",
    maxWidth: "100%",
  })
})
