import { fireEvent, render } from '@testing-library/react'
import * as React from 'react'
import Box from '../Box'
import { BoxContent, BoxFooter, BoxHeader, BoxTableContainer } from '../index'
import BoxItem from '../item'

describe('Box component', () => {
  test('renders without crashing', () => {
    const { getByTestId } = render(
      <Box data-testid={'box'}>
        <BoxContent>Im a box</BoxContent>
      </Box>,
    )
    const box = getByTestId('box')
    expect(box).toBeInTheDocument()
  })

  test('renders children', () => {
    const { getByText } = render(
      <Box>
        <BoxHeader>Box Header</BoxHeader>
        <BoxContent> Box Content</BoxContent>
      </Box>,
    )
    expect(getByText('Box Content')).toBeInTheDocument()
  })

  test('calls onClick handler when clicked', () => {
    const onClick = jest.fn()
    const { getByTestId } = render(
      <Box onClick={onClick} data-testid='box'>
        Box Cliquable
      </Box>,
    )
    fireEvent.click(getByTestId('box'))
    expect(onClick).toHaveBeenCalled()
  })

  test('applies the `href` prop when provided', () => {
    const { container } = render(<Box href={'/hello'} />)
    expect(container.querySelector('a')).toBeInTheDocument()
  })

  test('have the `flat` prop className to the component', () => {
    const { container } = render(<Box flat>Flat Box</Box>)
    expect(container.firstChild).toHaveClass('is-flat')
  })

  test('Check box footer className', () => {
    const { container } = render(<BoxFooter>Box Footer</BoxFooter>)
    expect(container.firstChild).toHaveClass('box-footer')
  })

  test('Check box Item className', () => {
    const { container } = render(<BoxItem>Box Item</BoxItem>)
    expect(container.firstChild).toHaveClass('box-item')
  })

  test('Check box Table Container', () => {
    const { container } = render(<BoxTableContainer>Box Table</BoxTableContainer>)
    expect(container.firstChild).toHaveClass('box table-container')
  })

  test('adds a `data-testid` attribute to the component', () => {
    const { container } = render(<Box data-testid='box' />)
    expect(container.firstChild).toHaveAttribute('data-testid', 'box')
  })

  test('Should have classes content', () => {
    const { getByTestId } = render(<BoxContent data-testid='boxContent' backgroundColor='SUCCESS' />)
    const boxContent = getByTestId('boxContent')
    expect(boxContent).toHaveClass('box-content has-background-success')
  })

  test('Should have classes footer', () => {
    const { getByTestId } = render(<BoxFooter data-testid='boxFooter' backgroundColor='SUCCESS' />)
    const boxFooter = getByTestId('boxFooter')
    expect(boxFooter).toHaveClass('box-footer has-background-success')
  })
})
