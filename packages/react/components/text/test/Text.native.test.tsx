import { render, screen } from '@testing-library/react-native'
import Text from '@/components/text/Text'
import { TextLevels } from '@/components/text/TextEnum'

jest.useFakeTimers()

describe('Title', () => {
  it('should render the product tour content', () => {
    render(<Text level={TextLevels.ONE}>Title level 1</Text>)
    expect(screen.getByText('Title level 1')).toBeOnTheScreen()
  })

  it('should forward testId as testID and nativeID', () => {
    render(
      <Text level={TextLevels.ONE} testId='my-text'>
        Text level 1
      </Text>,
    )

    const text = screen.getByTestId('my-text')
    expect(text).toBeOnTheScreen()
    expect(text.props.nativeID).toBe('my-text')
  })
})
