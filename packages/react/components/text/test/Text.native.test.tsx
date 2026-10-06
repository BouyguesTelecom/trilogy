import { render, screen } from '@testing-library/react-native'
import Text from '../Text'
import { TextLevels } from '../TextEnum'

jest.useFakeTimers()

describe('Title', () => {
  it('should render the product tour content', () => {
    render(<Text level={TextLevels.ONE}>Title level 1</Text>)
    expect(screen.getByText('Title level 1')).toBeOnTheScreen()
  })
})
