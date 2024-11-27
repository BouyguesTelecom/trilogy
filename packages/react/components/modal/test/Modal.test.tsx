// Dependencies
import * as React from 'react'

// Testing methods
import { render } from '@testing-library/react'
import Modal from '../Modal'
import { ModalBody } from '../index'

// Component to test

describe('Modal component', () => {
  test('should Modal have correct initial className', () => {
    const { getByTestId } = render(<Modal data-testid={'modal-id'} title="Hello">Hello</Modal>)
    const modal = getByTestId('modal-id')
    expect(modal).toHaveClass('modal')
    expect(modal?.childNodes[0]).toHaveClass('modal-content')
  })
})
