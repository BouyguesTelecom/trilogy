import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import { ButtonMarkup, ButtonVariant } from "./button.types"
import { Button } from "./button.web"

describe("Button web", () => {
  it("renders a primary button and calls onClick", async () => {
    const onClick = vi.fn()
    render(<Button onClick={onClick}>Valider</Button>)
    const button = screen.getByRole("button", { name: "Valider" })
    expect(button).toHaveClass("button", "primary")
    expect(button).toHaveAttribute("type", "button")
    await userEvent.click(button)
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it("does not invoke onClick when disabled", async () => {
    const onClick = vi.fn()
    render(
      <Button disabled onClick={onClick}>
        Valider
      </Button>
    )
    const button = screen.getByRole("button", { name: "Valider" })
    expect(button).toBeDisabled()
    await userEvent.click(button)
    expect(onClick).not.toHaveBeenCalled()
  })

  it.each(Object.values(ButtonVariant))("applies the %s variant", (variant) => {
    render(<Button variant={variant}>Valider</Button>)
    expect(screen.getByRole("button")).toHaveClass(variant)
  })

  it("renders a link and keeps a disabled link inaccessible to keyboard", () => {
    const { rerender } = render(<Button href="/suite">Suite</Button>)
    expect(screen.getByRole("link", { name: "Suite" })).toHaveAttribute(
      "href",
      "/suite"
    )
    rerender(
      <Button href="/suite" disabled>
        Suite
      </Button>
    )
    expect(screen.getByRole("link")).toHaveAttribute("aria-disabled", "true")
    expect(screen.getByRole("link")).toHaveAttribute("tabindex", "-1")
  })

  it("renders input markup with its value", () => {
    render(
      <Button markup={ButtonMarkup.input} testId="submit">
        Envoyer
      </Button>
    )
    expect(screen.getByTestId("submit")).toHaveValue("Envoyer")
    expect(screen.getByTestId("submit")).toHaveAttribute("type", "submit")
  })

  it("forwards a custom inline style", () => {
    render(<Button style={{ color: "red" }}>Styled</Button>)
    expect(screen.getByRole("button", { name: "Styled" })).toHaveStyle({
      color: "rgb(255, 0, 0)",
    })
  })
})
