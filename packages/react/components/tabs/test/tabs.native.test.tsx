import { render, screen, userEvent } from '@testing-library/react-native'
import * as React from 'react'
import Tabs from '../Tabs'
import { TabsItem } from '../index'

jest.useFakeTimers()

describe('Tabs', () => {
  it('should be rendered', () => {
    render(
      <Tabs>
        <TabsItem>Tab 1</TabsItem>
        <TabsItem>Tab 2</TabsItem>
        <TabsItem>Tab 3</TabsItem>
      </Tabs>,
    )

    expect(screen.getByText('Tab 1')).toBeOnTheScreen()
    expect(screen.getByText('Tab 2')).toBeOnTheScreen()
    expect(screen.getByText('Tab 3')).toBeOnTheScreen()
  })

  it('should activate tab on click', async () => {
    const onClick = jest.fn()
    render(
      <Tabs>
        <TabsItem onClick={onClick}>Tab 1</TabsItem>
        <TabsItem>Tab 2</TabsItem>
        <TabsItem>Tab 3</TabsItem>
      </Tabs>,
    )

    const user = userEvent.setup()
    await user.press(screen.getByText('Tab 1'))
    expect(onClick).toHaveBeenCalled()
  })

  it('should be disabled', async () => {
    const onClick = jest.fn()
    render(
      <Tabs>
        <TabsItem disabled onClick={onClick}>Tab 1</TabsItem>
        <TabsItem>Tab 2</TabsItem>
        <TabsItem>Tab 3</TabsItem>
      </Tabs>,
    )

    const user = userEvent.setup()
    await user.press(screen.getByText('Tab 1'))
    expect(onClick).not.toHaveBeenCalled()
  })
})
