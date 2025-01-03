// Dependencies
import * as React from 'react'

// Testing methods
import { render, screen } from '@testing-library/react'
// @ts-ignore
import renderer from 'react-test-renderer'

// Component to test
import { Tag, TagList } from '../..'
import { is } from '../../../../services'

describe('TagList component', () => {
  test('should have "tags" className', () => {
    render(<TagList>DEFAULT</TagList>)

    expect(screen.getByText('DEFAULT')).toBeInTheDocument()
    expect(screen.getByText('DEFAULT')).toHaveClass('tags')
  })

  test('should have no margins around tag list when marginless prop is true', () => {
    render(<TagList marginless>Marginless Tag List</TagList>)

    expect(screen.getByText('Marginless Tag List')).toHaveClass(is('marginless'))
  })

  test('snapshot', () => {
    const tree = renderer
      .create(
        <TagList>
          <Tag label='1' />
          <Tag label='2' />
        </TagList>,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
