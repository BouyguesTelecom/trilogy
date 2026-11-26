import { createRequire } from "node:module"
import { resolve } from "node:path"
import { createRef } from "react"
import { render, screen } from "@testing-library/react"
import { afterEach, beforeEach, describe, expect, it } from "vitest"

import { TrilogyContextProvider } from "../../../contexts/trilogyContext.web"
import { Badge } from "../badge.web"
import { BadgeAnchorPosition } from "./badgeAnchor.types"
import { BadgeAnchor } from "./badgeAnchor.web"

describe("BadgeAnchor web", () => {
  it("forwards its ref, id, style and children", () => {
    const ref = createRef<HTMLDivElement>()
    render(
      <BadgeAnchor
        ref={ref}
        testId="anchor"
        id="a"
        className="extra"
        style={{ opacity: 0.5 }}
      >
        <span>Avatar</span>
      </BadgeAnchor>
    )
    const anchor = screen.getByTestId("anchor")
    expect(ref.current).toBe(anchor)
    expect(anchor).toHaveClass("badgeAnchor", "extra")
    expect(anchor).toHaveAttribute("id", "a")
    expect(anchor).toHaveStyle({ opacity: "0.5" })
    expect(screen.getByText("Avatar")).toBeInTheDocument()
  })

  it("sits on the top right corner by default", () => {
    render(<BadgeAnchor testId="anchor" />)
    expect(screen.getByTestId("anchor")).toHaveClass("badgeAnchor-top-right")
  })

  it.each(Object.values(BadgeAnchorPosition))(
    "maps the %s position",
    (position) => {
      render(<BadgeAnchor testId="anchor" position={position} />)
      expect(screen.getByTestId("anchor")).toHaveClass(
        `badgeAnchor-${position}`
      )
    }
  )

  it("hashes every class once", () => {
    render(
      <TrilogyContextProvider mangled hash="test">
        <BadgeAnchor
          testId="anchor"
          position={BadgeAnchorPosition.bottomLeft}
          className="extra"
        />
      </TrilogyContextProvider>
    )
    expect(screen.getByTestId("anchor")).toHaveClass(
      "badgeAnchor_test",
      "badgeAnchor-bottom-left_test",
      "extra_test"
    )
  })
})

describe("BadgeAnchor web compiled styles", () => {
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

  it("wraps its content and positions the badge out of the flow", () => {
    render(
      <BadgeAnchor testId="anchor">
        <span>Avatar</span>
        <Badge testId="badge">5</Badge>
      </BadgeAnchor>
    )
    const anchor = getComputedStyle(screen.getByTestId("anchor"))
    expect(anchor.position).toBe("relative")
    expect(anchor.display).toBe("inline-flex")
    const badge = getComputedStyle(screen.getByTestId("badge"))
    expect(badge.position).toBe("absolute")
    expect(badge.top).toBe("0px")
    expect(badge.right).toBe("0px")
    expect(badge.transform).toBe("translate(25%, -25%)")
  })

  it.each([
    [BadgeAnchorPosition.topLeft, "top", "left", "translate(-25%, -25%)"],
    [BadgeAnchorPosition.bottomLeft, "bottom", "left", "translate(-25%, 25%)"],
    [BadgeAnchorPosition.bottomRight, "bottom", "right", "translate(25%, 25%)"],
  ] as const)(
    "places the badge on the %s corner",
    (position, vertical, horizontal, transform) => {
      render(
        <BadgeAnchor testId="anchor" position={position}>
          <Badge testId="badge">5</Badge>
        </BadgeAnchor>
      )
      const badge = getComputedStyle(screen.getByTestId("badge"))
      expect(badge[vertical]).toBe("0px")
      expect(badge[horizontal]).toBe("0px")
      expect(badge.transform).toBe(transform)
    }
  )
})
