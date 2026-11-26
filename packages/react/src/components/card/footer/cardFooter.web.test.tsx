import { createRequire } from "node:module"
import { resolve } from "node:path"
import { createRef } from "react"
import { render, screen } from "@testing-library/react"
import { afterEach, beforeEach, describe, expect, it } from "vitest"

import { TrilogyContextProvider } from "../../../contexts/trilogyContext.web"
import { CardFooter } from "./cardFooter.web"

describe("CardFooter web", () => {
  it("forwards its ref, id, style and children", () => {
    const ref = createRef<HTMLDivElement>()
    render(
      <CardFooter
        ref={ref}
        testId="footer"
        id="f"
        className="extra"
        style={{ opacity: 0.5 }}
      >
        Footer
      </CardFooter>
    )
    const footer = screen.getByTestId("footer")
    expect(ref.current).toBe(footer)
    expect(footer).toHaveClass("cardFooter", "extra")
    expect(footer).toHaveAttribute("id", "f")
    expect(footer).toHaveStyle({ opacity: "0.5" })
    expect(screen.getByText("Footer")).toBeInTheDocument()
  })

  it("adds no helper or filled class by default", () => {
    render(<CardFooter testId="footer">Footer</CardFooter>)
    expect(screen.getByTestId("footer").className).not.toMatch(
      /bg|spacing-|filled/
    )
  })

  it.each([
    ["secondary", "bg-secondary"],
    ["background", "bg"],
  ] as const)(
    "maps the %s background to its helper and marks the footer filled",
    (background, helper) => {
      render(
        <CardFooter testId="footer" background={background}>
          Footer
        </CardFooter>
      )
      expect(screen.getByTestId("footer")).toHaveClass(
        "cardFooter",
        "cardFooter-filled",
        helper
      )
    }
  )

  it("maps padding to its helper class and hashes every class once", () => {
    render(
      <TrilogyContextProvider mangled hash="test">
        <CardFooter
          testId="footer"
          padding="lg"
          background="secondary"
          className="extra"
        >
          Footer
        </CardFooter>
      </TrilogyContextProvider>
    )
    expect(screen.getByTestId("footer")).toHaveClass(
      "cardFooter_test",
      "cardFooter-filled_test",
      "bg-secondary_test",
      "spacing-lg_test",
      "extra_test"
    )
  })
})

describe("CardFooter web compiled styles", () => {
  let stylesheet: HTMLStyleElement
  beforeEach(() => {
    const stylesRoot = resolve(process.cwd(), "../styles")
    const require = createRequire(resolve(stylesRoot, "package.json"))
    const sass = require("sass") as {
      compile: (path: string) => { css: string }
    }
    stylesheet = document.createElement("style")
    stylesheet.textContent = sass.compile(
      resolve(stylesRoot, "src/trilogy.scss")
    ).css
    document.head.append(stylesheet)
  })
  afterEach(() => stylesheet.remove())

  it("separates with a default top border and keeps the md padding", () => {
    render(<CardFooter testId="footer">Footer</CardFooter>)
    const style = getComputedStyle(screen.getByTestId("footer"))
    expect(style.borderTopWidth).toBe("1px")
    expect(style.borderTopStyle).toBe("solid")
    expect(style.borderTopColor).toBe("rgb(187, 198, 205)")
    expect(style.padding).toBe("16px")
    expect(style.backgroundColor).toBe("rgb(255, 255, 255)")
  })

  it("lets the background helper win and makes the border blend with it", () => {
    render(
      <CardFooter testId="footer" background="secondary">
        Footer
      </CardFooter>
    )
    const style = getComputedStyle(screen.getByTestId("footer"))
    expect(style.backgroundColor).toBe("rgb(6, 43, 63)")
    expect(style.borderTopWidth).toBe("1px")
    expect(["transparent", "rgba(0, 0, 0, 0)"]).toContain(style.borderTopColor)
  })

  it.each([
    ["xxxl", "40px"],
    ["xs", "8px"],
    ["none", "0px"],
  ] as const)(
    "lets the %s padding helper override only the padding",
    (padding, expected) => {
      render(
        <CardFooter testId="footer" padding={padding}>
          Footer
        </CardFooter>
      )
      const style = getComputedStyle(screen.getByTestId("footer"))
      expect(style.padding).toBe(expected)
      expect(style.borderTopWidth).toBe("1px")
    }
  )
})
