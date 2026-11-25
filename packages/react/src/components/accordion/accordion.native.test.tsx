import { render, screen } from "@testing-library/react-native"
import { Text } from "react-native"

import { theme } from "../../constants/theme"
import { Accordion } from "./accordion.native"

it("renders its children and caller style on Native", async () => {
  await render(
    <Accordion testId="group" style={{ opacity: 0.5 }}>
      <Text>Contents</Text>
    </Accordion>
  )
  expect(screen.getByText("Contents")).toBeTruthy()
  expect(screen.getByTestId("group")).toHaveStyle({
    gap: theme.spacings.spacingSm,
    opacity: 0.5,
  })
})
