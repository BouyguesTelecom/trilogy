import { render, screen, userEvent } from '@testing-library/react-native'
import * as React from 'react'
import Text from '../../../text/Text.native'
import Accordion from '../../Accordion.native'
import AccordionBody from '../../body/AccordionBody.native'
import AccordionHeader from '../../header/AccordionHeader.native'
import AccordionItem from '../../item/AccordionItem.native'

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
