import * as React from 'react'
import { render } from '@testing-library/react'
import Icon from '../Icon'
import { IconName } from '../IconNameEnum'
import { IconPosition, IconStatusPosition } from '../IconEnum'
import { IconProps } from '../IconProps'
import { Alignable, TrilogyColor } from '../../../objects'

const defaultProps: IconProps = {
  size: 'medium',
  name: IconName.TIMES,
  circled: false,
  // @ts-ignore
  content: '',
  position: IconPosition.LEFT,
  markup: 'div',
  stacked: false,
  badgeContent: '',
  stretched: false,
  color: TrilogyColor.ACCENT,
  backgroundColor: 'WHITE',
  onClick: jest.fn(),
  align: Alignable.ALIGNED_START,
  skeleton: false,
  verticalAlign: Alignable.ALIGNED_END,
  className: 'test-class',
  textClassName: 'test-text-class',
  style: {},
}

describe('Icon', () => {
  it('should renders an Icon component with a name', () => {
    const { getByTestId } = render(<Icon {...defaultProps} data-testid={'icon'}/>)
    const icon = getByTestId('icon')
    expect(icon).toHaveClass('icon')
    expect(icon).toBeInTheDocument()
  })

  it('should renders a status Icon component', () => {
    const { getByTestId } = render(<Icon {...defaultProps} data-testid={'icon'} />)
    const icon = getByTestId('icon')
    expect(icon).toHaveClass('icon', 'is-success')
  })

  it('renders the Icon component with the correct props', () => {
    const { getByTestId } = render(<Icon {...defaultProps} data-testid={'icon'}/>)
    const iconElement = getByTestId('icon')

    expect(iconElement).toBeInTheDocument()
    expect(iconElement).toHaveClass('icon')
    expect(iconElement).toHaveClass('is-medium')
    expect(iconElement).toHaveClass('is-success')
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
    const { getByTestId } = render(<Icon {...props} data-testid={'icon'} />)
    const iconElement = getByTestId('icon')

    expect(iconElement).toBeInTheDocument()
    expect(iconElement).toHaveClass('icon', 'is-circled')
  })
})
