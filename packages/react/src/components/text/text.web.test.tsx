import { createRef } from "react"
import { TrilogyContextProvider } from "@/contexts/trilogyContext.web"
import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { TextColor, TextFontWeight, TextMarkup, TextSize } from "./text.types"
import { Text } from "./text.web"

describe("Text web", () => {
  it("renders default variant without helper overrides", () => {
    render(<Text>Bonjour</Text>)
    const text = screen.getByText("Bonjour")
    expect(text.tagName).toBe("P")
    expect(text).toHaveClass("text", "text-size-xxxxl")
    expect(text).not.toHaveClass(
      "font-size-xxxxl",
      "text-primary",
      "font-weight-regular"
    )
  })

  it.each([
    [TextSize.xs, "text-size-xs"],
    [TextSize.sm, "text-size-sm"],
    [TextSize.base, "text-size-base"],
    [TextSize.md, "text-size-md"],
    [TextSize.lg, "text-size-lg"],
    [TextSize.xl, "text-size-xl"],
    [TextSize.xxl, "text-size-xxl"],
    [TextSize.xxxl, "text-size-xxxl"],
    [TextSize.xxxxl, "text-size-xxxxl"],
  ])("maps size %s to its variant class", (size, sizeClass) => {
    render(<Text size={size}>Texte</Text>)
    expect(screen.getByText("Texte")).toHaveClass(sizeClass)
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
    expect(screen.getByText("Texte")).toHaveClass("text-size-xxxxl")
    expect(screen.getByText("Texte").tagName).toBe("P")
  })

  it("adds explicit overrides and hashes once", () => {
    render(
      <TrilogyContextProvider mangled hash="test">
        <Text
          size={TextSize.xxl}
          fontSize={TextSize.sm}
          color={TextColor.error}
          fontWeight={TextFontWeight.bold}
          className="extra"
        >
          Texte
        </Text>
      </TrilogyContextProvider>
    )
    expect(screen.getByText("Texte")).toHaveClass(
      "text_test",
      "text-size-xxl_test",
      "font-size-sm_test",
      "text-error_test",
      "font-weight-bold_test",
      "extra_test"
    )
  })
})
