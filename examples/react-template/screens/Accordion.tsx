import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Column,
  Columns,
  Divider,
  Section,
  Spacer,
  SpacerSize,
  Text,
  Title,
  TitleLevels,
} from '@trilogy-ds/react/components'
import * as React from 'react'

export const AccordionScreen = (): JSX.Element => {
  return (
    <Section>
      <Spacer size={3} />
      <Title level={TitleLevels.TWO}>Base</Title>
      <Spacer size={SpacerSize.THREE} />
      <Accordion id='accordion-1'>
        <AccordionItem id='ONE' open>
          <AccordionHeader>
            <Title level={6}>Hello World 1</Title>
          </AccordionHeader>
          <AccordionBody data-id='totooooo-test-id'>
            <Columns>
              <Column>
                <Text>Accordion Body 1</Text>
              </Column>
            </Columns>
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
  )
}
