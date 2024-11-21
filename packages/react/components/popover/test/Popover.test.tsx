import { render, screen } from '@testing-library/react'
import React from 'react'

import { Popover } from '@/components'
import { is } from '@/services/index'

describe('Popover component', () => {
  test('should have "popover" className', () => {
    const { getByText } = render(<Popover>DEFAULT</Popover>)
    expect(getByText('DEFAULT')).toHaveClass('popover')
  })

  test('should contain toto as text', () => {
    const { getByText } = render(<Popover>toto</Popover>)
    expect(getByText('toto')).toBeInTheDocument()
  })

  test('should be left', () => {
    const { getByText } = render(<Popover direction='left'>toto</Popover>)
    expect(getByText('toto')).toHaveClass(is(`popover-left`))
  })

  test('should be right', () => {
    const { getByText } = render(<Popover direction='right'>toto</Popover>)
    expect(getByText('toto')).toHaveClass(is(`popover-right`))
  })

  test('should be bottom', () => {
    const { getByText } = render(<Popover direction='bottom'>toto</Popover>)
    expect(getByText('toto')).toHaveClass(is(`popover-bottom`))
  })

  test('should have "is-popover-active" className', () => {
    render(<Popover active={true}>POPOVER ACTIVE</Popover>)

    expect(screen.getByText('POPOVER ACTIVE')).toHaveClass(is('popover-active'))
  })

  test('should not have "is-popover-active" className', () => {
    render(<Popover>DEFAULT</Popover>)
    render(<Popover active={false}>POPOVER ACTIVE</Popover>)

    expect(screen.getByText('DEFAULT')).not.toHaveClass(is('popover-active'))
    expect(screen.getByText('POPOVER ACTIVE')).not.toHaveClass(is('popover-active'))
  })

  test('should have "toto" className', () => {
    render(<Popover className='toto'>CLASSNAME</Popover>)

    expect(screen.getByText('CLASSNAME')).toHaveClass('toto')
  })

  test('should have "CONTENT" content', () => {
    render(<Popover content='CONTENT'>DEFAULT</Popover>)

    expect(screen.getByText('CONTENT')).toHaveClass('popover-content')
    expect(screen.getByText('CONTENT')).toBeInTheDocument()
  })
})
