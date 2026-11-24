import { createRef } from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { AlertMarkup, AlertStatus } from "./alert.types"
import { Alert } from "./alert.web"
import { AlertContent } from "./content/alertContent.web"
import { AlertDescription } from "./description/alertDescription.web"
import { AlertTitle } from "./title/alertTitle.web"

describe("Alert web", () => {
  it.each(Object.values(AlertStatus))("applies status %s", (status) => {
    render(
      <Alert status={status} testId="alert">
        Message
      </Alert>
    )
    expect(screen.getByTestId("alert")).toHaveClass("alert", status)
  })

  it("composes content and preserves id, class and ref", () => {
    const ref = createRef<HTMLElement>()
    render(
      <Alert testId="alert" id="alert-id" className="extra" ref={ref}>
        <AlertContent>
          <AlertTitle>Titre</AlertTitle>
          <AlertDescription>Description</AlertDescription>
        </AlertContent>
      </Alert>
    )
    const alert = screen.getByTestId("alert")
    expect(alert).toHaveAttribute("id", "alert-id")
    expect(alert).toHaveClass("alert", "extra")
    expect(alert).not.toHaveClass("information")
    expect(alert).toHaveTextContent("TitreDescription")
    expect(ref.current).toBe(alert)
  })

  it("handles valid and invalid markup", () => {
    const { rerender } = render(
      <Alert markup={AlertMarkup.h2} testId="alert">
        Message
      </Alert>
    )
    expect(screen.getByTestId("alert").tagName).toBe("H2")
    rerender(
      <Alert markup={"invalid" as AlertMarkup} testId="alert">
        Message
      </Alert>
    )
    expect(screen.getByTestId("alert").tagName).toBe("DIV")
  })

  it("forwards a custom inline style", () => {
    render(
      <Alert testId="alert" style={{ color: "red" }}>
        Message
      </Alert>
    )
    expect(screen.getByTestId("alert")).toHaveStyle({
      color: "rgb(255, 0, 0)",
    })
  })
})
