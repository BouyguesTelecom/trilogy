import { createRequire } from "node:module"
import { resolve } from "node:path"
import { render, screen } from "@testing-library/react"
import { afterEach, beforeEach, describe, expect, it } from "vitest"

import { TrilogyContextProvider } from "../../../contexts/trilogyContext.web"
import { CardContent } from "./cardContent.web"

it("renders content and semantic background", () => {
  render(
    <CardContent background="secondary" testId="content">
      Content
    </CardContent>
  )
  expect(screen.getByTestId("content")).toHaveClass(
    "cardContent",
    "bg-secondary"
  )
})
it("uses the base background helper", () => {
  render(
    <CardContent background="background" testId="content">
      Content
    </CardContent>
  )
  expect(screen.getByTestId("content")).toHaveClass("bg")
})

it("adds no padding helper class by default", () => {
  render(<CardContent testId="content">Content</CardContent>)
  expect(screen.getByTestId("content").className).not.toMatch(/spacing-/)
})

it("maps padding to its helper class and hashes it once", () => {
  render(
    <TrilogyContextProvider mangled hash="test">
      <CardContent testId="content" padding="md" className="extra">
        Content
      </CardContent>
    </TrilogyContextProvider>
  )
  expect(screen.getByTestId("content")).toHaveClass(
    "cardContent_test",
    "spacing-md_test",
    "extra_test"
  )
})

describe("CardContent web compiled styles", () => {
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

  it("keeps the md padding and primary background without helpers", () => {
    render(<CardContent testId="content">Content</CardContent>)
    const style = getComputedStyle(screen.getByTestId("content"))
    expect(style.padding).toBe("16px")
    expect(style.backgroundColor).toBe("rgb(255, 255, 255)")
  })

  it.each([
    ["xxxl", "40px"],
    ["md", "16px"],
    ["xs", "8px"],
    ["none", "0px"],
  ] as const)(
    "lets the %s padding helper override only the padding",
    (padding, expected) => {
      render(
        <CardContent testId="content" padding={padding}>
          Content
        </CardContent>
      )
      const style = getComputedStyle(screen.getByTestId("content"))
      expect(style.padding).toBe(expected)
      expect(style.backgroundColor).toBe("rgb(255, 255, 255)")
    }
  )

  it("combines the padding and background helpers", () => {
    render(
      <CardContent testId="content" padding="sm" background="secondary">
        Content
      </CardContent>
    )
    const style = getComputedStyle(screen.getByTestId("content"))
    expect(style.padding).toBe("12px")
    expect(style.backgroundColor).toBe("rgb(6, 43, 63)")
  })
})
