import { fireEvent, render, screen } from '@testing-library/react'
import * as React from 'react'
import { StatusState } from '../../../objects'
import Box from '../Box'
import { BoxMarkup } from '../BoxProps'
import { BoxContent, BoxFooter, BoxHeader, BoxTableContainer } from '../index'
import BoxItem from '../item'

describe('Box component', () => {
  test('renders without crashing', () => {
    const { getByTestId } = render(
      <Box testId={'box'}>
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
      <Box onClick={onClick} testId='box'>
        Box Cliquable
      </Box>,
    )
    fireEvent.click(getByTestId('box'))
    expect(onClick).toHaveBeenCalled()
  })

  test('renders as an anchor if provided a `to` prop', () => {
    const { container } = render(<Box to='/' />)
    expect(container.querySelector('a')).toBeInTheDocument()
  })

  test('applies the `markup` prop when provided', () => {
    const { container } = render(<Box markup={BoxMarkup.A} />)
    expect(container.querySelector('a')).toBeInTheDocument()
  })

  test('have the `flat` prop className to the component', () => {
    const { container } = render(<Box flat>Flat Box</Box>)
    expect(container.firstChild).toHaveClass('is-flat')
  })

  test('have the `float` prop className to the component', () => {
    const { container } = render(
      <Box hat>
        <BoxHeader>Sticker hat Box</BoxHeader>
      </Box>,
    )
    expect(container.firstChild).toHaveClass('has-hat')
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
    const { container } = render(<Box testId='box' />)
    expect(container.firstChild).toHaveAttribute('data-testid', 'box')
  })

  test('Should render box with markup A', () => {
    const fn = jest.fn()
    const { getByTestId } = render(<Box onClick={fn} testId='box' markup='A' to='test' />)
    const box = getByTestId('box')

    fireEvent.click(box)
    expect(box).toHaveAttribute('href', 'test')
    expect(box).toBeInTheDocument()
    expect(fn).toHaveBeenCalled()
  })

  test('Should have classes', () => {
    const { getByTestId } = render(
      <Box testId='box' shadowless backgroundColor='SUCCESS' backgroundSrc='test' flat hat />,
    )
    const box = getByTestId('box')
    expect(box).toHaveClass('box is-shadowless has-background-success has-background is-loaded is-flat has-hat')
  })
  test('Should have skeleton', () => {
    const { getByTestId } = render(<Box testId='box' skeleton />)
    const box = getByTestId('box')
    expect(box).toHaveClass('box is-loading')
  })

  test('Should have classes content', () => {
    const { getByTestId } = render(<BoxContent testId='boxContent' backgroundColor='SUCCESS' />)
    const boxContent = getByTestId('boxContent')
    expect(boxContent).toHaveClass('box-content has-background-success')
  })

  test('Should have classes footer', () => {
    const { getByTestId } = render(<BoxFooter testId='boxFooter' backgroundColor='SUCCESS' />)
    const boxFooter = getByTestId('boxFooter')
    expect(boxFooter).toHaveClass('box-footer has-background-success')
  })

  test('Should have classes header', () => {
    const { getByTestId } = render(<BoxHeader testId='boxHeader' variant={StatusState.SUCCESS} help='HELP' />)
    const boxFooter = getByTestId('boxHeader')
    const help = screen.getByTestId('boxHeader-help')
    expect(boxFooter).toHaveClass('box-header has-background-success')
    expect(help).toBeInTheDocument()
  })
})
