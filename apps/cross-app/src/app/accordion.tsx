import { IconChevronDown } from "@/components"
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "@trilogy-ds/react"

import { Wrapper } from "../components/wrapper"

export default function AccordionScreen() {
  return (
    <>
      <Wrapper title="Accordion">
        <Accordion>
          <AccordionItem>
            <AccordionHeader expandIcon={<IconChevronDown />}>
              Details
            </AccordionHeader>
            <AccordionBody>More information about this item.</AccordionBody>
          </AccordionItem>
          <AccordionItem disabled>
            <AccordionHeader expandIcon={<IconChevronDown />}>
              Details
            </AccordionHeader>
          </AccordionItem>
        </Accordion>
      </Wrapper>
    </>
  )
}
