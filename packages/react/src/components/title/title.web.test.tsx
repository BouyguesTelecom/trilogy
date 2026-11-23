import { createRef } from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import {
  TitleColor,
  TitleFontWeight,
  TitleMarkup,
  TitleSize,
} from "./title.types"
import { Title } from "./title.web"

describe("Title web", () => {
  it.each([
    [TitleSize.xs, "font-size-xs"],
    [TitleSize.sm, "font-size-sm"],
    [TitleSize.base, "font-size-base"],
    [TitleSize.md, "font-size-md"],
    [TitleSize.lg, "font-size-lg"],
    [TitleSize.xl, "font-size-xl"],
    [TitleSize.xxl, "font-size-xxl"],
    [TitleSize.xxxl, "font-size-xxxl"],
    [TitleSize.xxxxl, "font-size-xxxxl"],
  ])("renders size %s with matching heading and helpers", (size, sizeClass) => {
    render(<Title size={size}>Titre</Title>)
    expect(screen.getByRole("heading", { level: 1 })).toHaveClass(
      "title",
      sizeClass,
      size === TitleSize.xxxl || size === TitleSize.xxxxl
        ? "font-family-secondary"
        : "font-family-primary",
      size === TitleSize.xxxl || size === TitleSize.xxxxl
        ? "font-weight-medium"
        : "font-weight-semibold",
      "text-primary"
    )
  })

  it.each(Object.values(TitleColor))("applies %s color", (color) => {
    render(<Title color={color}>Titre</Title>)
    expect(screen.getByText("Titre")).toHaveClass(`text-${color}`)
  })

  it.each(Object.values(TitleFontWeight))("applies %s weight", (fontWeight) => {
    render(<Title fontWeight={fontWeight}>Titre</Title>)
    expect(screen.getByText("Titre")).toHaveClass(`font-weight-${fontWeight}`)
  })

  it("preserves custom markup, identifiers, accessibility and ref", () => {
    const ref = createRef<HTMLHeadingElement>()
    render(
      <Title
        markup={TitleMarkup.p}
        id="title"
        testId="title"
        accessibilityLabel="Accessible"
        className="extra"
        ref={ref}
      >
        Texte
      </Title>
    )
    const title = screen.getByTestId("title")
    expect(title.tagName).toBe("P")
    expect(title).toHaveAttribute("aria-label", "Accessible")
    expect(title).toHaveAttribute("id", "title")
    expect(title).toHaveClass("extra")
    expect(ref.current).toBe(title)
  })

  it("falls back to size xxxxl", () => {
    render(<Title size={99 as unknown as TitleSize}>Titre</Title>)
    expect(screen.getByRole("heading", { level: 1 })).toHaveClass(
      "font-size-xxxxl"
    )
  })
})
