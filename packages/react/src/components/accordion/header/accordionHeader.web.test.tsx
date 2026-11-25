import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { AccordionItem } from "../item/accordionItem.web"
import { AccordionHeader } from "./accordionHeader.web"

describe("AccordionHeader web", () => {
  it("supports keyboard activation and accessible naming", () => {
    render(
      <AccordionItem>
        <AccordionHeader accessibilityLabel="Details">Label</AccordionHeader>
      </AccordionItem>
    )
    const button = screen.getByRole("button", { name: "Details" })
    expect(button.tagName).toBe("SUMMARY")
    fireEvent.click(button)
    expect(button).toHaveAttribute("aria-expanded", "true")
  })
})
