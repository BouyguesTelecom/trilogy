import { render, screen, userEvent } from '@testing-library/react-native'
import React from 'react'

import CardImage from '@/components/card/image/CardImage.native'

jest.useFakeTimers()

describe('CardImage component', () => {
  it('should be rendered', () => {
    render(
      <CardImage
        src='https://i.etsystatic.com/10951167/r/il/df66c4/1860902191/il_570xN.1860902191_kuoj.jpg'
        {...{ testID: 'test' }}
      />,
    )
    expect(screen.getByTestId('test')).toBeOnTheScreen()
  })

  it('should be clickable', async () => {
    const onClick = jest.fn()

    render(
      <CardImage
        onClick={onClick}
        src='https://i.etsystatic.com/10951167/r/il/df66c4/1860902191/il_570xN.1860902191_kuoj.jpg'
        {...{ testID: 'test' }}
      />,
    )

    const user = userEvent.setup()
    await user.press(screen.getByTestId('test'))
    expect(onClick).toHaveBeenCalled()
  })
})
