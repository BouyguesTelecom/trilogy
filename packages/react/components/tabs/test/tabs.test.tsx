import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import { Tabs, TabsItem } from '@/components'

describe('Tabs', () => {
  it('should activate tab on click', () => {
    const onClickMock = jest.fn()
    const { getByText } = render(
      <Tabs onClick={onClickMock}>
        <TabsItem>Tab 1</TabsItem>
        <TabsItem>Tab 2</TabsItem>
        <TabsItem>Tab 3</TabsItem>
      </Tabs>,
    )

    fireEvent.click(getByText('Tab 2'))

    expect(onClickMock).toHaveBeenCalled()
    expect(getByText('Tab 2')).toHaveClass('is-active')
  })

  it('disables tabs when disabled prop is set', () => {
    const handleClick = jest.fn()
    const { getByText } = render(
      <Tabs disabled onClick={handleClick}>
        <TabsItem>Tab 1 content</TabsItem>
        <TabsItem>Tab 2 content</TabsItem>
      </Tabs>,
    )

    fireEvent.click(getByText('Tab 1 content'))
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('should render the component TabsItem with the correct props', () => {
    const onClickMock = jest.fn()
    const { getByRole } = render(
      <TabsItem active={true} disabled={false} onClick={onClickMock} to={'/test'}>
        My Tab Item
      </TabsItem>,
    )

    const tabItem = getByRole('tab')
    expect(tabItem).toHaveAttribute('data-tab-navigation', '')
    expect(tabItem).toHaveAttribute('aria-selected', 'true')
    expect(tabItem).toHaveTextContent('My Tab Item')
    expect(onClickMock).toHaveBeenCalledTimes(0)

    fireEvent.click(tabItem)
    expect(onClickMock).toHaveBeenCalledTimes(1)
  })

  it('should renders a RouterLink with correct props when routerLink and to props are passed', () => {
    const mockOnClick = jest.fn()
    const mockHref = '/example'
    const { getByTestId, getByText } = render(
      <TabsItem active={false} onClick={mockOnClick} routerLink={'a'} data-testid={'test-router-link'} href={mockHref}>
        Example Tab
      </TabsItem>,
    )

    const routerLink = getByTestId('test-router-link')
    expect(routerLink).toHaveAttribute('tabIndex', '0')
    expect(routerLink).toHaveClass('tab')
    expect(routerLink).not.toHaveClass('is-active')
    expect(getByText('Example Tab')).toBeInTheDocument()

    fireEvent.click(routerLink)
    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })
})
