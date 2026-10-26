import { render } from '@testing-library/react'
import Spacer from '@/components/spacer/Spacer'
import { SpacerSize } from '@/components/spacer/SpacerEnum'

describe('Spacer component', () => {
  it('renders the spacer with default props', () => {
    const { container } = render(<Spacer size={SpacerSize.SEVEN} />)
    expect(container.firstChild).toHaveStyle({ marginLeft: '0px' } as any)
  })

  it('renders the spacer with horizontal margin', () => {
    const { container } = render(<Spacer horizontal size={SpacerSize.TWO} />)
    expect(container.firstChild).toHaveStyle({ marginLeft: '8px' } as any)
    expect(container.firstChild).toHaveStyle({ marginTop: '0px' } as any)
  })

  it('renders the spacer with vertical margin', () => {
    const { container } = render(<Spacer size={SpacerSize.FIVE} />)
    expect(container.firstChild).toHaveStyle({ marginLeft: '0px' } as any)
    expect(container.firstChild).toHaveStyle({ marginTop: '24px' } as any)
  })
})
