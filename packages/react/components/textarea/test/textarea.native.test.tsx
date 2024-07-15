import { fireEvent, render, screen } from '@testing-library/react-native'
import { IconName } from '@trilogy-ds/assets'
import * as React from 'react'
import Textarea from '../Textarea'

jest.useFakeTimers()

describe('Textarea', () => {
  it('renders without crashing', () => {
    const props: any = {
      testId: 'Textarea',
      label: 'label',
      placeholder: 'With status icon error',
      iconName: IconName.CHECK,
      statusIconName: 'tri-exclamation-circle',
      status: 'error',
      help: 'This is a help message',
      maxLength:150
    }
    render(<Textarea {...props} />)
    expect(screen.getByTestId('Textarea-icon')).toBeOnTheScreen()
    expect(screen.getByTestId('Textarea-statusIcon')).toBeOnTheScreen()
    expect(screen.getByTestId('Textarea-help')).toBeOnTheScreen()
    expect(screen.getByTestId('Textarea-maxLength')).toBeOnTheScreen()
    expect(screen.queryByText("0 / 150")).toBeOnTheScreen()
  })

  test('Should change value', () => {
    const props: any = { testID: 'Textarea', value: 'toto' }
    render(<Textarea {...props} />)
    expect(screen.getByTestId('Textarea').props.value).toEqual('toto')
    fireEvent.changeText(screen.getByTestId('Textarea'), 'value')
    expect(screen.getByTestId('Textarea').props.value).toEqual('value')
  })
})
