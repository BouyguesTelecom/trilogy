// Dependencies
import * as React from 'react'
import { is } from '../../../services/index'

// Testing methods
import { render } from '@testing-library/react'

// Component to test
import Sticker from '../Sticker'

describe('Sticker component', () => {
  test('should have a Sticker in document', () => {
    const { getByText } = render(<Sticker label='DEFAULT' />)
    const sticker = getByText('DEFAULT')
    expect(sticker).toBeInTheDocument()
    expect(sticker).toHaveClass('sticker')
    expect(sticker).not.toHaveClass(is('small'))
    expect(sticker).not.toHaveClass(is('hat'))
  })

  test('should have a correct html tag', () => {
    const { getByText } = render(<Sticker label='DEFAULT' />)
    const sticker = getByText('DEFAULT')
    expect(sticker).toBeTruthy()
  })

  test('should have "is-small" className', () => {
    const { getByText } = render(<Sticker label='DEFAULT' small />)
    const sticker = getByText('DEFAULT')
    expect(sticker).toHaveClass(is('small'))
  })

  test('should not have "is-small" className', () => {
    const { getByText } = render(<Sticker label='DEFAULT' small={false} />)
    const sticker = getByText('DEFAULT')
    expect(sticker).not.toHaveClass(is('small'))
  })

  test('should have "toto" className', () => {
    const { getByText } = render(<Sticker label='DEFAULT' className='toto' />)
    const sticker = getByText('DEFAULT')
    expect(sticker).toHaveClass('toto')
  })
})
