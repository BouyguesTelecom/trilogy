import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from '@trilogy-ds/react/lib/components/accordion'
import '@trilogy-ds/styles/dist/default/trilogy.css'
export default function Home() {
  return (
    <div>
      <main>
        <Accordion id='accordion-1'>
          <AccordionItem id='ONE'>
            <AccordionHeader>
              <p>Hello World 1</p>
            </AccordionHeader>
            <AccordionBody data-id='totooooo-test-id'>
              <p>Lorem ipsum dolor sit amet lorem</p>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem id='TWO'>
            <AccordionHeader>
              <p>Hello World 2</p>
            </AccordionHeader>
            <AccordionBody>
              <p>Lorem ipsum dolor sit amet</p>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem id='THREE'>
            <AccordionHeader>
              <p>Hello World 2</p>
            </AccordionHeader>
            <AccordionBody>
              <p>Collpased by default</p>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem disabled id='FOUR'>
            <AccordionHeader>
              <p>Hello World 3</p>
            </AccordionHeader>
            <AccordionBody>
              <p>Lorem ipsum dolor sit amet</p>
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      </main>
    </div>
  )
}
