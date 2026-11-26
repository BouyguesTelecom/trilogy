import { render, screen } from "@testing-library/react"
import { expect, it } from "vitest"

import { CardHeader } from "./cardHeader.web"

it("renders content and semantic background", () => {
  render(
    <CardHeader background="secondary" testId="header">
      Header
    </CardHeader>
  )
  expect(screen.getByTestId("header")).toHaveClass("cardHeader", "bg-secondary")
})
it("uses the base background helper and keeps defaults free of overrides", () => {
  const { rerender } = render(<CardHeader testId="header">Header</CardHeader>)
  expect(screen.getByTestId("header")).not.toHaveClass("bg")
  rerender(
    <CardHeader background="background" testId="header">
      Header
    </CardHeader>
  )
  expect(screen.getByTestId("header")).toHaveClass("bg")
})
