import { render, screen } from "@testing-library/react"
import { expect, it } from "vitest"

import { CardOverlay } from "./cardOverlay.web"

it("defaults to centered alignment", () => {
  render(<CardOverlay testId="overlay">Badge</CardOverlay>)
  expect(screen.getByTestId("overlay")).toHaveClass("cardOverlay-center")
})
