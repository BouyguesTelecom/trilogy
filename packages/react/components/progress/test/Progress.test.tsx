import * as React from 'react'
import { render } from '@testing-library/react'
import Progress from '../Progress'
import ProgressRadial from '../radial'

describe('Progress', () => {
  it('renders correctly with percent value', () => {
    const { getByTestId } = render(<Progress value={50} data-testid='progress-bar' />)
    const progressBar = getByTestId('progress-bar')
    expect(progressBar).toHaveAttribute('value', '50')
  })

  it('renders correctly with maxPercent value', () => {
    const { getByTestId } = render(<Progress value={25} max={50} data-testid='progress-bar' />)
    const progressBar = getByTestId('progress-bar')
    expect(progressBar).toHaveAttribute('max', '50')
  })

  it('renders correctly with unique legend', () => {
    const { getByText } = render(<Progress value={50} legendCenter='50%' data-testid='progress-bar' />)
    const legend = getByText('50%')
    expect(legend).toBeInTheDocument()
  })
})

describe('ProgressRadial', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(
      <ProgressRadial value={50} label='Test Label' description='Test Description' data-testid='progress-radial' />,
    )
    expect(getByTestId('progress-radial')).toBeInTheDocument()
  })

  it('renders label and description', () => {
    const { getByText } = render(<ProgressRadial value={50} label='Test Label' description='Test Description' />)
    expect(getByText('Test Label')).toBeInTheDocument()
    expect(getByText('Test Description')).toBeInTheDocument()
  })

  it('renders skeleton', () => {
    const { getByTestId } = render(<ProgressRadial skeleton data-testid='progress-radial' />)
    expect(getByTestId('progress-radial')).toHaveClass('is-loading')
  })
})
