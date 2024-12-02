// Dependencies
import * as React from 'react'

// Testing methods
import { render } from '@testing-library/react'

// Component to test
import { Popover } from '../'
import { Link } from '@/components/link'

describe('Popover component', () => {
  test('should have "popover" className', () => {
    const { getByTestId } = render(
      <Popover data-testid="popover-id" trigger={<Link>Hello</Link>}>
        DEFAULT
      </Popover>,
    )
    expect(getByTestId('popover-id')).toHaveClass('popover')
  })
})
