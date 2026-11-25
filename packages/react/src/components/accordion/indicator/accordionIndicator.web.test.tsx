import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { AccordionHeader } from "../header/accordionHeader.web"
import { AccordionItem } from "../item/accordionItem.web"
import { AccordionIndicator } from "./accordionIndicator.web"

describe("AccordionIndicator web", () => {
  it("wraps the supplied icon and reflects the open state", () => {
    render(
      <AccordionItem>
        <AccordionHeader>
          Details
          <AccordionIndicator testId="indicator">
            <svg data-testid="icon" />
          </AccordionIndicator>
        </AccordionHeader>
      </AccordionItem>
    )
    expect(screen.getByTestId("indicator")).toHaveAttribute(
      "aria-hidden",
      "true"
    )
    expect(screen.getByTestId("icon")).toBeInTheDocument()
    fireEvent.click(screen.getByRole("button", { name: "Details" }))
    expect(screen.getByTestId("indicator")).toHaveAttribute("data-open", "true")
  })
})
