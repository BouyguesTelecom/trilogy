import { render, screen, userEvent } from '@testing-library/react-native'
import React from 'react'

import Box from '@/components/box/Box.native'
import BoxContent from '@/components/box/content/BoxContent.native'
import BoxHeader from '@/components/box/header/BoxHeader.native'

jest.useFakeTimers()

describe('Box component', () => {
  it('should render correctly', () => {
    render(
      <Box testId={'box'}>
        <BoxContent>Im a box</BoxContent>
      </Box>,
    )

    expect(screen.getByText('Im a box')).toBeOnTheScreen()
  })

  test('renders children', () => {
    render(
      <Box>
        <BoxHeader>Box Header</BoxHeader>
        <BoxContent> Box Content</BoxContent>
      </Box>,
    )
    expect(screen.getByText('Box Content')).toBeOnTheScreen()
  })

  test('calls onClick handler when clicked', async () => {
    const onClick = jest.fn()
    render(
      <Box onClick={onClick} testId='box'>
        Box Cliquable
      </Box>,
    )
    const user = userEvent.setup()
    await user.press(screen.getByTestId('box'))
    expect(onClick).toHaveBeenCalled()
  })

  test('Should have skeleton', () => {
    render(<Box skeleton />)
    expect(screen.getByTestId('skeleton')).toBeOnTheScreen()
  })
})
