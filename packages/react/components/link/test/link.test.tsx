import * as React from 'react'
import { fireEvent, render } from '@testing-library/react'
import Link from '../Link'
import { IconName } from '../../icon'

describe('Link component', () => {
  test('renders children', async () => {
    const { findByText } = render(
      <Link href='https://example.com' data-testid={'test-link'}>
        Example
      </Link>,
    )
    const linkText = await findByText('Example')
    expect(linkText).toBeInTheDocument()
  })

  test('clicking on link calls onClick', async () => {
    const handleClick = jest.fn()
    const { findByText } = render(
      <Link href='https://example.com' onClick={handleClick} data-testid={'test-link'}>
        Example
      </Link>,
    )
    const link = await findByText('Example')
    fireEvent.click(link)
    expect(handleClick).toHaveBeenCalled()
  })

  test('displays an icon when iconName is passed', async () => {
    const { findByTestId } = render(
      <Link href='https://example.com' iconName={IconName.SEARCH} data-testid={'test-icon'}>
        Example
      </Link>,
    )
    const icon = await findByTestId('test-icon')
    expect(icon).toHaveClass('link has-icon')
    expect(icon).toBeInTheDocument()
  })

  test('should have link with routerlink', () => {
    const fn = jest.fn()
    const { getByTestId } = render(
      <Link onClick={fn} accessibilityLabel='label' data-testid='routerlink' routerLink={'a'} to='https://Example.com'>
        example
      </Link>,
    )
    const routerlink = getByTestId('routerlink')
    fireEvent.click(routerlink)
    expect(routerlink).toBeInTheDocument()
    expect(routerlink).toHaveAttribute('aria-label', 'label')
    expect(fn).toHaveBeenCalled()
    expect(routerlink).toHaveAttribute('to', 'https://Example.com')
  })
})
