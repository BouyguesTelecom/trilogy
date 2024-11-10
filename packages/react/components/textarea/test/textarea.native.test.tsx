import { render, screen } from '@testing-library/react-native'
import { IconName } from '@trilogy-ds/assets'
import * as React from 'react'
import Textarea from '../Textarea'

jest.useFakeTimers()

describe('Textarea', () => {
  it('renders without crashing', () => {
    const props: any = {
      label: 'label',
      placeholder: 'With status icon error',
      iconName: IconName.CHECK,
      statusIconName: 'tri-exclamation-circle',
      status: 'error',
      help: 'This is a help message',
      maxLength: 150,
    }
    render(<Textarea {...props} />)
    expect(screen.getByText('This is a help message')).toBeOnTheScreen()
  })
})
