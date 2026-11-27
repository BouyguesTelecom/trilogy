import { Accordion } from "./accordion.web"
import { AccordionBody } from "./body/accordionBody.web"
import { AccordionHeader } from "./header/accordionHeader.web"
import { AccordionItem } from "./item/accordionItem.web"

const meta: {
  title: string
  component: typeof Accordion
  subcomponents: {
    AccordionItem: typeof AccordionItem
    AccordionHeader: typeof AccordionHeader
    AccordionBody: typeof AccordionBody
  }
} = {
  title: "Components/Accordion",
  component: Accordion,
  subcomponents: {
    AccordionItem,
    AccordionHeader,
    AccordionBody,
  },
}
export default meta

const Chevron = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
)

export const Composition: { render: () => React.JSX.Element } = {
  render: () => (
    <Accordion>
      <AccordionItem defaultOpen>
        <AccordionHeader expandIcon={<Chevron />}>
          First section
        </AccordionHeader>
        <AccordionBody>First content.</AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader expandIcon={<Chevron />}>
          Second section
        </AccordionHeader>
        <AccordionBody>Second content.</AccordionBody>
      </AccordionItem>
    </Accordion>
  ),
}

export const Disabled: { render: () => React.JSX.Element } = {
  render: () => (
    <Accordion>
      <AccordionItem disabled>
        <AccordionHeader expandIcon={<Chevron />}>Disabled</AccordionHeader>
        <AccordionBody>Unavailable content.</AccordionBody>
      </AccordionItem>
    </Accordion>
  ),
}
