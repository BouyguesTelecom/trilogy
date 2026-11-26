import { createRef } from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Card } from "./card.web"
import { CardOverlay } from "./overlay/cardOverlay.web"

describe("Card web", () => {
  it("forwards its ref and style, preserves child order and direct overlay", () => {
    const ref = createRef<HTMLDivElement>()
    render(
      <Card ref={ref} testId="card" style={{ opacity: 0.5 }}>
        <span>First</span>
        <CardOverlay testId="overlay">Badge</CardOverlay>
        <span>Second</span>
      </Card>
    )
    const card = screen.getByTestId("card")
    expect(ref.current).toBe(card)
    expect(card).toHaveClass("card-shadow")
    expect(card).toHaveStyle({ opacity: "0.5" })
    expect(screen.getByTestId("overlay").parentElement).toBe(card)
    expect(screen.getByText("First").nextElementSibling).toBe(
      screen.getByTestId("overlay")
    )
    expect(screen.getByText("Second").parentElement).toBe(card)
  })

  it.each(["shadow", "outlined", "accent-start"] as const)(
    "renders %s and preserves overlay",
    (appearance) => {
      render(
        <Card appearance={appearance} testId="card">
          <CardOverlay>Badge</CardOverlay>
          <span>Content</span>
        </Card>
      )
      expect(screen.getByTestId("card")).toHaveClass(`card-${appearance}`)
      expect(screen.getByText("Badge")).toBeInTheDocument()
      expect(screen.getByText("Content")).toBeInTheDocument()
    }
  )
})
