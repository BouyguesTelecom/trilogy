import { render, screen } from '@testing-library/react'
import React from 'react'

import { ModalTitle } from '@/components'

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
