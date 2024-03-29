// Dependencies
import React from 'react'

// Testing methods
import { getEnumNames } from '../../../helpers'
import { fireEvent, render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import { has } from '../../../services'
import { getColorClassName } from '../../..'

// Component to test
import { Badge, BadgeColor, BadgeTextDirection } from '../'

describe('Badge component', () => {
  test('should contain toto as text', () => {
    render(<Badge>toto</Badge>)

    expect(screen.getByText('toto')).toBeInTheDocument()
  })

  test('should have a text content', () => {
    render(<Badge textContent={'TEXT'}>TEXTCONTENT</Badge>)

    expect(screen.getByText('TEXTCONTENT')).toHaveClass('badge')
    expect(screen.getByText('TEXTCONTENT')).not.toHaveClass('badge-and-text')

    expect(screen.getByText('TEXTCONTENT').closest('div')).toHaveClass('badge-and-text')
    expect(screen.getByText('TEXTCONTENT').closest('div')).not.toHaveClass('badge')

    expect(screen.getByText('TEXT')).toHaveClass('text')
  })

  test('should not have a text content', () => {
    render(<Badge>TEXTCONTENT</Badge>)

    expect(screen.getByText('TEXTCONTENT')).toHaveClass('badge')
    expect(screen.getByText('TEXTCONTENT')).not.toHaveClass('badge-and-text')

    expect(screen.getByText('TEXTCONTENT').closest('div')).toBeInTheDocument()
  })

  test('should have a content', () => {
    render(<Badge content={'CONTENT'}>TEXT</Badge>)

    expect(screen.queryByText('TEXT')).not.toBeInTheDocument()

    expect(screen.getByText('CONTENT')).toHaveClass('badge')
    expect(screen.getByText('CONTENT')).not.toHaveClass('badge-and-text')
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

  test('snapshot', () => {
    const tree = renderer
      .create(
        <Badge
          className={'className'}
          textContent={'textContent'}
          content={'content'}
          direction={BadgeTextDirection.RIGHT}
          color={BadgeColor.SECONDARY}
          onClick={jest.fn()}
        >
          SnapShot
        </Badge>,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
