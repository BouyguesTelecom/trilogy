import { render, screen, userEvent } from '@testing-library/react-native'
import React from 'react'

import Accordion from '@/components/accordion/Accordion.native'
import AccordionBody from '@/components/accordion/body/AccordionBody.native'
import AccordionHeader from '@/components/accordion/header/AccordionHeader.native'
import AccordionItem from '@/components/accordion/item/AccordionItem.native'
import Text from '@/components/text/Text.native'

jest.useFakeTimers()

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

  test('should execute onOpen function', async () => {
    const onOpen = jest.fn()
    const user = userEvent.setup()

    render(
      <Accordion>
        <AccordionItem id={'accordion'} onOpen={onOpen}>
          <AccordionHeader>
            <Text>header</Text>
          </AccordionHeader>
          <AccordionBody>
            <Text>body</Text>
          </AccordionBody>
        </AccordionItem>
      </Accordion>,
    )

    await user.press(screen.getByTestId('accordion'))
    expect(onOpen).toHaveBeenCalled()
  })

  test('should execute onClose function', async () => {
    const onClose = jest.fn()
    const user = userEvent.setup()

    render(
      <Accordion>
        <AccordionItem active id={'accordion'} onClose={onClose}>
          <AccordionHeader>
            <Text>header</Text>
          </AccordionHeader>
          <AccordionBody>
            <Text>body</Text>
          </AccordionBody>
        </AccordionItem>
      </Accordion>,
    )

    await user.press(screen.getByTestId('accordion'))
    expect(onClose).toHaveBeenCalled()
  })
})
