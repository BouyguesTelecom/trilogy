import React from 'react'

import { getEnumNames } from '@/helpers'
import { getColorClassName } from '@/objects'
import { is } from '@/services'
import { render, screen } from '@testing-library/react'

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
})
