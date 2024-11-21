import { render, screen } from '@testing-library/react'
import React from 'react'
import renderer from 'react-test-renderer'

import { BreadcrumbItem } from '@/components/breadcrumb'
import { is } from '@/services'

describe('BreadcrumbItem component', () => {
  test('should have a BreadcrumbItem in document', () => {
    render(<BreadcrumbItem />)

    expect(screen.getByRole('listitem')).toBeInTheDocument()
  })

  test('should contain toto as text', () => {
    render(<BreadcrumbItem>toto</BreadcrumbItem>)

    expect(screen.getByText('toto')).toBeInTheDocument()
  })

  test('should have "is-active" className', () => {
    render(<BreadcrumbItem active />)

    expect(screen.getByRole('listitem')).toHaveClass(is('active'))
  })

  test('should not have "is-active" className', () => {
    render(<BreadcrumbItem active={false} />)

    expect(screen.getByRole('listitem')).not.toHaveClass(is('active'))
  })

  test('should have a href', () => {
    render(<BreadcrumbItem href={'https://www.test.com'}>HREF</BreadcrumbItem>)

    expect(screen.getByText('HREF')).toHaveAttribute('href', 'https://www.test.com')
  })

  test('should render breadcrumb with router link', () => {
    const { getByTestId } = render(
      <BreadcrumbItem testId='breadcrumb' routerLink='a' to={'https://www.test.com'}>
        HREF
      </BreadcrumbItem>,
    )
    const breadcrumb = getByTestId('breadcrumb')
    expect(breadcrumb.firstChild?.nodeName).toBe('A')
    expect(breadcrumb.firstChild).toHaveAttribute('to', 'https://www.test.com')
    expect(breadcrumb).toBeInTheDocument()
  })

  test('snapshot', () => {
    const tree = renderer
      .create(
        <BreadcrumbItem className={'className'} href={'href'} active>
          toto
        </BreadcrumbItem>,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
