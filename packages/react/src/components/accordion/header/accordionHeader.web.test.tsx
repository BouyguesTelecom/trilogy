import { createRequire } from "node:module"
import { resolve } from "node:path"
import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { TrilogyContextProvider } from "../../../contexts/trilogyContext.web"
import { AccordionItem } from "../item/accordionItem.web"
import { AccordionHeader } from "./accordionHeader.web"

describe("AccordionHeader web", () => {
  it("includes the open rotation and reduced-motion rules in the compiled stylesheet", () => {
    const stylesRoot = resolve(process.cwd(), "../styles")
    const require = createRequire(resolve(stylesRoot, "package.json"))
    const sass = require("sass") as {
      compile: (path: string) => { css: string }
    }
    const css = sass.compile(resolve(stylesRoot, "src/trilogy.scss")).css
    expect(css).toMatch(
      /\.accordionHeaderIcon\[data-open\]\s*\{[^}]*transform:\s*rotate\(180deg\)/
    )
    expect(css).toMatch(
      /@media\s*\(prefers-reduced-motion:\s*reduce\)\s*\{\s*\.accordionHeaderIcon\s*\{[^}]*transition:\s*none/
    )
  })

  it("renders a decorative icon and rotates it on open and close", () => {
    render(
      <AccordionItem>
        <AccordionHeader expandIcon={<svg data-testid="icon" />}>
          Details
        </AccordionHeader>
      </AccordionItem>
    )
    const icon = screen.getByTestId("icon").parentElement!
    const button = screen.getByRole("button", { name: "Details" })
    expect(icon).toHaveAttribute("aria-hidden", "true")
    expect(icon).toHaveClass("accordionHeaderIcon")
    expect(icon).not.toHaveAttribute("data-open")
    fireEvent.click(button)
    expect(icon).toHaveAttribute("data-open", "true")
    fireEvent.click(button)
    expect(icon).not.toHaveAttribute("data-open")
  })

  it("omits the icon wrapper when no icon is provided", () => {
    render(
      <AccordionItem>
        <AccordionHeader>Details</AccordionHeader>
      </AccordionItem>
    )
    expect(
      screen
        .getByRole("button", { name: "Details" })
        .querySelector(".accordionHeaderIcon")
    ).toBeNull()
  })

  it("hashes the icon class and keeps disabled items closed", () => {
    render(
      <TrilogyContextProvider mangled hash="test">
        <AccordionItem disabled>
          <AccordionHeader expandIcon={<svg data-testid="icon" />}>
            Details
          </AccordionHeader>
        </AccordionItem>
      </TrilogyContextProvider>
    )
    const icon = screen.getByTestId("icon").parentElement!
    expect(icon).toHaveClass("accordionHeaderIcon_test")
    fireEvent.click(screen.getByRole("button", { name: "Details" }))
    expect(icon).not.toHaveAttribute("data-open")
  })

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
