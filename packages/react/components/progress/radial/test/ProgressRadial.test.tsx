import * as React from 'react'
import { render } from '@testing-library/react'
import ProgressRadial from '../ProgressRadial'
import ProgressRadialItem from '../item'
import { TrilogyColor } from '../../../../objects'

describe('ProgressRadial', () => {
  it('renders the label when provided', () => {
    const { getByText } = render(<ProgressRadial value={50} label='Test label' />)
    expect(getByText('Test label')).toBeInTheDocument()
  })

  it('renders the description when provided', () => {
    const { getByText } = render(<ProgressRadial value={50} description='Test description' />)
    expect(getByText('Test description')).toBeInTheDocument()
  })

  it('renders with default props', () => {
    const { container } = render(<ProgressRadialItem color={TrilogyColor.MAIN} percent={20}></ProgressRadialItem>)
    expect(container.firstChild).toHaveClass('progress-circle-slice')
  })

  it('renders with custom color', () => {
    const { container } = render(<ProgressRadialItem color={TrilogyColor.MAIN} percent={20} />)
    expect(container.firstChild).toHaveClass('progress-circle-background-MAIN')
  })

  it('renders with custom className', () => {
    const { container } = render(<ProgressRadialItem color={TrilogyColor.MAIN} className='custom-class' percent={20} />)
    expect(container.firstChild).toHaveClass('custom-class')
  })

  it('renders with children', () => {
    const { getByText } = render(
      <ProgressRadial label='Test label'>
        <ProgressRadialItem color='warning' percent={20} />
      </ProgressRadial>,
    )
    expect(getByText('Test label')).toBeInTheDocument()
  })
})
