import { render, screen } from "@testing-library/react-native"

import { CardImage } from "./cardImage.native"

it("renders an accessible image and requested ratio", async () => {
  await render(
    <CardImage
      src="https://example.com/image.png"
      alt="Example"
      aspectRatio={1}
      testId="image"
    />
  )
  expect(screen.getByTestId("image")).toHaveStyle({ aspectRatio: 1 })
  expect(screen.getByLabelText("Example")).toBeTruthy()
})
