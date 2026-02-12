import { render, screen } from '@testing-library/react-native'
import * as React from 'react'
import Text from '../../text/Text.native'
import AutoLayout from '../AutoLayout/AutoLayout'
import AutoLayoutWrapper from '../AutoLayoutWrapper'

describe('AutoLayout component', () => {
  it('should render its children', () => {
    render(
      <AutoLayoutWrapper autolayout={false}>
        <AutoLayout>
          <Text>Hello world!</Text>
        </AutoLayout>
      </AutoLayoutWrapper>,
    )

    expect(screen.getByText('Hello world!')).toBeOnTheScreen()
  })
})
