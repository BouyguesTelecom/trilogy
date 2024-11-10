import { render, screen } from '@testing-library/react-native'
import * as React from 'react'
import Pagination from '../Pagination'

jest.useFakeTimers()

describe('Pagination component', () => {
  it('should render with default props', async () => {
    const onClick = jest.fn()

    render(<Pagination {...{ testID: 'test' }} length={50} onClick={onClick} />)
    expect(screen.getByTestId('test')).toBeOnTheScreen()

    Array.from({ length: 5 }).map((_, i) => {
      expect(screen.getByText(String(i + 1), { includeHiddenElements: true }))
    })
  })
})
