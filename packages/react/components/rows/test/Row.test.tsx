import React from 'react'
import { render } from '@testing-library/react'
import Rows from '../Rows'
import RowItem from '../item'

describe('Rows', () => {
  it('renders children', () => {
    const { getByText } = render(
      <Rows>
        <RowItem>Child 1</RowItem>
        <RowItem>Child 2</RowItem>
      </Rows>,
    )

    expect(getByText('Child 1')).toBeInTheDocument()
    expect(getByText('Child 2')).toBeInTheDocument()
  })

  it('adds className to component', () => {
    const { container } = render(<Rows className='test-class' />)
    expect(container.firstChild).toHaveClass(' rows test-class')
  })
})
