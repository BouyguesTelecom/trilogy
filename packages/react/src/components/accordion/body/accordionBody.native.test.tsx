import { fireEvent, render, screen } from "@testing-library/react-native"

import { theme } from "../../../constants/theme"
import { TrilogyContextProvider } from "../../../contexts/trilogyContext.native"
import { AccordionHeader } from "../header/accordionHeader.native"
import { AccordionItem } from "../item/accordionItem.native"
import { AccordionBody } from "./accordionBody.native"

it("reveals the body after the item is opened", async () => {
  await render(
    <AccordionItem>
      <AccordionHeader>Details</AccordionHeader>
      <AccordionBody testId="body">Content</AccordionBody>
    </AccordionItem>
  )
  await fireEvent.press(screen.getByRole("button", { name: "Details" }))
  expect(screen.getByTestId("body")).toHaveTextContent("Content")
  expect(screen.getByTestId("body")).toHaveStyle({
    paddingHorizontal: theme.spacings.spacingMd,
    paddingBottom: theme.spacings.spacingMd,
  })
})

it("uses dark text and preserves a caller padding override", async () => {
  await render(
    <TrilogyContextProvider mode="dark">
      <AccordionItem defaultOpen>
        <AccordionHeader>Details</AccordionHeader>
        <AccordionBody testId="body" style={{ paddingBottom: 4 }}>
          Content
        </AccordionBody>
      </AccordionItem>
    </TrilogyContextProvider>
  )
  expect(screen.getByTestId("body")).toHaveStyle({ paddingBottom: 4 })
  expect(screen.getByText("Content")).toHaveStyle({
    color: theme.colors.dark.colorPrimary,
    fontSize: theme.fonts.fontSizeBase,
  })
})
