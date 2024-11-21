import { render, screen, userEvent } from '@testing-library/react-native'
import React from 'react'

import Text from '@/components/text/Text'
import { TextLevels } from '@/components/text/TextEnum'

jest.useFakeTimers()

describe('Title', () => {
  it('should render the product tour content', () => {
    render(<Text level={TextLevels.ONE}>Title level 1</Text>)
    expect(screen.getByText('Title level 1')).toBeOnTheScreen()
  })

  it('should render the product tour content', async () => {
    const onClick = jest.fn()

    render(
      <Text level={TextLevels.ONE} onClick={onClick}>
        Title level 1
      </Text>,
    )

    const user = userEvent.setup()
    await user.press(screen.getByText('Title level 1'))
    expect(onClick).toHaveBeenCalled()
  })
})
