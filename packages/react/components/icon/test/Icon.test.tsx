import { render } from '@testing-library/react'
import React from 'react'

import Icon from '@/components/icon/Icon'
import { IconPosition, IconStatusPosition } from '@/components/icon/IconEnum'
import { IconName } from '@/components/icon/IconNameEnum'
import { IconProps } from '@/components/icon/IconProps'
import { Alignable, TrilogyColor } from '@/objects'

const defaultProps: IconProps = {
  size: 'medium',
  name: IconName.TIMES,
  status: 'SUCCESS',
  circled: false,
  content: '',
  position: IconPosition.LEFT,
  markup: 'div',
  stacked: false,
  badgeContent: '',
  statusPosition: IconStatusPosition.TOP,
  stretched: false,
  color: TrilogyColor.ACCENT,
  backgroundColor: 'WHITE',
  onClick: jest.fn(),
  align: Alignable.ALIGNED_START,
  skeleton: false,
  verticalAlign: Alignable.ALIGNED_END,
  testId: 'icon',
  className: 'test-class',
  textClassName: 'test-text-class',
  style: {},
}

describe('Icon', () => {
  it('should renders an Icon component with a name', () => {
    const { getByTestId } = render(<Icon {...defaultProps} />)
    const icon = getByTestId('icon')
    expect(icon).toHaveClass('icon')
    expect(icon).toBeInTheDocument()
  })

  it('should renders a status Icon component', () => {
    const { getByTestId } = render(<Icon {...defaultProps} />)
    const icon = getByTestId('icon')
    expect(icon).toHaveClass('icon', 'has-status')
  })

  it('renders the Icon component with the correct props', () => {
    const { getByTestId } = render(<Icon {...defaultProps} />)
    const iconElement = getByTestId('icon')

    expect(iconElement).toBeInTheDocument()
    expect(iconElement).toHaveClass('icon')
    expect(iconElement).toHaveClass('is-medium')
    expect(iconElement).toHaveClass('has-status')
    expect(iconElement).not.toHaveClass('circled')
    expect(iconElement).not.toHaveClass('loading')
    expect(iconElement).not.toHaveClass('stacked')
    expect(iconElement).not.toHaveClass('stretched')
    expect(iconElement).not.toHaveClass('badge-content')
    expect(iconElement).toHaveAttribute('data-testid', 'icon')
    expect(iconElement).toHaveClass('test-class')
    expect(iconElement).not.toHaveClass('test-text-class')
  })

  it('renders the CircleIcon component when circled prop is true', () => {
    const props = { ...defaultProps, circled: true }
    const { getByTestId } = render(<Icon {...props} />)
    const iconElement = getByTestId('icon')

    expect(iconElement).toBeInTheDocument()
    expect(iconElement).toHaveClass('icon', 'is-circled')
  })

  it('renders the TextIcon component when content prop is passed', () => {
    const props = { ...defaultProps, content: 'Test' }
    const { getByTestId } = render(<Icon {...props} />)
    const iconElement = getByTestId('icon')

    expect(iconElement).toBeInTheDocument()
    expect(iconElement).toHaveClass('is-aligned-end')
  })
})
