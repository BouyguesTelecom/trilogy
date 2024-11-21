import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'

import { Badge } from '@/components/badge'

describe('Badge component', () => {
  test('should contain toto as text', () => {
    const { getByText } = render(<Badge>toto</Badge>)
    expect(getByText('toto')).toBeInTheDocument()
  })

  test('should have a text content', () => {
    const { getByText } = render(<Badge textContent={'TEXT'}>TEXTCONTENT</Badge>)
    const badge = getByText('TEXTCONTENT')
    expect(badge).toHaveClass('badge')
    expect(getByText('TEXT')).toHaveClass('text')
  })

  test('should not have a text content', () => {
    const { getByText } = render(<Badge>TEXTCONTENT</Badge>)
    const badge = getByText('TEXTCONTENT')
    expect(badge).toHaveClass('badge')
    expect(badge).not.toHaveClass('badge-and-text')
    expect(badge).toBeInTheDocument()
  })

  test('should have a content', () => {
    const { getByText, queryByText } = render(<Badge content={'CONTENT'}>TEXT</Badge>)
    expect(queryByText('TEXT')).not.toBeInTheDocument()
    expect(getByText('CONTENT')).toHaveClass('badge')
    expect(getByText('CONTENT')).not.toHaveClass('badge-and-text')
  })

  test('should have correct Text direction for Badge', () => {
    render(
      <Badge textContent={'TEXT'} reversed={false}>
        not reversed
      </Badge>,
    )
    render(
      <Badge textContent={'TEXT'} reversed={true}>
        reversed
      </Badge>,
    )

    expect(screen.getByText('not reversed')).toHaveClass('badge')
    expect(screen.getByText('not reversed').nextElementSibling).toBeNull()
    expect(screen.getByText('not reversed').previousElementSibling).toHaveClass('text')

    expect(screen.getByText('reversed')).toHaveClass('badge')
    expect(screen.getByText('reversed').nextElementSibling).toHaveClass('text')
    expect(screen.getByText('reversed').previousElementSibling).toBeNull()
  })

  test('should onClick attribut work', () => {
    const mockCallBack = jest.fn()
    render(<Badge onClick={mockCallBack}>DEFAULT</Badge>)

    fireEvent.click(screen.getByText('DEFAULT'))
    expect(mockCallBack).toHaveBeenCalled()
  })
})
