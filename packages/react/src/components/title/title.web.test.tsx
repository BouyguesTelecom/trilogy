import { createRef } from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import {
  TitleColor,
  TitleFontWeight,
  TitleLevel,
  TitleMarkup,
} from "./title.types"
import { Title } from "./title.web"

describe("Title web", () => {
  it.each([
    [TitleLevel.one, "one"],
    [TitleLevel.two, "two"],
    [TitleLevel.three, "three"],
    [TitleLevel.four, "four"],
    [TitleLevel.five, "five"],
    [TitleLevel.six, "six"],
  ])("renders level %s with matching heading and helpers", (level, name) => {
    render(<Title level={level}>Titre</Title>)
    expect(screen.getByRole("heading", { level })).toHaveClass(
      "title",
      name,
      level <= 2 ? "font-family-secondary" : "font-family-primary",
      level <= 2 ? "font-weight-medium" : "font-weight-semibold",
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

  it("falls back to level one", () => {
    render(<Title level={99 as TitleLevel}>Titre</Title>)
    expect(screen.getByRole("heading", { level: 1 })).toHaveClass("one")
  })
})
