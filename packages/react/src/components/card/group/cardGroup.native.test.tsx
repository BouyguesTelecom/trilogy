import { render, screen } from "@testing-library/react-native"
import { Text } from "react-native"

import { CardGroup } from "./cardGroup.native"

it("renders its children and applies the caller style", async () => {
  await render(
    <CardGroup testId="group" style={{ opacity: 0.5 }}>
      <Text>Child</Text>
    </CardGroup>
  )
  expect(screen.getByText("Child")).toBeTruthy()
  expect(screen.getByTestId("group")).toHaveStyle({ opacity: 0.5 })
})
