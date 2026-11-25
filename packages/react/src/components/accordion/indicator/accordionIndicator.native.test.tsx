import { fireEvent, render, screen } from "@testing-library/react-native"
import { View } from "react-native"

import { AccordionHeader } from "../header/accordionHeader.native"
import { AccordionItem } from "../item/accordionItem.native"
import { AccordionIndicator } from "./accordionIndicator.native"

it("rotates the supplied icon when opened", async () => {
  await render(
    <AccordionItem>
      <AccordionHeader>
        Details
        <AccordionIndicator testId="indicator">
          <View testID="icon" />
        </AccordionIndicator>
      </AccordionHeader>
    </AccordionItem>
  )
  await fireEvent.press(screen.getByRole("button", { name: "Details" }))
  expect(
    screen.getByTestId("indicator", { includeHiddenElements: true })
  ).toHaveStyle({ transform: [{ rotate: "180deg" }] })
})

it("applies caller styles after the open indicator style", async () => {
  await render(
    <AccordionItem defaultOpen>
      <AccordionHeader>
        Details
        <AccordionIndicator
          testId="indicator"
          style={{ transform: [{ rotate: "90deg" }] }}
        >
          <View />
        </AccordionIndicator>
      </AccordionHeader>
    </AccordionItem>
  )
  expect(
    screen.getByTestId("indicator", { includeHiddenElements: true })
  ).toHaveStyle({ transform: [{ rotate: "90deg" }] })
})
