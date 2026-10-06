import { render, screen } from '@testing-library/react-native'
import { StatusState } from '@/objects/facets/Status'
import Alert from '@/components/alert/Alert.native'

describe('Alert', () => {
  it('should render correctly', () => {
    render(
      <Alert
        id={'alert'}
        display
        status={StatusState.INFO}
        title='Alert information'
        description='Lorem Ipsum is simply dummy text of the printing and type..'
      />,
    )

    expect(screen.getByText('Alert information')).toBeOnTheScreen()
  })
})
