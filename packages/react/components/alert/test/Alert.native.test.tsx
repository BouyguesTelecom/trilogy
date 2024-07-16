import { render, screen } from '@testing-library/react-native'
import * as React from 'react'
import { AlertState } from '../../../objects'
import Alert from '../Alert.native'

describe('Alert', () => {
  it('should render correctly', () => {
    render(
      <Alert
        testId={'alert'}
        display
        alert={AlertState.INFO}
        title='Alert information'
        description='Lorem Ipsum is simply dummy text of the printing and type..'
      />,
    )

    expect(screen.getByText('Alert information')).toBeOnTheScreen()
  })
})
