import { createRequire } from "node:module"
import { resolve } from "node:path"
import { createRef } from "react"
import { render, screen } from "@testing-library/react"
import { afterEach, beforeEach, describe, expect, it } from "vitest"

import { TrilogyContextProvider } from "../../contexts/trilogyContext.web"
import { Sticker } from "./sticker.web"

describe("Sticker web", () => {
  it("forwards its ref, id, style and children", () => {
    const ref = createRef<HTMLSpanElement>()
    render(
      <Sticker
        ref={ref}
        testId="sticker"
        id="s"
        className="extra"
        style={{ opacity: 0.5 }}
      >
        Promo
      </Sticker>
    )
    const sticker = screen.getByTestId("sticker")
    expect(ref.current).toBe(sticker)
    expect(sticker).toHaveClass("sticker", "extra")
    expect(sticker).toHaveAttribute("id", "s")
    expect(sticker).toHaveStyle({ opacity: "0.5" })
    expect(screen.getByText("Promo")).toBeInTheDocument()
  })

  it("is a default size sticker with the secondary background by default", () => {
    render(<Sticker testId="sticker">Promo</Sticker>)
    expect(screen.getByTestId("sticker")).toHaveClass(
      "sticker-default",
      "bg-secondary",
      "text-inverse"
    )
  })

  it("maps the small size", () => {
    render(
      <Sticker testId="sticker" size="small">
        Promo
      </Sticker>
    )
    expect(screen.getByTestId("sticker")).toHaveClass("sticker-small")
    expect(screen.getByTestId("sticker")).not.toHaveClass("sticker-default")
  })

  it.each([
    ["secondary", "bg-secondary", "text-inverse"],
    ["accent", "bg-accent", "text-inverse"],
    ["success", "bg-success", "text-inverse"],
    ["warning", "bg-warning", "text-inverse"],
    ["information", "bg-information", "text-inverse"],
    ["brand", "bg-brand", "text-primary"],
    ["primary-subtle", "bg-primary-subtle", "text-primary"],
    ["background", "bg", "text-primary"],
  ] as const)(
    "maps the %s background and picks the readable text color",
    (background, helper, text) => {
      render(
        <Sticker testId="sticker" background={background}>
          Promo
        </Sticker>
      )
      expect(screen.getByTestId("sticker")).toHaveClass(helper, text)
    }
  )

  it("renders an icon next to the text", () => {
    render(
      <Sticker testId="sticker">
        <svg data-testid="icon" />
        Promo
      </Sticker>
    )
    expect(screen.getByTestId("sticker")).toContainElement(
      screen.getByTestId("icon")
    )
    expect(screen.getByText("Promo")).toBeInTheDocument()
  })

  it("hashes every class once", () => {
    render(
      <TrilogyContextProvider mangled hash="test">
        <Sticker
          testId="sticker"
          size="small"
          background="accent"
          className="extra"
        >
          Promo
        </Sticker>
      </TrilogyContextProvider>
    )
    expect(screen.getByTestId("sticker")).toHaveClass(
      "sticker_test",
      "sticker-small_test",
      "bg-accent_test",
      "text-inverse_test",
      "extra_test"
    )
  })
})

describe("Sticker web compiled styles", () => {
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

  it("is a fixed 32px pill that never wraps by default", () => {
    render(<Sticker testId="sticker">Promo</Sticker>)
    const style = getComputedStyle(screen.getByTestId("sticker"))
    expect(style.display).toBe("inline-flex")
    expect(style.whiteSpace).toBe("nowrap")
    expect(style.height).toBe("32px")
    expect(style.flexShrink).toBe("0")
    expect(style.fontSize).toBe("16px")
    expect(style.fontWeight).toBe("700")
    expect(style.paddingLeft).toBe("16px")
    expect(style.backgroundColor).toBe("rgb(6, 43, 63)")
    expect(style.color).toBe("rgb(255, 255, 255)")
  })

  it("is a fixed 24px pill in the small size", () => {
    render(
      <Sticker testId="sticker" size="small">
        Promo
      </Sticker>
    )
    const style = getComputedStyle(screen.getByTestId("sticker"))
    expect(style.height).toBe("24px")
    expect(style.fontSize).toBe("12px")
    expect(style.paddingLeft).toBe("12px")
    expect(style.whiteSpace).toBe("nowrap")
  })

  it("lets the helpers override the default background and text colors", () => {
    render(
      <Sticker testId="sticker" background="warning">
        Promo
      </Sticker>
    )
    const style = getComputedStyle(screen.getByTestId("sticker"))
    expect(style.backgroundColor).toBe("rgb(246, 187, 51)")
    expect(style.color).toBe("rgb(255, 255, 255)")
  })
})
