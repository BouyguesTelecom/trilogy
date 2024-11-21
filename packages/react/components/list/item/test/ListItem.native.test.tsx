import { render, screen } from '@testing-library/react-native'
import React from 'react'

import ListItem from '@/components/list/item/ListItem.native'

jest.useFakeTimers()

describe('ListItem component', () => {
  test('renders without errors', () => {
    render(<ListItem>Hello World</ListItem>)
    expect(screen.getByText('Hello World')).toBeOnTheScreen()
  })

  test('should have title', () => {
    render(<ListItem title='Title'>Hello World</ListItem>)
    expect(screen.getByText('Title')).toBeOnTheScreen()
  })
})
