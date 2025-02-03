import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Divider,
  Section,
  Spacer,
  SpacerSize,
  Text,
  Title,
  TitleLevels,
} from '@trilogy-ds/react'

export default function Home() {
  return (
    <main>
      <Section>
        <Title level={TitleLevels.TWO}>Base</Title>
        <Spacer size={SpacerSize.THREE} />
        <Accordion id='accordion-1'>
          <AccordionItem id='ONE' open>
            <AccordionHeader>
              <Title level={6}>Hello World 1</Title>
            </AccordionHeader>
            <AccordionBody data-id='totooooo-test-id'>
              <Text>Accordion Body 1</Text>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem id='TWO'>
            <AccordionHeader>
              <Title level={6}>Hello World 2</Title>
            </AccordionHeader>
            <AccordionBody>
              <Text>Accordion Body 2</Text>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem id='THREE'>
            <AccordionHeader>
              <Title level={6}>Hello World 3</Title>
            </AccordionHeader>
            <AccordionBody>
              <Text>Accordion Body 3</Text>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem disabled id='FOUR'>
            <AccordionHeader>
              <Title level={6}>Hello World 4</Title>
            </AccordionHeader>
            <AccordionBody>
              <Text>Accordion Body 4</Text>
            </AccordionBody>
          </AccordionItem>
        </Accordion>

        <Divider />
      </Section>
    </main>
  )
}
