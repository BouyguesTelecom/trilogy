import * as React from 'react'
import { render } from '@testing-library/react'
import Icon from '../Icon'
import { IconName } from '../IconNameEnum'
import { IconPosition } from '../IconEnum'
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
    const { getByTestId } = render(<Icon {...defaultProps} data-testid={'icon'} />)
    const icon = getByTestId('icon')
    expect(icon).toHaveClass('icon')
    expect(icon).toBeInTheDocument()
  })
})
