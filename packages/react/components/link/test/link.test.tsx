import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import { IconName } from '@/components/icon'
import Link from '@/components/link/Link'

describe('Link component', () => {
  test('renders children', async () => {
    const { findByText } = render(<Link href='https://example.com'>Example</Link>)
    const linkText = await findByText('Example')
    expect(linkText).toBeInTheDocument()
  })

  test('clicking on link calls onClick', async () => {
    const handleClick = jest.fn()
    const { findByTestId } = render(
      <Link href='https://example.com' onClick={handleClick} testId={'test-link'}>
        Example
      </Link>,
    )
    const link = await findByTestId('test-link')
    fireEvent.click(link)
    expect(handleClick).toHaveBeenCalled()
  })

  test('displays an icon when iconName is passed', async () => {
    const { findByTestId } = render(
      <Link href='https://example.com' iconName={IconName.SEARCH} testId={'test-icon'}>
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
      <Link onClick={fn} accessibilityLabel='label' testId='routerlink' routerLink={'a'} to='https://Example.com'>
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

  test('should have link with typo', () => {
    const { getByTestId } = render(
      <Link accessibilityLabel='label' testId='routerlink' typo='typo'>
        example
      </Link>,
    )
    const link = getByTestId('routerlink')
    expect(link).toBeInTheDocument()
  })
})
