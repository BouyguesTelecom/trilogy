import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Notification from '../Notification'
import { NotificationProps } from '../NotificationProps'

describe('Notification', () => {
  const defaultProps: NotificationProps = {
    title: 'Test notification',
    description: 'Test description',
    onClick: jest.fn(),
    closable: jest.fn(),
  }

  it('renders the title and description', () => {
    const { getByText } = render(<Notification {...defaultProps} />)
    expect(getByText('Test notification')).toBeInTheDocument()
    expect(getByText('Test description')).toBeInTheDocument()
  })

  it('calls onClick when clicked', () => {
    const { getByText } = render(<Notification {...defaultProps} />)
    fireEvent.click(getByText('Test notification'))
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1)
  })

  it('calls closable when the close icon is clicked', () => {
    const { getByRole } = render(<Notification {...defaultProps} />)
    const closeButton = getByRole('button')
    fireEvent.click(closeButton)
    expect(defaultProps.closable).toHaveBeenCalledTimes(1)
  })
})
