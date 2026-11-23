import { createRef } from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { TextColor, TextFontWeight, TextMarkup, TextSize } from "./text.types"
import { Text } from "./text.web"

describe("Text web", () => {
  it("renders children and default helpers on a paragraph", () => {
    render(<Text>Bonjour</Text>)
    const text = screen.getByText("Bonjour")
    expect(text.tagName).toBe("P")
    expect(text).toHaveClass(
      "text",
      "font-size-xxxxl",
      "font-family-secondary",
      "text-primary",
      "font-weight-regular"
    )
  })

  it.each([
    [TextSize.xs, "font-size-xs", "font-family-primary"],
    [TextSize.sm, "font-size-sm", "font-family-primary"],
    [TextSize.base, "font-size-base", "font-family-primary"],
    [TextSize.md, "font-size-md", "font-family-primary"],
    [TextSize.lg, "font-size-lg", "font-family-primary"],
    [TextSize.xl, "font-size-xl", "font-family-primary"],
    [TextSize.xxl, "font-size-xxl", "font-family-primary"],
    [TextSize.xxxl, "font-size-xxxl", "font-family-secondary"],
    [TextSize.xxxxl, "font-size-xxxxl", "font-family-secondary"],
  ])("maps size %s to its helpers", (size, sizeClass, family) => {
    render(<Text size={size}>Texte</Text>)
    expect(screen.getByText("Texte")).toHaveClass(sizeClass, family)
  })

  it.each(Object.values(TextColor))(
    "uses the %s text color helper",
    (color) => {
      render(<Text color={color}>Texte</Text>)
      expect(screen.getByText("Texte")).toHaveClass(`text-${color}`)
    }
  )

  it.each(Object.values(TextFontWeight))(
    "uses the %s font-weight helper",
    (fontWeight) => {
      render(<Text fontWeight={fontWeight}>Texte</Text>)
      expect(screen.getByText("Texte")).toHaveClass(`font-weight-${fontWeight}`)
    }
  )

  it("preserves markup, accessibility, id, class and ref", () => {
    const ref = createRef<HTMLElement>()
    render(
      <Text
        markup={TextMarkup.h2}
        accessibilityLabel="Titre accessible"
        id="titre"
        testId="text"
        className="extra"
        ref={ref}
      >
        Titre
      </Text>
    )
    const text = screen.getByRole("heading", {
      level: 2,
      name: "Titre accessible",
    })
    expect(text).toHaveAttribute("id", "titre")
    expect(text).toHaveClass("extra")
    expect(screen.getByTestId("text")).toBe(text)
    expect(ref.current).toBe(text)
  })

  it("falls back safely for an invalid size and markup", () => {
    render(
      <Text size={99 as unknown as TextSize} markup={"invalid" as TextMarkup}>
        Texte
      </Text>
    )
    expect(screen.getByText("Texte")).toHaveClass("font-size-xxxxl")
    expect(screen.getByText("Texte").tagName).toBe("P")
  })
})
