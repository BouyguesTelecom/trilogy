import { render, screen } from '@testing-library/react-native'
import * as React from 'react'
import List from '@/components/list/List.native'

jest.useFakeTimers()

describe('List component', () => {
  test('renders without errors', () => {
    const props = { testId: 'list' } as any
    render(<List {...props} />)
    expect(screen.getByTestId('list')).toBeOnTheScreen()
  })
})
