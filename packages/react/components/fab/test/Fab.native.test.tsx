import { render, screen, userEvent } from '@testing-library/react-native'
import React from 'react'

import Fab from '@/components/fab/Fab.native'
import { IconName } from '@trilogy-ds/assets'

jest.useFakeTimers()

describe('Fab component', () => {
  it('renders the children correctly', () => {
    render(
      <Fab testId='fab' iconName={IconName.INFOS_CIRCLE} right={20} bottom={15}>
        New Conversation
      </Fab>,
    )
    expect(screen.getByTestId('fab')).toBeOnTheScreen()
  })

  it('shoud be clickable click', async () => {
    const onClick = jest.fn()

    render(
      <Fab testId='fab' onClick={onClick} iconName={IconName.INFOS_CIRCLE} right={20} bottom={15}>
        New Conversation
      </Fab>,
    )
    const user = userEvent.setup()
    await user.press(screen.getByTestId('fab'))
    expect(onClick).toHaveBeenCalled()
  })

  it('shoud be extended', async () => {
    const onClick = jest.fn()

    render(
      <Fab extended testId='fab' onClick={onClick} iconName={IconName.INFOS_CIRCLE} right={20} bottom={15}>
        New Conversation
      </Fab>,
    )
    expect(screen.getByText('New Conversation')).toBeOnTheScreen()
  })
})
