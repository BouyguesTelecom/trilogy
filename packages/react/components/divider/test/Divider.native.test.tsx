import { render, screen } from '@testing-library/react-native'
import React from 'react'

import Divider from '@/components/divider/Divider.native'

jest.useFakeTimers()

describe('divider component', () => {
  it('renders the children correctly', () => {
    render(<Divider {...({ testID: 'test' } as any)} />)
    expect(screen.getByTestId('test')).toBeOnTheScreen()
  })

  it('renders the children correctly with content', () => {
    render(<Divider content='content' />)
    expect(screen.getByText('content')).toBeOnTheScreen()
  })

  it('renders the children correctly with icon', () => {
    render(<Divider iconName='tri-alert' />)
    expect(screen.getByTestId('icon-id')).toBeOnTheScreen()
  })
})
