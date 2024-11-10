// Dependencies
import * as React from 'react'

// Testing methods
import { render, screen } from '@testing-library/react'
import { getColorClassName } from '../../../objects'
import { getEnumNames } from '../../../helpers'
import { is } from '../../../services'

// Component to test
import { Tag, TagVariant } from '..'

describe('Tag component', () => {
  test('should contain toto as text', () => {
    render(<Tag label='toto' />)

    expect(screen.getByText('toto')).toBeInTheDocument()
  })

  test('should have "tag" className', () => {
    render(<Tag label='toto' />)

    expect(screen.getByText('toto')).toHaveClass('tag')
  })

  test('should have a correct variant className', () => {
    getEnumNames(TagVariant).forEach((element) => {
      render(<Tag variant={element} label={element}></Tag>)
      expect(screen.getByText(element)).toHaveClass(is(getColorClassName(element)))
    })
  })

  test('should have "is-inverted" className', () => {
    render(<Tag label='INVERTED' inverted />)

    expect(screen.getByText('INVERTED')).toHaveClass(is('inverted'))
  })

  test('should not have "is-inverted" className', () => {
    render(<Tag label='DEFAULT' />)
    render(<Tag label='NOT INVERTED' inverted={false} />)

    expect(screen.getByText('DEFAULT')).not.toHaveClass(is('inverted'))
    expect(screen.getByText('NOT INVERTED')).not.toHaveClass(is('inverted'))
  })
})
