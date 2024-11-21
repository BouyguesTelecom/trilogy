import { render } from '@testing-library/react'
import React from 'react'

import Rows from '@/components/rows/Rows'
import RowItem from '@/components/rows/item'

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
