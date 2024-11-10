// Dependencies
import * as React from 'react'

// Testing methods
import { render } from '@testing-library/react'
import Modal from '../Modal'
import { ModalBody } from '../index'

// Component to test

describe('Modal component', () => {
  test('should Modal have correct initial className', () => {
    const { getByTestId } = render(<Modal data-testid={'modal-id'}>Hello</Modal>)
    const modal = getByTestId('modal-id')
    expect(modal).toHaveClass('modal')
    expect(modal?.childNodes[0]).toHaveClass('modal-content')
  })

  test('should Modal have content', () => {
    const { getByText } = render(
      <Modal>
        <ModalBody>{'CONTENT'}</ModalBody>
      </Modal>,
    )
    expect(getByText('CONTENT')).toBeTruthy()
  })

  test('should Modal have child', () => {
    const { getByText } = render(<Modal>CHILD</Modal>)
    expect(getByText('CHILD')).toBeTruthy()
  })
})
