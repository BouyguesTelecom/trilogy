import { render, screen } from '@testing-library/react-native'
import * as React from 'react'
import Box from '../Box.native'
import BoxContent from '../content/BoxContent.native'
import BoxHeader from '../header/BoxHeader.native'

jest.useFakeTimers()

describe('Box component', () => {
  it('should render correctly', () => {
    render(
      <Box id={'box'}>
        <BoxContent>Im a box</BoxContent>
      </Box>,
    )

    expect(screen.getByText('Im a box')).toBeOnTheScreen()
  })

  test('renders children', () => {
    render(
      <Box>
        <BoxHeader>Box Header</BoxHeader>
        <BoxContent>Box Content</BoxContent>
      </Box>,
    )
    expect(screen.getByText('Box Content')).toBeOnTheScreen()
  })

  test('Should have skeleton', () => {
    render(<Box skeleton data-testid={'skeleton'} />)
    expect(screen.getByTestId('skeleton')).toBeOnTheScreen()
  })
})
