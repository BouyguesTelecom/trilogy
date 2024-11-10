import * as React from 'react'
import { fireEvent, render } from '@testing-library/react'
import Fab from '../Fab'
import { IconName } from '../../icon'

describe('Fab', () => {
  it('renders a button with the given label and icon name', () => {
    const label = 'Add'
    const iconName: IconName = IconName.BELL
    const { getByText } = render(<Fab iconName={iconName}>{label}</Fab>)
    expect(getByText(label)).toBeInTheDocument()
  })

  it('calls the onClick function when the button is clicked', () => {
    const onClick = jest.fn()
    const { getByRole } = render(
      <Fab iconName={IconName.BELL} onClick={onClick}>
        add
      </Fab>,
    )
    fireEvent.click(getByRole('button'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
