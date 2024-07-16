// Dependencies
import * as React from 'react'

// Testing methods
import { render, screen } from '@testing-library/react'

// Component to test
import { ModalTitle } from '../'

describe('ModalTitle component', () => {
  test('should ModalTitle have "modal-title" className', () => {
    render(<ModalTitle>DEFAULT</ModalTitle>)

    expect(screen.getByText('DEFAULT')).toHaveClass('modal-title')
  })

  test('should ModalTitle have correct className', () => {
    render(<ModalTitle className={'className'}>CLASSNAME</ModalTitle>)

    expect(screen.getByText('CLASSNAME')).toHaveClass('className')
  })
})
