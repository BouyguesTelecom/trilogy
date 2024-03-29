import React, { useContext } from 'react'
import { render } from '@testing-library/react'
import { TrilogyProvider } from '../provider'
import { TrilogyContext } from '../index'

describe('TrilogyProvider', () => {
  it('should render children', () => {
    const { getByText } = render(
      <TrilogyProvider>
        <div>Test Child</div>
      </TrilogyProvider>,
    )
    const childElement = getByText(/Test Child/i)
    expect(childElement).toBeInTheDocument()
  })

  it('should render children with the initial styled state', () => {
    const testStyledState = true
    const { getByTestId } = render(
      <TrilogyProvider mangled>
        <TrilogyContext.Consumer>
          {({ styled }) => <div data-testid='styled-state'>{styled.toString()}</div>}
        </TrilogyContext.Consumer>
      </TrilogyProvider>,
    )
    const styledState = getByTestId('styled-state')
    expect(styledState).toHaveTextContent(testStyledState.toString())
  })

  function getLink() {
    return document.head.getElementsByTagName("link")[0]
  }

  it('should append link tag with the good version', () => {
    render(
      <TrilogyProvider injectTrilogyAssets>
        <TrilogyContext.Consumer>
          {() => <div>test</div>}
        </TrilogyContext.Consumer>
      </TrilogyProvider>,
    )
    const headerLink = getLink()
    expect(headerLink).toBeDefined()
    expect(headerLink.getAttribute('href')).toContain('/trilogy.css')
  })
})
