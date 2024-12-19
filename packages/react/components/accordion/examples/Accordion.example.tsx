import Accordion from '@/components/accordion/Accordion'
import AccordionItem from '@/components/accordion/item'
import AccordionBody from '@/components/accordion/item/body'
import AccordionHeader from '@/components/accordion/item/header'
import Text from '@/components/text/Text'
import React from 'react'

interface IProps {
  onClick?: () => void
}

const AccordionExample = ({ onClick }: IProps) => (
  <Accordion id='accordion-1' data-testid='accordion'>
    <AccordionItem id='ONE' open data-testid='accordion-item'>
      <AccordionHeader>
        <Text>Hello World 1</Text>
      </AccordionHeader>
      <AccordionBody data-id='totooooo-test-id'>
        <Text>Lorem ipsum dolor sit amet lorem</Text>
      </AccordionBody>
    </AccordionItem>
    <AccordionItem open id='TWO'>
      <AccordionHeader>
        <Text>Hello World 2</Text>
      </AccordionHeader>
      <AccordionBody>
        <Text>Lorem ipsum dolor sit amet</Text>
      </AccordionBody>
    </AccordionItem>
    <AccordionItem id='THREE'>
      <AccordionHeader data-testid='header'>
        <Text>Hello World 2</Text>
      </AccordionHeader>
      <AccordionBody>
        <Text>Collpased by default</Text>
      </AccordionBody>
    </AccordionItem>
    <AccordionItem disabled id='FOUR' data-testid='accordion-disabled' onClick={onClick}>
      <AccordionHeader data-testid='header-disabled'>
        <Text>Hello World 3</Text>
      </AccordionHeader>
      <AccordionBody>
        <Text>Lorem ipsum dolor sit amet</Text>
      </AccordionBody>
    </AccordionItem>
  </Accordion>
)

export default AccordionExample
