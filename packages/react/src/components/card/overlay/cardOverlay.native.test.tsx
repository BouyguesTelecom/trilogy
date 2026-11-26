import { render, screen } from "@testing-library/react-native"
import { Text } from "react-native"

import { CardOverlay } from "./cardOverlay.native"

it.each([
  ["start", "flex-start"],
  ["center", "center"],
  ["end", "flex-end"],
] as const)("aligns %s and permits overhang", async (align, justifyContent) => {
  await render(
    <CardOverlay align={align} testId="overlay">
      Badge
    </CardOverlay>
  )
  expect(screen.getByTestId("overlay")).toHaveStyle({
    justifyContent,
    transform: [{ translateY: "-50%" }],
  })
  expect(screen.getByTestId("overlay").props.pointerEvents).toBe("box-none")
  expect(screen.getByText("Badge")).toBeTruthy()
})
