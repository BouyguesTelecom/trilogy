import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { CardGroupAddOn } from "./cardGroupAddOn.web"

describe("CardGroupAddOn web", () => {
  it("defaults to center and renders its children", () => {
    render(<CardGroupAddOn testId="addon">Badge</CardGroupAddOn>)
    expect(screen.getByTestId("addon")).toHaveClass(
      "cardGroupAddOn",
      "cardGroupAddOn-center"
    )
    expect(screen.getByText("Badge")).toBeInTheDocument()
  })

  it.each(["start", "center", "end"] as const)("aligns to %s", (align) => {
    render(
      <CardGroupAddOn testId="addon" align={align} className="extra">
        Badge
      </CardGroupAddOn>
    )
    expect(screen.getByTestId("addon")).toHaveClass(
      `cardGroupAddOn-${align}`,
      "extra"
    )
  })
})
