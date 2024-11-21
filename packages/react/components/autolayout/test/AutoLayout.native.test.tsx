import { render, screen } from '@testing-library/react-native'
import React from 'react'

import AutoLayout from '@/components/autolayout/AutoLayout'
import AutoLayoutWrapper from '@/components/autolayout/AutoLayoutWrapper'
import Text from '@/components/text/Text.native'

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
