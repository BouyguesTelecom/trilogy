import { fireEvent, render, screen } from "@testing-library/react-native"

import { theme } from "../../../constants/theme"
import { TrilogyContextProvider } from "../../../contexts/trilogyContext.native"
import { AccordionBody } from "../body/accordionBody.native"
import { AccordionHeader } from "../header/accordionHeader.native"
import { AccordionItem } from "./accordionItem.native"

describe("AccordionItem native", () => {
  it("applies and removes the hover style", async () => {
    await render(
      <AccordionItem testId="item" defaultOpen>
        <AccordionHeader testId="header">Details</AccordionHeader>
        <AccordionBody testId="body">Content</AccordionBody>
      </AccordionItem>
    )
    const item = screen.getByTestId("item")
    await fireEvent(screen.getByTestId("body"), "pointerEnter", {
      nativeEvent: { pointerType: "mouse" },
    })
    expect(item).toHaveStyle({
      backgroundColor: theme.colors.light.backgroundPrimaryHover,
    })
    await fireEvent(item, "pointerLeave", {
      nativeEvent: { pointerType: "mouse" },
    })
    expect(item).toHaveStyle({
      backgroundColor: theme.colors.light.backgroundPrimary,
    })
    await fireEvent(item, "pointerEnter", {
      nativeEvent: { pointerType: "touch" },
    })
    expect(item).toHaveStyle({
      backgroundColor: theme.colors.light.backgroundPrimary,
    })
  })

  it("notifies controlled changes without opening until updated", async () => {
    const change = jest.fn()
    const tree = (open: boolean) => (
      <AccordionItem open={open} onOpenChange={change}>
        <AccordionHeader>Controlled</AccordionHeader>
      </AccordionItem>
    )
    const { rerender } = await render(tree(false))
    await fireEvent.press(screen.getByRole("button", { name: "Controlled" }))
    expect(change).toHaveBeenCalledWith(true)
    expect(
      screen.getByRole("button", { name: "Controlled", expanded: false })
    ).toBeTruthy()
    await rerender(tree(true))
    expect(
      screen.getByRole("button", { name: "Controlled", expanded: true })
    ).toBeTruthy()
  })

  it("allows multiple independent items to open", async () => {
    await render(
      <>
        <AccordionItem>
          <AccordionHeader>First</AccordionHeader>
          <AccordionBody>First body</AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader>Second</AccordionHeader>
          <AccordionBody>Second body</AccordionBody>
        </AccordionItem>
      </>
    )
    await fireEvent.press(screen.getByRole("button", { name: "First" }))
    await fireEvent.press(screen.getByRole("button", { name: "Second" }))
    expect(
      screen.getByRole("button", { name: "First", expanded: true })
    ).toBeTruthy()
    expect(
      screen.getByRole("button", { name: "Second", expanded: true })
    ).toBeTruthy()
  })

  it("preserves controlled and disabled behavior with dark theme styles", async () => {
    const change = jest.fn()
    await render(
      <TrilogyContextProvider mode="dark">
        <AccordionItem open disabled onOpenChange={change} testId="item">
          <AccordionHeader>Disabled</AccordionHeader>
          <AccordionBody>Body</AccordionBody>
        </AccordionItem>
      </TrilogyContextProvider>
    )
    expect(screen.getByTestId("item")).toHaveStyle({
      backgroundColor: theme.colors.dark.backgroundPrimarySubtle,
      borderColor: theme.colors.dark.borderDisabled,
    })
    const button = screen.getByRole("button", { name: "Disabled" })
    expect(button).toBeDisabled()
    await fireEvent.press(button)
    expect(change).not.toHaveBeenCalled()
  })
})
