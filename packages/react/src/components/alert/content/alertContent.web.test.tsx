import { createRef } from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { AlertContent } from "./alertContent.web"

describe("AlertContent web", () => {
  it("preserves children order, identifiers and ref", () => {
    const ref = createRef<HTMLDivElement>()
    render(
      <AlertContent
        testId="content"
        id="content-id"
        className="extra"
        ref={ref}
      >
        <span>Premier</span>
        <span>Second</span>
      </AlertContent>
    )
    const content = screen.getByTestId("content")
    expect(content).toHaveClass("alertContent", "extra")
    expect(content).toHaveAttribute("id", "content-id")
    expect(content).toHaveTextContent("PremierSecond")
    expect(ref.current).toBe(content)
  })

  it("forwards a custom inline style", () => {
    render(<AlertContent testId="content" style={{ opacity: 0.5 }} />)
    expect(screen.getByTestId("content")).toHaveStyle({ opacity: "0.5" })
  })
})
