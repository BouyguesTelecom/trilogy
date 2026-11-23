import { act, fireEvent, render, screen } from "@testing-library/react-native"

import { Pressable } from "./pressable.native"

describe("Pressable native", () => {
  afterEach(() => jest.useRealTimers())
  it("applies a temporary pressed style and invokes the handler", async () => {
    jest.useFakeTimers()
    const onPress = jest.fn()
    const { unmount } = await render(
      <Pressable
        testID="pressable"
        onPress={onPress}
        pressedDuration={200}
        style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
      />
    )
    const pressable = screen.getByTestId("pressable")
    expect(pressable).toHaveStyle({ opacity: 1 })
    await fireEvent.press(pressable)
    expect(onPress).toHaveBeenCalledTimes(1)
    expect(pressable).toHaveStyle({ opacity: 0.5 })
    await act(() => {
      jest.advanceTimersByTime(200)
    })
    expect(pressable).toHaveStyle({ opacity: 1 })
    await unmount()
  })
})
