import { render, screen, userEvent } from '@testing-library/react-native'
import * as React from 'react'
import Text from '@/components/text/Text.native'
import Accordion from '@/components/accordion/Accordion.native'
import AccordionBody from '@/components/accordion/item/body/AccordionBody.native'
import AccordionHeader from '@/components/accordion/item/header/AccordionHeader.native'
import AccordionItem from '@/components/accordion/item/AccordionItem.native'

describe('Accordion', () => {
  it('should render correctly', () => {
    render(
      <Accordion>
        <AccordionItem open={false}>
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
