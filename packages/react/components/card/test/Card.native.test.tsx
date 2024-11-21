import { render, screen, userEvent } from '@testing-library/react-native'
import React from 'react'

import Card from '@/components/card/Card.native'
import CardContent from '@/components/card/content/CardContent.native'
import Text from '@/components/text/Text.native'

jest.useFakeTimers()

describe('Card component', () => {
  it('should render children when passed in', () => {
    render(
      <Card>
        <CardContent>
          <Text>Hello world</Text>
        </CardContent>
      </Card>,
    )
    expect(screen.getByText('Hello world')).toBeOnTheScreen()
  })

  it('should call onClick when clicked', async () => {
    const onClick = jest.fn()
    render(<Card onClick={onClick} />)
    const user = userEvent.setup()
    await user.press(screen.getByTestId('card-click-test'))
    expect(onClick).toHaveBeenCalled()
  })

  it('should render as loading when skeleton prop is true', () => {
    render(<Card skeleton />)
    expect(screen.getByTestId('skeleton-id')).toBeOnTheScreen()
  })

  it('should be horizontal', () => {
    render(<Card horizontal />)
    expect(screen.getByTestId('card-horizontal')).toBeOnTheScreen()
  })

  it('should be reversed', () => {
    render(<Card reversed />)
    expect(screen.getByTestId('card-reversed')).toBeOnTheScreen()
  })
})
