import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { AlertDescriptionMarkup } from "./alertDescription.types"
import { AlertDescription } from "./alertDescription.web"

describe("AlertDescription web", () => {
  it.each(Object.values(AlertDescriptionMarkup))(
    "renders %s markup",
    (markup) => {
      render(
        <AlertDescription markup={markup} testId="description">
          Message
        </AlertDescription>
      )
      expect(screen.getByTestId("description").tagName.toLowerCase()).toBe(
        markup
      )
      expect(screen.getByTestId("description")).toHaveClass("text")
    }
  )
  it("falls back to a paragraph for invalid markup", () => {
    render(
      <AlertDescription markup={"invalid" as AlertDescriptionMarkup}>
        Message
      </AlertDescription>
    )
    expect(screen.getByText("Message").tagName).toBe("P")
  })
})
