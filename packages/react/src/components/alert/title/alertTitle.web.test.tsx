import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { AlertTitleMarkup } from "./alertTitle.types"
import { AlertTitle } from "./alertTitle.web"

describe("AlertTitle web", () => {
  it.each(Object.values(AlertTitleMarkup))("renders %s markup", (markup) => {
    render(
      <AlertTitle markup={markup} testId="title">
        Titre
      </AlertTitle>
    )
    expect(screen.getByTestId("title").tagName.toLowerCase()).toBe(markup)
    expect(screen.getByTestId("title")).toHaveClass("alertTitle")
  })
  it("falls back to a paragraph for invalid markup", () => {
    render(
      <AlertTitle markup={"invalid" as AlertTitleMarkup}>Titre</AlertTitle>
    )
    expect(screen.getByText("Titre").tagName).toBe("P")
  })
})
