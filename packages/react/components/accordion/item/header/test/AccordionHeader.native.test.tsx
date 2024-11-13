import { render, screen, userEvent } from '@testing-library/react-native'
import * as React from 'react'
import Text from '../../../../text/Text.native'
import Accordion from '../../../Accordion.native'
import AccordionBody from '../../../item/body/AccordionBody.native'
import AccordionHeader from '../AccordionHeader.native'
import AccordionItem from '../../../item/AccordionItem.native'

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
