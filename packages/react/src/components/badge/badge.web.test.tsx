import { createRequire } from "node:module"
import { resolve } from "node:path"
import { createRef } from "react"
import { render, screen } from "@testing-library/react"
import { afterEach, beforeEach, describe, expect, it } from "vitest"

import { TrilogyContextProvider } from "../../contexts/trilogyContext.web"
import { BadgeSize } from "./badge.types"
import { Badge } from "./badge.web"

describe("Badge web", () => {
  it("forwards its ref, id, style and children", () => {
    const ref = createRef<HTMLSpanElement>()
    render(
      <Badge
        ref={ref}
        testId="badge"
        id="b"
        className="extra"
        style={{ opacity: 0.5 }}
      >
        5
      </Badge>
    )
    const badge = screen.getByTestId("badge")
    expect(ref.current).toBe(badge)
    expect(badge).toHaveClass("badge", "extra")
    expect(badge).toHaveAttribute("id", "b")
    expect(badge).toHaveStyle({ opacity: "0.5" })
    expect(screen.getByText("5")).toBeInTheDocument()
  })

  it("is a default size badge with the secondary background by default", () => {
    render(<Badge testId="badge">5</Badge>)
    const badge = screen.getByTestId("badge")
    expect(badge).toHaveClass("badge-default", "bg-secondary", "text-inverse")
  })

  it("maps the small size", () => {
    render(
      <Badge testId="badge" size={BadgeSize.small}>
        5
      </Badge>
    )
    const badge = screen.getByTestId("badge")
    expect(badge).toHaveClass("badge-small")
    expect(badge).not.toHaveClass("badge-default")
  })

  it.each([
    ["error", "bg-error", "text-inverse"],
    ["warning", "bg-warning", "text-inverse"],
    ["information", "bg-information", "text-inverse"],
    ["brand", "bg-brand", "text-primary"],
    ["success-subtle", "bg-success-subtle", "text-primary"],
    ["background", "bg", "text-primary"],
  ] as const)(
    "maps the %s background and picks the readable text color",
    (background, helper, text) => {
      render(
        <Badge testId="badge" background={background}>
          5
        </Badge>
      )
      expect(screen.getByTestId("badge")).toHaveClass(helper, text)
    }
  )

  it("renders an icon", () => {
    render(
      <Badge testId="badge">
        <svg data-testid="icon" />
      </Badge>
    )
    expect(screen.getByTestId("badge")).toContainElement(
      screen.getByTestId("icon")
    )
  })

  it("hashes every class once", () => {
    render(
      <TrilogyContextProvider mangled hash="test">
        <Badge
          testId="badge"
          size={BadgeSize.small}
          background="error"
          className="extra"
        >
          5
        </Badge>
      </TrilogyContextProvider>
    )
    expect(screen.getByTestId("badge")).toHaveClass(
      "badge_test",
      "badge-small_test",
      "bg-error_test",
      "text-inverse_test",
      "extra_test"
    )
  })
})

describe("Badge web compiled styles", () => {
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

  it("is a fixed 24px pill that never wraps by default", () => {
    render(<Badge testId="badge">99+</Badge>)
    const style = getComputedStyle(screen.getByTestId("badge"))
    expect(style.display).toBe("inline-flex")
    expect(style.whiteSpace).toBe("nowrap")
    expect(style.height).toBe("24px")
    expect(style.minWidth).toBe("24px")
    expect(style.flexShrink).toBe("0")
    expect(style.fontSize).toBe("14px")
    expect(style.fontWeight).toBe("700")
    expect(style.backgroundColor).toBe("rgb(6, 43, 63)")
    expect(style.color).toBe("rgb(255, 255, 255)")
  })

  it("is a fixed 16px pill in the small size", () => {
    render(
      <Badge testId="badge" size={BadgeSize.small}>
        1
      </Badge>
    )
    const style = getComputedStyle(screen.getByTestId("badge"))
    expect(style.height).toBe("16px")
    expect(style.fontSize).toBe("12px")
    expect(style.minWidth).toBe("16px")
  })

  it("lets the helpers override the default background and text colors", () => {
    render(
      <Badge testId="badge" background="warning">
        1
      </Badge>
    )
    const style = getComputedStyle(screen.getByTestId("badge"))
    expect(style.backgroundColor).toBe("rgb(246, 187, 51)")
    expect(style.color).toBe("rgb(255, 255, 255)")
  })
})
