// Dependencies
import * as React from 'react'

// Testing methods
import { fireEvent, render, screen } from '@testing-library/react'
import { getColorClassName } from '../../../objects'
import { getEnumNames } from '../../../helpers'
import { has, is } from '../../../services'

// Component to test
import { Tag, TagVariant } from '..'

describe('Tag component', () => {
  test('should contain toto as text', () => {
    render(<Tag>toto</Tag>)

    expect(screen.getByText('toto')).toBeInTheDocument()
  })

  test('should have "tag" className', () => {
    render(<Tag>toto</Tag>)

    expect(screen.getByText('toto')).toHaveClass('tag')
  })

  test('should have a correct variant className', () => {
    getEnumNames(TagVariant).forEach((element) => {
      render(<Tag variant={element}>{element}</Tag>)
      expect(screen.getByText(element)).toHaveClass(is(getColorClassName(element)))
    })
  })

  getEnumNames(TagVariant).forEach((element) => {
    test('should have a correct variant className', () => {
      render(<Tag variant={element}>{element}</Tag>)
      expect(screen.getByText(element)).toHaveClass(is(getColorClassName(element)))
    })
  })

  test('should have "is-inverted" className', () => {
    render(<Tag inverted={true}>INVERTED</Tag>)

    expect(screen.getByText('INVERTED')).toHaveClass(is('inverted'))
  })

  test('should not have "is-inverted" className', () => {
    render(<Tag>DEFAULT</Tag>)
    render(<Tag inverted={false}>INVERTED</Tag>)

    expect(screen.getByText('DEFAULT')).not.toHaveClass(is('inverted'))
    expect(screen.getByText('INVERTED')).not.toHaveClass(is('inverted'))
  })

  test('should have "has-addons" & "is-delete" className', () => {
    render(<Tag deletable={true}>DELETABLE</Tag>)

    expect(screen.getByText('DELETABLE').closest('div')).toHaveClass(has('addons'))
    expect(screen.getByText('DELETABLE').closest('div')).toHaveClass(is('delete'))
  })

  test('should delete tag', () => {
    render(<Tag deletable>DELETABLE</Tag>)

    const aElement = screen.getByText('DELETABLE').nextElementSibling
    if (aElement) fireEvent.click(aElement)

    expect(screen.getByText('DELETABLE')).toHaveClass(is('hidden'))
  })

  test('should onClick attribut work', () => {
    const mockCallBack = jest.fn()
    render(<Tag onClick={mockCallBack}>DEFAULT</Tag>)

    fireEvent.click(screen.getByText('DEFAULT'))
    expect(mockCallBack).toHaveBeenCalled()
  })
})
