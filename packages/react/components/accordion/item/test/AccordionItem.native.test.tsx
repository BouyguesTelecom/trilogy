import { render, screen, userEvent } from '@testing-library/react-native'
import * as React from 'react'
import Text from '../../../text/Text.native'
import Accordion from '../../Accordion.native'
import AccordionBody from '../../item/body/AccordionBody.native'
import AccordionHeader from '../../item/header/AccordionHeader.native'
import AccordionItem from '../../item/AccordionItem.native'

jest.useFakeTimers()

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

  test('should be disabled', async () => {
    const onClick = jest.fn()

    render(
      <Accordion>
        <AccordionItem disabled onClick={onClick}>
          <AccordionHeader>
            <Text>header</Text>
          </AccordionHeader>
          <AccordionBody>
            <Text>body</Text>
          </AccordionBody>
        </AccordionItem>
      </Accordion>,
    )
    const user = userEvent.setup()
    await user.press(screen.getByText('header'))
    expect(onClick).not.toHaveBeenCalled()
  })
})
