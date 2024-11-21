import { render, screen } from '@testing-library/react-native'
import React from 'react'

import Alert from '@/components/alert/Alert.native'
import { StatusState } from '@/objects'

describe('Alert', () => {
  it('should render correctly', () => {
    render(
      <Alert
        testId={'alert'}
        display
        status={StatusState.INFO}
        title='Alert information'
        description='Lorem Ipsum is simply dummy text of the printing and type..'
      />,
    )

    expect(screen.getByText('Alert information')).toBeOnTheScreen()
  })
})
