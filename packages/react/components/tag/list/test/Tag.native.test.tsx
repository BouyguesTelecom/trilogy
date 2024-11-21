import { render, screen } from '@testing-library/react-native'
import React from 'react'

import { Tag, TagList } from '@/components/tag'

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
