import { render, screen } from '@testing-library/react'
import React from 'react'
import renderer from 'react-test-renderer'

import { Breadcrumb } from '@/components/breadcrumb'

describe('Breadcrumb component', () => {
  test('should have a Breadcrumb in document', () => {
    render(<Breadcrumb />)

    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByRole('navigation')).toHaveClass('breadcrumb')
  })

  test('should have a aria-label', () => {
    render(<Breadcrumb accessibilityLabel={'breadcrumbs'} />)

    expect(screen.getByRole('navigation').getAttribute('aria-label')).toBe('breadcrumbs')
  })

  test('snapshot', () => {
    const tree = renderer.create(<Breadcrumb className={'className'}>toto</Breadcrumb>).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
