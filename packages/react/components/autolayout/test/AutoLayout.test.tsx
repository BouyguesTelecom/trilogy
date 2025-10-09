import { render } from '@testing-library/react'
import * as React from 'react'
import AutoLayout from '../AutoLayout/AutoLayout'
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
