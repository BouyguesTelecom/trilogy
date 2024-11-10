// Dependencies
import * as React from 'react'
import { is } from '../../../services/index'

// Testing methods
import { render, screen } from '@testing-library/react'

// Component to test
import { Popover, PopoverContent } from '../'

describe('Popover component', () => {
  test('should have "popover" className', () => {
    const { getByTestId } = render(
      <Popover data-testid='popover-id'>
        <PopoverContent>DEFAULT</PopoverContent>
      </Popover>,
    )
    expect(getByTestId('popover-id')).toHaveClass('popover')
  })

  test('should contain toto as text', () => {
    const { getByTestId } = render(
      <Popover data-testid='popover-id'>
        <PopoverContent>toto</PopoverContent>
      </Popover>,
    )
    expect(getByTestId('popover-id')).toBeInTheDocument()
  })

  test('should be left', () => {
    const { getByTestId } = render(
      <Popover data-testid='popover-id' direction='left'>
        <PopoverContent>toto</PopoverContent>
      </Popover>,
    )
    expect(getByTestId('popover-id')).toHaveClass(is(`popover-left`))
  })

  test('should be right', () => {
    const { getByTestId } = render(
      <Popover data-testid='popover-id' direction='right'>
        <PopoverContent>toto</PopoverContent>
      </Popover>,
    )
    expect(getByTestId('popover-id')).toHaveClass(is(`popover-right`))
  })

  test('should be bottom', () => {
    const { getByTestId } = render(
      <Popover data-testid='popover-id' direction='bottom'>
        <PopoverContent>toto</PopoverContent>
      </Popover>,
    )
    expect(getByTestId('popover-id')).toHaveClass(is(`popover-bottom`))
  })

  test('should have "is-popover-active" className', () => {
    render(
      <Popover data-testid='popover-id' active={true}>
        <PopoverContent>POPOVER ACTIVE</PopoverContent>
      </Popover>,
    )

    expect(screen.getByTestId('popover-id')).toHaveClass(is('popover-active'))
  })

  test('should not have "is-popover-active" className', () => {
    render(
      <Popover data-testid='popover-id-1'>
        <PopoverContent>DEFAULT</PopoverContent>
      </Popover>,
    )
    render(
      <Popover data-testid='popover-id-2' active={false}>
        <PopoverContent>POPOVER ACTIVE</PopoverContent>
      </Popover>,
    )

    expect(screen.getByTestId('popover-id-1')).not.toHaveClass(is('popover-active'))
    expect(screen.getByTestId('popover-id-2')).not.toHaveClass(is('popover-active'))
  })

  test('should have "toto" className', () => {
    render(
      <Popover data-testid='toto-id' className='toto'>
        <PopoverContent>TOTO</PopoverContent>
      </Popover>,
    )

    expect(screen.getByTestId('toto-id')).toHaveClass('toto')
  })

  test('should have "CONTENT" content', () => {
    render(
      <Popover>
        <PopoverContent>CONTENT</PopoverContent>
      </Popover>,
    )

    expect(screen.getByText('CONTENT')).toHaveClass('popover-content')
    expect(screen.getByText('CONTENT')).toBeInTheDocument()
  })
})
