import { fireEvent, render } from '@testing-library/react'
import * as React from 'react'
import CardContent from '../CardContent'

describe('CardContent component', () => {
  it('should render a div with a class of card-content', () => {
    const { getByTestId } = render(<CardContent data-testid='card-content' />)
    const cardContentDiv = getByTestId('card-content')
    expect(cardContentDiv).toHaveClass('card-content')
  })

  it('should render a sup title if titleSup prop is passed', () => {
    const titleSup = 'This is a sup title'
    const { getByText } = render(<CardContent titleSup={titleSup} />)
    const supTitleElement = getByText(titleSup)
    expect(supTitleElement).toBeInTheDocument()
  })

  it('should render a title if title prop is passed', () => {
    const title = 'This is a title'
    const { getByText } = render(<CardContent title={title} />)
    const titleElement = getByText(title)

    expect(titleElement).toBeInTheDocument()
  })

  it('should render a text if text prop is passed', () => {
    const text = 'This is some content text'
    const { getByText } = render(<CardContent text={text} />)
    const textElement = getByText(text)
    expect(textElement).toBeInTheDocument()
  })

  it('should have title', () => {
    const { getByTestId } = render(<CardContent testId='cardContent' title='title' titleLevel={1} />)
    const title = getByTestId('cardContent-title')
    expect(title).toBeInTheDocument()
  })

  it('should render a button if buttonText prop is passed', () => {
    const fn = jest.fn()
    const buttonText = 'Click me'
    const { getByTestId } = render(
      <CardContent
        testId='cardContent'
        onClick={fn}
        buttonText={buttonText}
        buttonVariant='PRIMARY'
        buttonMarkup='a'
      />,
    )
    const buttonElement = getByTestId('cardContent')
    const btn = getByTestId('cardContent-btn')
    fireEvent.click(buttonElement)
    expect(fn).toHaveBeenCalled()
    expect(btn.nodeName).toBe('A')
    expect(btn).toHaveClass('is-loaded is-primary ')
    expect(btn).toBeInTheDocument()
    expect(buttonElement).toBeInTheDocument()
  })
})
