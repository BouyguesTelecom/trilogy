import { render, screen } from "@testing-library/react-native"
import { Text } from "react-native"

import { Card } from "./card.native"
import { CardOverlay } from "./overlay/cardOverlay.native"

it("renders its content and overlay", async () => {
  await render(
    <Card testId="card">
      <CardOverlay>
        <Text>Badge</Text>
      </CardOverlay>
      <Text>Content</Text>
    </Card>
  )
  expect(screen.getByText("Badge")).toBeTruthy()
  expect(screen.getByText("Content")).toBeTruthy()
})
