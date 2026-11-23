import { createRef } from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { TextColor, TextFontWeight, TextLevel, TextMarkup } from "./text.types"
import { Text } from "./text.web"

describe("Text web", () => {
  it("renders children and default helpers on a paragraph", () => {
    render(<Text>Bonjour</Text>)
    const text = screen.getByText("Bonjour")
    expect(text.tagName).toBe("P")
    expect(text).toHaveClass(
      "text",
      "one",
      "font-family-secondary",
      "text-primary",
      "font-weight-regular"
    )
  })

  it.each([
    [TextLevel.one, "one", "font-family-secondary"],
    [TextLevel.two, "two", "font-family-secondary"],
    [TextLevel.three, "three", "font-family-primary"],
    [TextLevel.four, "four", "font-family-primary"],
    [TextLevel.five, "five", "font-family-primary"],
    [TextLevel.six, "six", "font-family-primary"],
  ])("maps level %s to its classes", (level, levelClass, family) => {
    render(<Text level={level}>Texte</Text>)
    expect(screen.getByText("Texte")).toHaveClass(levelClass, family)
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

  it("falls back safely for an invalid level and markup", () => {
    render(
      <Text level={99 as TextLevel} markup={"invalid" as TextMarkup}>
        Texte
      </Text>
    )
    expect(screen.getByText("Texte")).toHaveClass("one")
    expect(screen.getByText("Texte").tagName).toBe("P")
  })
})
