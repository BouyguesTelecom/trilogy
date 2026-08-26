import * as React from 'react'
import { render } from '@testing-library/react'
import Spacer from '@/components/spacer/Spacer'
import { SpacerSize } from '@/components/spacer/SpacerEnum'

describe('Spacer component', () => {
  it('renders the spacer with default props', () => {
    const { container } = render(<Spacer size={SpacerSize.SEVEN} />)
    const spacerElement = container.firstChild as HTMLElement
    expect(spacerElement.style.marginLeft).toBe('0px')
  })

  it('renders the spacer with horizontal margin', () => {
    const { container } = render(<Spacer horizontal size={SpacerSize.TWO} />)
    const spacerElement = container.firstChild as HTMLElement
    expect(spacerElement.style.marginLeft).toBe('8px')
    expect(spacerElement.style.marginTop).toBe('0px')
  })

  it('renders the spacer with vertical margin', () => {
    const { container } = render(<Spacer size={SpacerSize.FIVE} />)
    const spacerElement = container.firstChild as HTMLElement
    expect(spacerElement.style.marginLeft).toBe('0px')
    expect(spacerElement.style.marginTop).toBe('24px')
  })
})
