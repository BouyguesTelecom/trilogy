import * as React from 'react'
import { render } from '@testing-library/react'
import ListItem from '../ListItem'
import { ListIconStatus } from '../ListItemProps'

describe('ListItem', () => {
  it('should render correctly with description', () => {
    const { container } = render(<ListItem>Hello World</ListItem>)
    expect(container.firstChild).toContainHTML(
      `<li class="list-item"><div class="list-item-content">Hello World</div></li>`,
    )
  })

  it('should apply status class', () => {
    const { container } = render(<ListItem status={ListIconStatus.SUCCESS}>Hello World</ListItem>)
    expect(container.firstChild).toHaveClass('is-success')
  })

  it('should apply custom class name', () => {
    const { container } = render(<ListItem className='custom-class'>Hello World</ListItem>)
    expect(container.firstChild).toHaveClass('custom-class')
  })
})
