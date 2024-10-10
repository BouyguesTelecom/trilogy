import { render, screen } from '@testing-library/react-native'
import * as React from 'react'
import ListItem from '../ListItem.native'

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
