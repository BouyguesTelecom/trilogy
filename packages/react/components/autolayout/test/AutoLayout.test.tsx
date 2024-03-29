import React from 'react'
import { render } from '@testing-library/react'
import AutoLayout from '../AutoLayout'
import AutoLayoutWrapper from '../AutoLayoutWrapper'

describe('AutoLayout component', () => {
  it('should render its children', () => {
    const { getByText } = render(
      <AutoLayoutWrapper autolayout={false}>
        <AutoLayout>
          <div>Hello world!</div>
        </AutoLayout>
      </AutoLayoutWrapper>,
    )

    expect(getByText('Hello world!')).toBeInTheDocument()
  })
})
