import { render, screen, userEvent } from '@testing-library/react-native'
import React from 'react'

import Text from '@/components//text/Text.native'
import Card from '@/components/card/Card.native'
import CardContent from '@/components/card/content/CardContent.native'

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
    render(
      <Card>
        <CardContent onClick={onClick} {...{ testID: 'test' }} />
      </Card>,
    )
    const user = userEvent.setup()
    await user.press(screen.getByTestId('test'))
    expect(onClick).toHaveBeenCalled()
  })

  it('should render', () => {
    render(
      <Card>
        <CardContent title='title' titleSup='titleSup' buttonText='button' />
      </Card>,
    )
    expect(screen.getByTestId('titleSup-id')).toBeOnTheScreen()
    expect(screen.getByTestId('title-id')).toBeOnTheScreen()
    expect(screen.getByTestId('button-id')).toBeOnTheScreen()
  })
})
