import { fireEvent, render, screen } from "@testing-library/react-native"

import { theme } from "../../../constants/theme"
import { TrilogyContextProvider } from "../../../contexts/trilogyContext.native"
import { AccordionItem } from "../item/accordionItem.native"
import { AccordionHeader } from "./accordionHeader.native"

it("exposes and toggles the expanded accessibility state", async () => {
  await render(
    <AccordionItem>
      <AccordionHeader accessibilityLabel="Details">Label</AccordionHeader>
    </AccordionItem>
  )
  const button = screen.getByRole("button", { name: "Details" })
  expect(
    screen.getByRole("button", { name: "Details", expanded: false })
  ).toBeTruthy()
  await fireEvent.press(button)
  expect(
    screen.getByRole("button", { name: "Details", expanded: true })
  ).toBeTruthy()
})

it("keeps the item unpadded and makes the padded header interactive", async () => {
  await render(
    <AccordionItem testId="item">
      <AccordionHeader testId="header">Details</AccordionHeader>
    </AccordionItem>
  )
  expect(screen.getByTestId("item").props.style).not.toContainEqual(
    expect.objectContaining({ padding: theme.spacings.spacingMd })
  )
  expect(screen.getByTestId("header")).toHaveStyle({
    padding: theme.spacings.spacingMd,
  })
  await fireEvent.press(screen.getByTestId("header"))
  expect(screen.getByRole("button", { expanded: true })).toBeTruthy()
})

it("keeps caller header styles last", async () => {
  await render(
    <AccordionItem>
      <AccordionHeader testId="header" style={{ padding: 4 }}>
        Details
      </AccordionHeader>
    </AccordionItem>
  )
  expect(screen.getByTestId("header")).toHaveStyle({ padding: 4 })
})

it("uses the dark theme for disabled header text", async () => {
  await render(
    <TrilogyContextProvider mode="dark">
      <AccordionItem disabled>
        <AccordionHeader>Disabled</AccordionHeader>
      </AccordionItem>
    </TrilogyContextProvider>
  )
  expect(screen.getByText("Disabled")).toHaveStyle({
    color: theme.colors.dark.colorDisabled,
    fontSize: theme.fonts.fontSizeBase,
  })
})
