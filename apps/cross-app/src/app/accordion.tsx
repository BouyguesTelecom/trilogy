import { IconChevronDown } from "@/components"
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionIndicator,
  AccordionItem,
} from "@trilogy-ds/react"

import { Wrapper } from "../components/wrapper"

export default function AccordionScreen() {
  return (
    <>
      <Wrapper title="Accordion">
        <Accordion>
          <AccordionItem>
            <AccordionHeader>
              Details
              <AccordionIndicator>
                <IconChevronDown />
              </AccordionIndicator>
            </AccordionHeader>
            <AccordionBody>More information about this item.</AccordionBody>
          </AccordionItem>
          <AccordionItem disabled>
            <AccordionHeader>
              Details
              <AccordionIndicator>
                <IconChevronDown />
              </AccordionIndicator>
            </AccordionHeader>
          </AccordionItem>
        </Accordion>
      </Wrapper>
    </>
  )
}
