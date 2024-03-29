// Dependencies
import React from 'react'

// Testing methods
import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'

// Component to test
import { Tag, TagList } from '..'
import { is } from '../../../services'

describe('TagList component', () => {
  test('should have "tags" className', () => {
    render(<TagList>DEFAULT</TagList>)

    expect(screen.getByText('DEFAULT')).toBeInTheDocument()
    expect(screen.getByText('DEFAULT')).toHaveClass('tags')
  })

  test('should have "centered" className when centered prop is true', () => {
    render(<TagList centered>Centered Tag List</TagList>)

    expect(screen.getByText('Centered Tag List')).toHaveClass(is('centered'))
  })

  test('should have no margins between tags when gapless prop is true', () => {
    render(<TagList gapless>Gapless Tag List</TagList>)

    expect(screen.getByText('Gapless Tag List')).toHaveClass(is('gapless'))
  })

  test('should have no margins around tag list when marginless prop is true', () => {
    render(<TagList marginless>Marginless Tag List</TagList>)

    expect(screen.getByText('Marginless Tag List')).toHaveClass(is('marginless'))
  })

  test('snapshot', () => {
    const tree = renderer
      .create(
        <TagList>
          <Tag>1</Tag>
          <Tag>2</Tag>
        </TagList>,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
