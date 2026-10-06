import { render, screen } from '@testing-library/react-native'
import Chips from '../../Chips.native'
import ChipsList from '../ChipsList.native'

describe('chips component', () => {
  it('renders the children correctly', () => {
    render(
      <ChipsList multiple>
        <Chips>Hello, world!</Chips>
      </ChipsList>,
    )
    expect(screen.getByText('Hello, world!')).toBeOnTheScreen()
  })
})
