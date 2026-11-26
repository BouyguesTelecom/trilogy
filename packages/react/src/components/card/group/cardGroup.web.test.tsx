import { render, screen } from "@testing-library/react"
import { expect, it } from "vitest"

import { CardGroup } from "./cardGroup.web"

it("renders its children with the group class, id and style", () => {
  render(
    <CardGroup testId="group" id="g" className="extra" style={{ opacity: 0.5 }}>
      <span>Child</span>
    </CardGroup>
  )
  const group = screen.getByTestId("group")
  expect(group).toHaveClass("cardGroup", "extra")
  expect(group).toHaveAttribute("id", "g")
  expect(group).toHaveStyle({ opacity: "0.5" })
  expect(screen.getByText("Child").parentElement).toBe(group)
})
