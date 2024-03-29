import React from 'react'
import {
  Section,
  Title,
  TitleLevels,
  Divider,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
  Text,
  Spacer,
} from '@trilogy-ds/react/components'

export const AccordionScreen = (): JSX.Element => {
  return (
    <Section>
      <Title level={TitleLevels.TWO}>Base</Title>
      <Spacer size={10} />
      <Accordion>
        <AccordionItem id='UN' active={true}>
          <AccordionHeader>
            <Text>Hello World 1</Text>
          </AccordionHeader>
          <AccordionBody>
            <Text>Lorem ipsum dolor sit amet</Text>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem active={true} id='DEUX'>
          <AccordionHeader>
            <Text>Hello World 2</Text>
          </AccordionHeader>
          <AccordionBody>
            <Text>Lorem ipsum dolor sit amet</Text>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem disabled id='TROIS'>
          <AccordionHeader>
            <Text>Hello World 3</Text>
          </AccordionHeader>
          <AccordionBody>
            <Text>Lorem ipsum dolor sit amet</Text>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
      <Divider />

      <Title level={TitleLevels.TWO}>Inverted</Title>
      <Accordion inverted>
        <AccordionItem active={true}>
          <AccordionHeader>
            <Text>Hello World 1</Text>
          </AccordionHeader>
          <AccordionBody>
            <Text>Lorem ipsum dolor sit amet</Text>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader>
            <Text>Hello World 2</Text>
          </AccordionHeader>
          <AccordionBody>
            <Text>Lorem ipsum dolor sit amet</Text>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader>
            <Text>Hello World 3</Text>
          </AccordionHeader>
          <AccordionBody>
            <Text>Lorem ipsum dolor sit amet</Text>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </Section>
  )
}
