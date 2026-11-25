import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { AccordionHeader } from "../header/accordionHeader.web"
import { AccordionItem } from "../item/accordionItem.web"
import { AccordionBody } from "./accordionBody.web"

describe("AccordionBody web", () => {
  it("respects a custom id and connects it to the toggle", () => {
    render(
      <AccordionItem defaultOpen>
        <AccordionHeader>Details</AccordionHeader>
        <AccordionBody id="details-body" testId="body">
          Content
        </AccordionBody>
      </AccordionItem>
    )
    expect(screen.getByTestId("body")).toBeVisible()
    expect(screen.getByRole("button")).toHaveAttribute(
      "aria-controls",
      "details-body"
    )
  })
})
