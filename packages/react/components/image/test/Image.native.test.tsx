import { render, screen, userEvent } from '@testing-library/react-native'
import React from 'react'

import Image from '@/components/image/Image.native'

jest.useFakeTimers()

describe('Image component', () => {
  test('should have "image" className', () => {
    render(<Image src={'https://www.test.com'} {...{ testID: 'image' }} />)
    expect(screen.getByTestId('image')).toBeOnTheScreen()
  })

  test('should be clickable', async () => {
    const onClick = jest.fn()
    render(<Image onClick={onClick} src={'https://www.test.com'} {...{ testID: 'image' }} />)
    expect(screen.getByTestId('image')).toBeOnTheScreen()
    const user = userEvent.setup()
    await user.press(screen.getByTestId('image'))
    expect(onClick).toHaveBeenCalled()
  })
})
