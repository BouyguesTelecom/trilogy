import { render, screen, userEvent } from '@testing-library/react-native'
import { IconName } from '@trilogy-ds/assets'
import * as React from 'react'
import Fab from '../Fab.native'

jest.useFakeTimers()

describe('Fab component', () => {
  it('renders the children correctly', () => {
    render(
      <Fab id='fab' iconName={IconName.INFOS_CIRCLE} right={20} bottom={15}>
        New Conversation
      </Fab>,
    )
    expect(screen.getByTestId('fab')).toBeOnTheScreen()
  })

  it('shoud be clickable click', async () => {
    const onClick = jest.fn()

    render(
      <Fab id='fab' onClick={onClick} iconName={IconName.INFOS_CIRCLE} right={20} bottom={15}>
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
      <Fab extended id='fab' onClick={onClick} iconName={IconName.INFOS_CIRCLE} right={20} bottom={15}>
        New Conversation
      </Fab>,
    )
    expect(screen.getByText('New Conversation')).toBeOnTheScreen()
  })
})
