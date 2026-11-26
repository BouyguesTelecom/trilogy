import { render, screen } from "@testing-library/react"
import { expect, it } from "vitest"

import { CardContent } from "./cardContent.web"

it("renders content and semantic background", () => {
  render(
    <CardContent background="secondary" testId="content">
      Content
    </CardContent>
  )
  expect(screen.getByTestId("content")).toHaveClass(
    "cardContent",
    "bg-secondary"
  )
})
it("uses the base background helper", () => {
  render(
    <CardContent background="background" testId="content">
      Content
    </CardContent>
  )
  expect(screen.getByTestId("content")).toHaveClass("bg")
})
