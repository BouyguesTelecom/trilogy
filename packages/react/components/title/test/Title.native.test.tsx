import { render, screen, userEvent } from '@testing-library/react-native'
import * as React from 'react'
import Title from '../Title'
import { TitleLevels } from '../TitleEnum'

jest.useFakeTimers()

describe('Title', () => {
  it('should render the product tour content', () => {
    render(<Title level={TitleLevels.ONE}>Title level 1</Title>)
    expect(screen.getByText('Title level 1')).toBeOnTheScreen()
  })

  it('should render the product tour content', async () => {
    const onClick = jest.fn()

    render(
      <Title level={TitleLevels.ONE} onClick={onClick}>
        Title level 1
      </Title>,
    )

    const user = userEvent.setup()
    await user.press(screen.getByText('Title level 1'))
    expect(onClick).toHaveBeenCalled()
  })
})
