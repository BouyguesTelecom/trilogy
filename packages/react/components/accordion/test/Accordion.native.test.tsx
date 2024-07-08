import { render } from '@testing-library/react-native'
import * as React from 'react'
import Accordion from '../Accordion.native'
import AccordionBody from '../body/AccordionBody.native'
import AccordionHeader from '../header/AccordionHeader.native'
import AccordionItem from '../item/AccordionItem.native'

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
