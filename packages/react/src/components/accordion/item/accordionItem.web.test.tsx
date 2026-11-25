/// <reference types="node" />

import { createRequire } from "node:module"
import { resolve } from "node:path"
import { createRef } from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import { TrilogyContextProvider } from "../../../contexts/trilogyContext.web"
import { AccordionBody } from "../body/accordionBody.web"
import { AccordionHeader } from "../header/accordionHeader.web"
import { AccordionItem } from "./accordionItem.web"

describe("AccordionItem web", () => {
  it("applies the compiled semantic styles for default, hover and disabled", async () => {
    const stylesRoot = resolve(process.cwd(), "../styles")
    const require = createRequire(resolve(stylesRoot, "package.json"))
    const sass = require("sass") as {
      compile: (path: string) => { css: string }
    }
    const stylesheet = document.createElement("style")
    const css = sass.compile(resolve(stylesRoot, "src/trilogy.scss")).css
    expect(css).toContain(".accordionItem:hover:not([data-disabled])")
    // jsdom does not update :hover from pointer events; preserve the cascade
    // while substituting a controllable selector for this computed-style test.
    stylesheet.textContent = css.replace(
      ".accordionItem:hover:not([data-disabled])",
      ".accordionItem[data-test-hover]:not([data-disabled])"
    )
    document.head.append(stylesheet)
    try {
      const { rerender } = render(
        <AccordionItem testId="item">
          <AccordionHeader>Details</AccordionHeader>
        </AccordionItem>
      )
      const item = screen.getByTestId("item")
      const header = screen.getByRole("button")
      expect(getComputedStyle(item).padding).toBe("0px")
      expect(getComputedStyle(header).padding).toBe("16px")
      expect(getComputedStyle(header).userSelect).toBe("none")
      expect(getComputedStyle(item).backgroundColor).toBe("rgb(255, 255, 255)")
      expect(getComputedStyle(item).borderColor).toBe("rgb(187, 198, 205)")
      item.setAttribute("data-test-hover", "")
      expect(getComputedStyle(item).backgroundColor).toBe("rgb(247, 247, 247)")
      rerender(
        <AccordionItem disabled testId="item">
          <AccordionHeader>Details</AccordionHeader>
        </AccordionItem>
      )
      expect(getComputedStyle(item).borderColor).toBe("rgb(98, 110, 129)")
      expect(getComputedStyle(item).backgroundColor).toBe("rgb(247, 247, 247)")
    } finally {
      stylesheet.remove()
    }
  })

  it("toggles with the keyboard while retaining body state", async () => {
    const user = userEvent.setup()
    render(
      <AccordionItem>
        <AccordionHeader>Details</AccordionHeader>
        <AccordionBody>
          <input aria-label="Saved value" />
        </AccordionBody>
      </AccordionItem>
    )
    await user.tab()
    await user.keyboard("{Enter}")
    const input = screen.getByRole("textbox", { name: "Saved value" })
    await user.type(input, "persisted")
    await user.click(screen.getByRole("button", { name: "Details" }))
    await user.click(screen.getByRole("button", { name: "Details" }))
    expect(screen.getByRole("textbox", { name: "Saved value" })).toHaveValue(
      "persisted"
    )
    screen.getByRole("button", { name: "Details" }).focus()
    await user.keyboard(" ")
    expect(screen.getByRole("button", { name: "Details" })).toHaveAttribute(
      "aria-expanded",
      "false"
    )
  })

  it("forwards refs to the details and summary elements", () => {
    const itemRef = createRef<HTMLDetailsElement>()
    const headerRef = createRef<HTMLElement>()
    render(
      <AccordionItem ref={itemRef}>
        <AccordionHeader ref={headerRef}>Details</AccordionHeader>
      </AccordionItem>
    )
    expect(itemRef.current?.tagName).toBe("DETAILS")
    expect(headerRef.current?.tagName).toBe("SUMMARY")
  })

  it("hashes classes once without exposing hover in the DOM", () => {
    render(
      <TrilogyContextProvider mangled hash="test">
        <AccordionItem testId="item" className="custom">
          <AccordionHeader className="trigger">Details</AccordionHeader>
        </AccordionItem>
      </TrilogyContextProvider>
    )
    const item = screen.getByTestId("item")
    const header = screen.getByRole("button")
    expect(item).toHaveClass("accordionItem_test", "custom_test")
    expect(header).toHaveClass("accordionHeader_test", "trigger_test")
    expect(item).not.toHaveAttribute("data-hovered")
    expect(item.tagName).toBe("DETAILS")
    expect(header.tagName).toBe("SUMMARY")
  })

  it("opens items independently and associates header and body", () => {
    render(
      <>
        <AccordionItem>
          <AccordionHeader>First</AccordionHeader>
          <AccordionBody testId="first">First body</AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader>Second</AccordionHeader>
          <AccordionBody testId="second">Second body</AccordionBody>
        </AccordionItem>
      </>
    )
    const first = screen.getByRole("button", { name: "First" })
    const second = screen.getByRole("button", { name: "Second" })
    expect(first).toHaveAttribute(
      "aria-controls",
      screen.getByTestId("first").id
    )
    expect(first).toHaveAttribute("aria-expanded", "false")
    expect(screen.getByTestId("first")).not.toBeVisible()
    fireEvent.click(first)
    fireEvent.click(second)
    expect(first).toHaveAttribute("aria-expanded", "true")
    expect(second).toHaveAttribute("aria-expanded", "true")
    expect(screen.getByTestId("first")).toBeVisible()
    expect(screen.getByTestId("second")).toBeVisible()
  })

  it("supports controlled state and disabled items", () => {
    const onOpenChange = vi.fn()
    const { rerender } = render(
      <AccordionItem open={false} onOpenChange={onOpenChange}>
        <AccordionHeader>Toggle</AccordionHeader>
        <AccordionBody>Body</AccordionBody>
      </AccordionItem>
    )
    fireEvent.click(screen.getByRole("button"))
    expect(onOpenChange).toHaveBeenCalledWith(true)
    expect(screen.getByRole("button")).toHaveAttribute("aria-expanded", "false")
    rerender(
      <AccordionItem open disabled onOpenChange={onOpenChange}>
        <AccordionHeader>Toggle</AccordionHeader>
        <AccordionBody>Body</AccordionBody>
      </AccordionItem>
    )
    expect(screen.getByRole("button")).toHaveAttribute("aria-disabled", "true")
    expect(screen.getByRole("button")).toHaveAttribute("tabindex", "-1")
    expect(screen.getByRole("button")).toHaveAttribute("aria-expanded", "true")
    fireEvent.click(screen.getByRole("button"))
    expect(onOpenChange).toHaveBeenCalledTimes(1)
    fireEvent.keyDown(screen.getByRole("button"), { key: "Enter" })
    fireEvent.keyDown(screen.getByRole("button"), { key: " " })
    expect(onOpenChange).toHaveBeenCalledTimes(1)
  })
})
