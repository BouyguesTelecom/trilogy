// Dependencies
import * as React from 'react'

// Testing methods
import { fireEvent, render, screen } from '@testing-library/react'

// Component to test
import { getEnumNames } from '@/helpers'
import { getColorClassName } from '@/objects'
import { has } from '@/services'
import { Badge, BadgeColor, BadgeTextDirection } from '../'

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
      <Badge textContent={'TEXT'} direction={BadgeTextDirection.LEFT}>
        {BadgeTextDirection.LEFT}
      </Badge>,
    )
    render(
      <Badge textContent={'TEXT'} direction={BadgeTextDirection.RIGHT}>
        {BadgeTextDirection.RIGHT}
      </Badge>,
    )

    expect(screen.getByText(BadgeTextDirection.LEFT)).toHaveClass('badge')
    expect(screen.getByText(BadgeTextDirection.LEFT).nextElementSibling).toBeNull()
    expect(screen.getByText(BadgeTextDirection.LEFT).previousElementSibling).toHaveClass('text')

    expect(screen.getByText(BadgeTextDirection.RIGHT)).toHaveClass('badge')
    expect(screen.getByText(BadgeTextDirection.RIGHT).nextElementSibling).toHaveClass('text')
    expect(screen.getByText(BadgeTextDirection.RIGHT).previousElementSibling).toBeNull()
  })

  test('should have a correct color className', () => {
    getEnumNames(BadgeColor).forEach((element) => {
      render(<Badge color={element}>{element}</Badge>)
      expect(screen.getByText(element)).toHaveClass(has(`background-${getColorClassName(element)}`))
    })
  })

  test('should onClick attribut work', () => {
    const mockCallBack = jest.fn()
    render(<Badge onClick={mockCallBack}>DEFAULT</Badge>)

    fireEvent.click(screen.getByText('DEFAULT'))
    expect(mockCallBack).toHaveBeenCalled()
  })
})
