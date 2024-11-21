import { render, screen, userEvent } from '@testing-library/react-native'
import { IconName } from '@trilogy-ds/assets'
import React from 'react'

import Icon from '@/components/icon/Icon'
import { WrapperReactNativeTesting } from '@/helpers/WrapperReactNativeTesting'

jest.useFakeTimers()

describe('Icon component', () => {
  it('renders the children correctly', async () => {
    render(<Icon name={IconName.ARROW_UP} testId='icon' />, {
      wrapper: WrapperReactNativeTesting,
    })
    expect(screen.getByTestId('icon')).toBeOnTheScreen()
  })

  it('should have icon', async () => {
    render(<Icon name={IconName.ARROW_UP} {...{ testId: 'icon' }} />, {
      wrapper: WrapperReactNativeTesting,
    })
    expect(screen.getByTestId('icon')).toBeOnTheScreen()
  })

  it('should be clickable', async () => {
    const onClick = jest.fn()
    render(<Icon onClick={onClick} name={IconName.ARROW_UP} testId='icon' />, {
      wrapper: WrapperReactNativeTesting,
    })
    const user = userEvent.setup()
    await user.press(screen.getByTestId('icon-pressable'))
    expect(onClick).toHaveBeenCalled()
  })

  it('should be stretched', async () => {
    render(<Icon stretched name={IconName.ARROW_UP} testId='icon' />, {
      wrapper: WrapperReactNativeTesting,
    })
    expect(screen.getByTestId('icon-stretched')).toBeOnTheScreen()
  })

  it('have icon status', async () => {
    render(<Icon status='SUCCESS' name={IconName.ARROW_UP} testId='icon-status' />)
    expect(screen.getByTestId('icon-status')).toBeOnTheScreen()
  })

  it('have circled icon', async () => {
    render(<Icon circled name={IconName.ARROW_UP} testId='icon-circled' />)
    expect(screen.getByTestId('icon-circled')).toBeOnTheScreen()
  })

  it('have text icon', async () => {
    render(<Icon content='' name={IconName.ARROW_UP} testId='icon-content' />)
    expect(screen.getByTestId('icon-content')).toBeOnTheScreen()
  })
})
