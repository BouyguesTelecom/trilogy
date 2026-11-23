import { fireEvent, render, screen } from "@testing-library/react-native"

import { Button } from "./button.native"

describe("Button native", () => {
  it("renders accessible content and triggers a press", async () => {
    const onClick = jest.fn()
    await render(
      <Button accessibilityLabel="Valider" onClick={onClick}>
        Envoyer
      </Button>
    )
    const button = screen.getByRole("button", { name: "Valider" })
    expect(screen.getByText("Envoyer")).toBeTruthy()
    await fireEvent.press(button)
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it("does not trigger a disabled button", async () => {
    const onClick = jest.fn()
    await render(
      <Button accessibilityLabel="Valider" disabled onClick={onClick}>
        Envoyer
      </Button>
    )
    const button = screen.getByRole("button", { name: "Valider" })
    expect(button).toBeDisabled()
    await fireEvent.press(button)
    expect(onClick).not.toHaveBeenCalled()
  })
})
