import { createRef } from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import {
  ButtonListAlignItems,
  ButtonListDirection,
  ButtonListJustifyContent,
} from "./buttonList.types"
import { ButtonList } from "./buttonList.web"

describe("ButtonList web", () => {
  it("renders default helpers and ordered children", () => {
    const ref = createRef<HTMLDivElement>()
    render(
      <ButtonList testId="list" id="id" ref={ref}>
        <button>Un</button>
        <button>Deux</button>
      </ButtonList>
    )
    const list = screen.getByTestId("list")
    expect(list).toHaveClass(
      "buttonList",
      "align-items-center",
      "flex-direction-column",
      "justify-content-center"
    )
    expect(list).toHaveTextContent("UnDeux")
    expect(list).toHaveAttribute("id", "id")
    expect(ref.current).toBe(list)
  })
  it.each(Object.values(ButtonListAlignItems))(
    "maps alignment %s",
    (alignItems) => {
      render(<ButtonList testId="list" alignItems={alignItems} />)
      expect(screen.getByTestId("list")).toHaveClass(
        `align-items-${alignItems}`
      )
    }
  )
  it.each(Object.values(ButtonListJustifyContent))(
    "maps justification %s",
    (justifyContent) => {
      render(<ButtonList testId="list" justifyContent={justifyContent} />)
      expect(screen.getByTestId("list")).toHaveClass(
        `justify-content-${justifyContent}`
      )
    }
  )
  it.each(Object.values(ButtonListDirection))(
    "maps direction %s",
    (direction) => {
      render(<ButtonList testId="list" direction={direction} wrap="wrap" />)
      expect(screen.getByTestId("list")).toHaveClass(
        `flex-direction-${direction}`,
        "flex-wrap-wrap"
      )
    }
  )
})
