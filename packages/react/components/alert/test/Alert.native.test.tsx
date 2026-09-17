import { render, screen } from '@testing-library/react-native'
import * as React from 'react'
import Alert from '@/components/alert/Alert.native'
import { StatusState } from "@/interfaces/Status";

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
