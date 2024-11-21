import { render, screen } from '@testing-library/react-native'
import React from 'react'

import Accordion from '@/components/accordion/Accordion.native'
import AccordionBody from '@/components/accordion/body/AccordionBody.native'
import AccordionHeader from '@/components/accordion/header/AccordionHeader.native'
import AccordionItem from '@/components/accordion/item/AccordionItem.native'
import Text from '@/components/text/Text.native'

describe('Accordion', () => {
  it('should render correctly', () => {
    render(
      <Accordion>
        <AccordionItem active={false}>
          <AccordionHeader>
            <Text>header</Text>
          </AccordionHeader>
          <AccordionBody>
            <Text>body</Text>
          </AccordionBody>
        </AccordionItem>
      </Accordion>,
    )

    expect(screen.getByText('header')).toBeOnTheScreen()
  })
})
