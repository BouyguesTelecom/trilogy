// Dependencies
import * as React from 'react'

// Testing methods
import { getEnumNames } from '@/helpers'
import { is } from '@/services'
import { fireEvent, render, screen } from '@testing-library/react'
import Modal from '../Modal'
import { ModalMarkup } from '../ModalEnum'

// Component to test

describe('Modal component', () => {
  test('should Modal have correct initial className', () => {
    const { getByTestId } = render(<Modal testId={'DEFAULT'} />)
    const modal = getByTestId('DEFAULT')
    expect(modal?.childNodes[0]).toHaveClass('modal')
    expect(modal?.childNodes[0].childNodes[0]).toHaveClass('modal-content')
  })

  test('should Modal have content', () => {
    const { getByText } = render(<Modal content={'CONTENT'} />)
    expect(getByText('CONTENT')).toBeTruthy()
  })

  test('should Modal have child', () => {
    const { getByText } = render(<Modal>CHILD</Modal>)
    expect(getByText('CHILD')).toBeTruthy()
  })

  test('should Modal have a trigger', () => {
    const { getByText } = render(<Modal triggerContent={'TRIGGER'} />)
    expect(getByText('TRIGGER')).toBeInTheDocument()
  })

  test('should Modal have correct className', () => {
    const { getByText } = render(<Modal className={'className'} content={'CLASSNAME'} />)
    expect(getByText('CLASSNAME').parentElement?.parentElement).toHaveClass('className')
  })

  test('should Modal have correct contentClassNames', () => {
    const { getByText } = render(<Modal contentClassNames={'contentClassNames'} content={'CLASSNAME'} />)
    expect(getByText('CLASSNAME').parentElement).toHaveClass('contentClassNames')
  })

  test('should Modal have correct triggerClassNames', () => {
    const { getByText } = render(<Modal triggerClassNames={'triggerClassNames'} triggerContent={'TRIGGER'} />)
    expect(getByText('TRIGGER')).toHaveClass('triggerClassNames')
  })

  test('should Modal have a title', () => {
    render(<Modal content={'DEFAULT'} title={'TITLE'} />)

    expect(screen.getByText('TITLE')).toHaveClass('modal-title')
  })

  test('should Modal have a footer', () => {
    render(<Modal content={'DEFAULT'} footer={'FOOTER'} />)

    expect(screen.getByText('FOOTER')).toHaveClass('modal-footer')
  })

  test('should Modal ctaContent is "toto"', () => {
    render(<Modal ctaContent={'toto'} ctaOnClick={jest.fn()} content={'DEFAULT'} />)

    expect(screen.getByText('toto')).toBeInTheDocument()
  })

  test('should Modal ctaOnClick call on ctaContent click', () => {
    const ctaOnClick = jest.fn()
    render(<Modal ctaContent={'toto'} ctaOnClick={ctaOnClick} content={'DEFAULT'} />)

    fireEvent.click(screen.getByText('toto'))
    expect(ctaOnClick).toHaveBeenCalled()
  })

  test('should a click on ctaCancel Modal call close modal', () => {
    render(<Modal active ctaCancelOnClick={jest.fn()} content={'DEFAULT'} />)

    const modal = screen.getByText('DEFAULT').parentElement?.parentElement
    expect(modal).toHaveClass(is('active'))
    fireEvent.click(screen.getByText('Annuler'))
    expect(modal).not.toHaveClass(is('active'))
  })

  test('should a click on ctaCancel Modal call ctaCancelOnClick function', () => {
    const ctaCancelOnClick = jest.fn()
    render(<Modal active ctaCancelOnClick={ctaCancelOnClick} content={'DEFAULT'} />)

    fireEvent.click(screen.getByText('Annuler'))
    expect(ctaCancelOnClick).toHaveBeenCalled()
  })

  test('should Modal triggerMarkup have a correct markup', () => {
    getEnumNames(ModalMarkup).forEach((element) => {
      render(<Modal triggerMarkup={element} triggerContent={element} content={'TRIGGERMARKUP'} />)
      expect(screen.getByText(element)).toBeTruthy()
    })
  })

  test('should click on trigger Modal call onOpen function', () => {
    const openCallBack = jest.fn()
    render(<Modal triggerContent={'TRIGGER'} onOpen={openCallBack} content={'DEFAULT'} />)

    fireEvent.click(screen.getByText('TRIGGER'))
    expect(openCallBack).toHaveBeenCalled()
  })

  test('should Modal is active', () => {
    render(<Modal active={true} content={'ACTIVE'} />)

    expect(screen.getByText('ACTIVE').parentElement?.parentElement).toHaveClass(is('active'))
  })

  test('should Modal is not active', () => {
    render(<Modal content={'DEFAULT'} />)
    render(<Modal active={false} content={'ACTIVE'} />)

    expect(screen.getByText('DEFAULT').parentElement?.parentElement).not.toHaveClass(is('active'))
    expect(screen.getByText('ACTIVE').parentElement?.parentElement).not.toHaveClass(is('active'))
  })

  test('should click on trigger Modal open it', () => {
    render(<Modal triggerContent={'TRIGGER'} content={'DEFAULT'} />)

    const modal = screen.getByText('DEFAULT').parentElement?.parentElement
    expect(modal).not.toHaveClass(is('active'))
    fireEvent.click(screen.getByText('TRIGGER'))
    expect(modal).toHaveClass(is('active'))
  })

  test('should Modal is panel', () => {
    render(<Modal panel={true} content={'PANNEL'} />)

    expect(screen.getByText('PANNEL').parentElement?.parentElement).toHaveClass(is('panel'))
  })

  test('should Modal is full width', () => {
    render(<Modal fullwidth={true} content={'PANNEL'} />)

    expect(screen.getByText('PANNEL').parentElement?.parentElement).toHaveClass(is('fullwidth'))
  })

  test('should Modal is not panel', () => {
    render(<Modal content={'DEFAULT'} />)
    render(<Modal panel={false} content={'PANNEL'} />)

    expect(screen.getByText('DEFAULT').parentElement?.parentElement).not.toHaveClass(is('panel'))
    expect(screen.getByText('PANNEL').parentElement?.parentElement).not.toHaveClass(is('panel'))
  })

  test('should Modal have a closeIcon', () => {
    render(<Modal closeIcon={true} content={'CLOSEICON'} />)

    expect(screen.getByLabelText('close')).toBeInTheDocument()
    expect(screen.getByLabelText('close')).toHaveClass('modal-close')
  })

  test('should Modal not have a closeIcon', () => {
    render(<Modal content={'DEFAULT'} />)
    render(<Modal closeIcon={false} content={'CLOSEICON'} />)

    expect(screen.queryAllByLabelText('close').length).toBe(0)
  })

  test('should a click on closeIcon Modal close it', () => {
    render(<Modal active closeIcon content={'DEFAULT'} />)

    const modal = screen.getByText('DEFAULT').parentElement?.parentElement
    expect(modal).toHaveClass(is('active'))
    fireEvent.click(screen.getByLabelText('close'))
    expect(modal).not.toHaveClass(is('active'))
  })

  test('should a click on closeIcon Modal call onClose function', () => {
    const closeCallBack = jest.fn()
    render(<Modal active closeIcon onClose={closeCallBack} content={'DEFAULT'} />)

    fireEvent.click(screen.getByLabelText('close'))
    expect(closeCallBack).toHaveBeenCalled()
  })

  test('should a click inside the modal not close it', () => {
    render(<Modal active content={'DEFAULT'} />)

    const modal = screen.getByText('DEFAULT').parentElement?.parentElement
    expect(modal).toHaveClass(is('active'))
    fireEvent.mouseDown(screen.getByText('DEFAULT'))
    expect(modal).toHaveClass(is('active'))
  })

  test('should a click outside the modal close it', () => {
    render(<Modal active content={'DEFAULT'} />)

    const modal = screen.getByText('DEFAULT').parentElement?.parentElement
    expect(modal).toHaveClass(is('active'))
    fireEvent.mouseDown(document)
    expect(modal).not.toHaveClass(is('active'))
  })

  test('should a click outside the modal call onClose function', () => {
    const closeCallBack = jest.fn()
    render(<Modal active onClose={closeCallBack} content={'DEFAULT'} />)

    fireEvent.mouseDown(document)
    expect(closeCallBack).toHaveBeenCalled()
  })
})
