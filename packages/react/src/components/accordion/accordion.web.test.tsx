import { createRef } from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Accordion } from "./accordion.web"

describe("Accordion web", () => {
  it("forwards children, classes, style and ref", () => {
    const ref = createRef<HTMLDivElement>()
    render(
      <Accordion
        ref={ref}
        id="group"
        testId="group"
        className="extra"
        style={{ opacity: 0.5 }}
      >
        Contents
      </Accordion>
    )
    expect(screen.getByTestId("group")).toHaveClass("accordion", "extra")
    expect(screen.getByTestId("group")).toHaveAttribute("id", "group")
    expect(screen.getByTestId("group")).toHaveStyle({ opacity: "0.5" })
    expect(ref.current).toBe(screen.getByTestId("group"))
  })
})
