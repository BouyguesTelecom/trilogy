import { render } from '@testing-library/react'
import * as React from 'react'

import { Sticker } from '@/components'
import { is } from '@/services/index'

describe('Sticker component', () => {
  test('should have a Sticker in document', () => {
    const { getByText } = render(<Sticker>DEFAULT</Sticker>)
    const sticker = getByText('DEFAULT')
    expect(sticker).toBeInTheDocument()
    expect(sticker).toHaveClass('sticker')
    expect(sticker).not.toHaveClass(is('small'))
    expect(sticker).not.toHaveClass(is('hat'))
  })

  test('should have a correct html tag', () => {
    const { getByText } = render(<Sticker>DEFAULT</Sticker>)
    const sticker = getByText('DEFAULT')
    expect(sticker).toBeTruthy()
  })

  test('should have "is-small" className', () => {
    const { getByText } = render(<Sticker small>DEFAULT</Sticker>)
    const sticker = getByText('DEFAULT')
    expect(sticker).toHaveClass(is('small'))
  })

  test('should not have "is-small" className', () => {
    const { getByText } = render(<Sticker small={false}>DEFAULT</Sticker>)
    const sticker = getByText('DEFAULT')
    expect(sticker).not.toHaveClass(is('small'))
  })

  test('should have "is-hat" className', () => {
    const { getByText } = render(<Sticker hat={true}>HAT</Sticker>)
    const sticker = getByText('HAT')
    expect(sticker).toHaveClass(is('hat'))
  })

  test('should not have "is-hat" className', () => {
    const { getByText } = render(<Sticker hat={false}>HAT</Sticker>)
    const sticker = getByText('HAT')
    expect(sticker).not.toHaveClass(is('hat'))
  })

  test('should have "toto" className', () => {
    const { getByText } = render(<Sticker className='toto'>DEFAULT</Sticker>)
    const sticker = getByText('DEFAULT')
    expect(sticker).toHaveClass('toto')
  })
})
