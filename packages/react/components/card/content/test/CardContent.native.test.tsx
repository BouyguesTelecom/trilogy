import { render, screen } from '@testing-library/react-native'
import * as React from 'react'
import Text from '@/components/text/Text.native'
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
})
