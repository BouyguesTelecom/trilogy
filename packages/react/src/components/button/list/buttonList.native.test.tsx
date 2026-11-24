import { render, screen } from "@testing-library/react-native"
import { Text } from "react-native"

import { ButtonList } from "./buttonList.native"
import {
  ButtonListAlignItems,
  ButtonListDirection,
  ButtonListJustifyContent,
} from "./buttonList.types"

describe("ButtonList native", () => {
  it("renders children and provided flex properties", async () => {
    await render(
      <ButtonList
        testId="list"
        alignItems={ButtonListAlignItems.flexEnd}
        justifyContent={ButtonListJustifyContent.spaceBetween}
        direction={ButtonListDirection.row}
        wrap="wrap"
      >
        <Text>Un</Text>
        <Text>Deux</Text>
      </ButtonList>
    )
    expect(screen.getByTestId("list")).toHaveStyle({
      alignItems: "flex-end",
      justifyContent: "space-between",
      flexDirection: "row",
      flexWrap: "wrap",
    })
    expect(screen.getByText("Un")).toBeTruthy()
    expect(screen.getByText("Deux")).toBeTruthy()
  })
  it.each(Object.values(ButtonListAlignItems))(
    "maps alignment %s",
    async (alignItems) => {
      await render(<ButtonList testId="list" alignItems={alignItems} />)
      expect(screen.getByTestId("list")).toHaveStyle({ alignItems })
    }
  )
  it.each(Object.values(ButtonListJustifyContent))(
    "maps justification %s",
    async (justifyContent) => {
      await render(<ButtonList testId="list" justifyContent={justifyContent} />)
      expect(screen.getByTestId("list")).toHaveStyle({ justifyContent })
    }
  )
  it.each(Object.values(ButtonListDirection))(
    "maps direction %s",
    async (direction) => {
      await render(
        <ButtonList testId="list" direction={direction} wrap="nowrap" />
      )
      expect(screen.getByTestId("list")).toHaveStyle({
        flexDirection: direction,
        flexWrap: "nowrap",
      })
    }
  )

  it("applies a caller-provided native style", async () => {
    await render(<ButtonList testId="list" style={{ opacity: 0.5 }} />)
    expect(screen.getByTestId("list")).toHaveStyle({ opacity: 0.5 })
  })
})
