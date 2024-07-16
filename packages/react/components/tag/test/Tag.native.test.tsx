// Dependencies
import * as React from 'react'

// Testing methods
import { render, screen } from '@testing-library/react-native'

// Component to test
import { Tag } from '..'

describe('Tag component', () => {
  test('should contain toto as text', () => {
    const props: any = { testId: 'tag', iconName: 'tri-alert' }
    render(<Tag {...props}>toto</Tag>)
    expect(screen.getByText('toto')).toBeOnTheScreen()
    expect(screen.getByTestId('tag-icon')).toBeOnTheScreen()
  })
})
