import { createRequire } from "node:module"
import { resolve } from "node:path"
import { createRef } from "react"
import { render, screen } from "@testing-library/react"
import { afterEach, beforeEach, describe, expect, it } from "vitest"

import { TrilogyContextProvider } from "../../contexts/trilogyContext.web"
import { Card } from "./card.web"
import { CardContent } from "./content/cardContent.web"

describe("Card web", () => {
  it("forwards its ref and style and keeps children in order", () => {
    const ref = createRef<HTMLDivElement>()
    render(
      <Card ref={ref} testId="card" style={{ opacity: 0.5 }}>
        <span>First</span>
        <span>Second</span>
      </Card>
    )
    const card = screen.getByTestId("card")
    expect(ref.current).toBe(card)
    expect(card).toHaveClass("card", "card-vertical")
    expect(card).toHaveStyle({ opacity: "0.5" })
    expect(screen.getByText("First").nextElementSibling).toBe(
      screen.getByText("Second")
    )
    expect(screen.getByText("First").parentElement).toBe(card)
  })

  it.each(["shadow", "outlined", "accent-start"] as const)(
    "renders the %s appearance",
    (appearance) => {
      render(
        <Card appearance={appearance} testId="card">
          Content
        </Card>
      )
      expect(screen.getByTestId("card")).toHaveClass(`card-${appearance}`)
    }
  )

  it("is vertical by default", () => {
    render(<Card testId="card">Content</Card>)
    expect(screen.getByTestId("card")).toHaveClass("card-vertical")
    expect(screen.getByTestId("card")).not.toHaveClass("card-horizontal")
  })

  it("adds no appearance class by default", () => {
    render(<Card testId="card">Content</Card>)
    expect(screen.getByTestId("card").className).not.toMatch(
      /card-(shadow|outlined|accent-start)/
    )
  })

  it.each(["vertical", "horizontal"] as const)(
    "renders the %s orientation without changing the appearance",
    (orientation) => {
      render(
        <Card orientation={orientation} appearance="outlined" testId="card">
          Content
        </Card>
      )
      expect(screen.getByTestId("card")).toHaveClass(
        `card-${orientation}`,
        "card-outlined"
      )
    }
  )

  it("adds no helper class without borderRadius or padding", () => {
    render(<Card testId="card">Content</Card>)
    expect(screen.getByTestId("card").className).not.toMatch(/radius-|spacing-/)
  })

  it.each([
    ["borderRadius", "md", "radius-md"],
    ["padding", "lg", "spacing-lg"],
  ] as const)("maps %s to its helper class", (prop, value, helper) => {
    render(
      <Card testId="card" {...{ [prop]: value }}>
        Content
      </Card>
    )
    expect(screen.getByTestId("card")).toHaveClass("card", helper)
  })

  it("hashes the helper classes exactly once", () => {
    render(
      <TrilogyContextProvider mangled hash="test">
        <Card testId="card" borderRadius="sm" padding="xs" className="extra">
          Content
        </Card>
      </TrilogyContextProvider>
    )
    expect(screen.getByTestId("card")).toHaveClass(
      "card_test",
      "radius-sm_test",
      "spacing-xs_test",
      "extra_test"
    )
  })
})

describe("Card web compiled styles", () => {
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

  it("keeps the default radius and no padding without helpers", () => {
    render(<Card testId="card">Content</Card>)
    const style = getComputedStyle(screen.getByTestId("card"))
    expect(style.borderRadius).toBe("24px")
    expect(style.padding).toBe("0px")
  })

  it.each([
    ["full", "9999px"],
    ["md", "16px"],
    ["sm", "8px"],
    ["none", "0px"],
  ] as const)(
    "lets the %s radius helper override the default radius only",
    (borderRadius, expected) => {
      render(
        <Card testId="card" borderRadius={borderRadius}>
          Content
        </Card>
      )
      const style = getComputedStyle(screen.getByTestId("card"))
      expect(style.borderRadius).toBe(expected)
      expect(style.padding).toBe("0px")
      expect(style.overflow).toBe("hidden")
      expect(style.display).toBe("flex")
    }
  )

  it.each([
    ["xs", "8px"],
    ["md", "16px"],
    ["none", "0px"],
  ] as const)(
    "applies the %s padding helper without changing the radius",
    (padding, expected) => {
      render(
        <Card testId="card" padding={padding}>
          Content
        </Card>
      )
      const style = getComputedStyle(screen.getByTestId("card"))
      expect(style.padding).toBe(expected)
      expect(style.borderRadius).toBe("24px")
    }
  )

  it("does not change the padding of its CardContent", () => {
    render(
      <Card testId="card" padding="md">
        <CardContent testId="content">Content</CardContent>
      </Card>
    )
    expect(getComputedStyle(screen.getByTestId("card")).padding).toBe("16px")
    expect(getComputedStyle(screen.getByTestId("content")).padding).toBe("16px")
  })

  it("keeps the caller style after the helpers", () => {
    render(
      <Card
        testId="card"
        borderRadius="sm"
        padding="lg"
        style={{ borderRadius: 3 }}
      >
        Content
      </Card>
    )
    const style = getComputedStyle(screen.getByTestId("card"))
    expect(style.padding).toBe("24px")
    expect(style.borderRadius).toBe("3px")
  })
})
