import React from 'react'
import { render } from '@testing-library/react'
import ListItem from '../ListItem'
import { IconName } from '../../../icon'
import { ListIconStatus } from '../ListItemProps'

describe('ListItem', () => {
  it('should render correctly text', () => {
    const { container } = render(<ListItem customIcon={IconName.TRASH}>Hello World</ListItem>)
    expect(container.firstChild).toContainHTML('<span>Hello World</span>')
  })

  it('should render correctly with title and description', () => {
    const { container } = render(<ListItem title='Title'>Hello World</ListItem>)
    expect(container.firstChild).toContainHTML('<b>Title</b>')
    expect(container.firstChild).toContainHTML('<p>Hello World</p>')
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
