import { createRef } from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Card } from "./card.web"

describe("Card web", () => {
  it("forwards its ref and style and keeps children in order", () => {
    const ref = createRef<HTMLDivElement>()
    render(
      <Card ref={ref} testId="card" style={{ opacity: 0.5 }}>
        <span>First</span>
        <span>Second</span>
      </Card>
    )
    const card = screen.getByTestId("card")
    expect(ref.current).toBe(card)
    expect(card).toHaveClass("card", "card-shadow")
    expect(card).toHaveStyle({ opacity: "0.5" })
    expect(screen.getByText("First").nextElementSibling).toBe(
      screen.getByText("Second")
    )
    expect(screen.getByText("First").parentElement).toBe(card)
  })

  it.each(["shadow", "outlined", "accent-start"] as const)(
    "renders the %s appearance",
    (appearance) => {
      render(
        <Card appearance={appearance} testId="card">
          Content
        </Card>
      )
      expect(screen.getByTestId("card")).toHaveClass(`card-${appearance}`)
    }
  )
})
