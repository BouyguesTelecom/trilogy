// Dependencies
import React from 'react'

// Testing methods
import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import { is } from '../../../services' // Component to test
import { Divider } from '..'

describe('Divider component', () => {
  test('should have a separator in document', () => {
    render(<Divider />)

    expect(screen.getByTestId('separator')).toBeInTheDocument()
    expect(screen.getByTestId('separator')).toHaveClass('divider')
  })

  test('should have "is-unboxed" className', () => {
    render(<Divider unboxed={true} />)

    expect(screen.getByTestId('separator')).toHaveClass(is('unboxed'))
  })

  test('should not have "is-unboxed" className', () => {
    render(<Divider unboxed={false} />)

    expect(screen.getByTestId('separator')).not.toHaveClass(is('unboxed'))
  })

  test('should have "is-marginless" className', () => {
    render(<Divider marginless={true} />)

    expect(screen.getByTestId('separator')).toHaveClass(is('marginless'))
  })

  test('should not have "is-marginless" className', () => {
    render(<Divider marginless={false} />)

    expect(screen.getByTestId('separator')).not.toHaveClass(is('marginless'))
  })

  test('snapshot', () => {
    const tree = renderer
      .create(<Divider className={'className'} content={'content'} unboxed={true} marginless={true} />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
