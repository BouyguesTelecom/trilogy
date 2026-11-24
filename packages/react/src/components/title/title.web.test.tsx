import { createRef } from "react"
import { TrilogyContextProvider } from "@/contexts/trilogyContext.web"
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
    [TitleSize.xs, "title-size-xs"],
    [TitleSize.sm, "title-size-sm"],
    [TitleSize.base, "title-size-base"],
    [TitleSize.md, "title-size-md"],
    [TitleSize.lg, "title-size-lg"],
    [TitleSize.xl, "title-size-xl"],
    [TitleSize.xxl, "title-size-xxl"],
    [TitleSize.xxxl, "title-size-xxxl"],
    [TitleSize.xxxxl, "title-size-xxxxl"],
  ])("renders size %s with no implicit helper", (size, sizeClass) => {
    render(<Title size={size}>Titre</Title>)
    expect(screen.getByRole("heading", { level: 1 })).toHaveClass(
      "title",
      sizeClass
    )
    expect(screen.getByText("Titre")).not.toHaveClass(
      `font-size-${size}`,
      "text-primary",
      "font-weight-semibold",
      "font-weight-medium"
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
      "title-size-xxxxl"
    )
  })

  it("adds only explicitly supplied overrides and hashes once", () => {
    render(
      <TrilogyContextProvider mangled hash="test">
        <Title
          size={TitleSize.xxl}
          fontSize={TitleSize.sm}
          color={TitleColor.error}
          fontWeight={TitleFontWeight.bold}
          className="extra"
        >
          Titre
        </Title>
      </TrilogyContextProvider>
    )
    expect(screen.getByText("Titre")).toHaveClass(
      "title_test",
      "title-size-xxl_test",
      "font-size-sm_test",
      "text-error_test",
      "font-weight-bold_test",
      "extra_test"
    )
  })
})
