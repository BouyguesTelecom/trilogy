import { render } from '@testing-library/react-native'
import * as React from 'react'
import Accordion from '@/components/accordion/Accordion.native'
import AccordionBody from '@/components/accordion/item/body/AccordionBody.native'
import AccordionHeader from '@/components/accordion/item/header/AccordionHeader.native'
import AccordionItem from '@/components/accordion/item/AccordionItem.native'

describe('Accordion', () => {
  it('should render correctly', () => {
    render(
      <Accordion>
        <AccordionItem>
          <AccordionHeader>Accordion Header</AccordionHeader>
          <AccordionBody> content </AccordionBody>
        </AccordionItem>
      </Accordion>,
    )
  })
})
