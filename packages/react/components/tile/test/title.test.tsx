import React from 'react'
import { render } from '@testing-library/react'
import Tile from '../Tile'

describe('Tile component', () => {
  it('renders the component with the correct class names', () => {
    const { container } = render(
      <Tile className='my-class' parent>
        toto
      </Tile>,
    )
    expect(container.firstChild).toHaveClass('tile is-parent my-class')
  })

  it('renders children elements', () => {
    const { getByText } = render(<Tile>My Tile</Tile>)
    expect(getByText('My Tile')).toBeInTheDocument()
  })
})
