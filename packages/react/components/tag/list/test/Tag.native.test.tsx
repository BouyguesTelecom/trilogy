// Dependencies
import * as React from 'react'

// Testing methods
import { render, screen } from '@testing-library/react-native'

// Component to test
import TagList from '..'
import Tag from '../../Tag'

describe('Tag component', () => {
  test('should contain toto as text', () => {
    const props: any = { testId: 'tag', iconName: 'tri-alert' }
    render(
      <TagList>
        <Tag {...props}>toto</Tag>
      </TagList>,
    )
    expect(screen.getByText('toto')).toBeOnTheScreen()
  })
})
