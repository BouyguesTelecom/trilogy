import { fireEvent, render, screen, userEvent } from '@testing-library/react-native'
import * as React from 'react'
import AutoComplete from '../AutoComplete.native'
jest.useFakeTimers()
const testItems = ['Apple', 'Banana', 'Cherry', 'Grape']

describe('Autocomplete component', () => {
  it('renders the component', () => {
    render(<AutoComplete data={testItems} testId={'Autocomplete'} />)
    expect(screen.getByTestId('Autocomplete')).toBeOnTheScreen()
  })

  it('displays the menu when typing in the input', async () => {
    render(<AutoComplete data={testItems} />)
    const input = screen.getByTestId('input-id')
    const appleBefore = screen.queryByText('Apple')
    const bananaBefore = screen.queryByText('Banana')
    const cherryBefore = screen.queryByText('Cherry')
    const grapeBefore = screen.queryByText('Grape')
    const user = userEvent.setup()

    expect(appleBefore).toBeOnTheScreen()
    expect(bananaBefore).toBeOnTheScreen()
    expect(cherryBefore).toBeOnTheScreen()
    expect(grapeBefore).toBeOnTheScreen()

    fireEvent.changeText(input, 'Ban')

    const appleAfter = screen.queryByText('Apple')
    const bananaAfter = screen.queryByText('Banana')
    const cherryAfter = screen.queryByText('Cherry')
    const grapeAfter = screen.queryByText('Grape')

    expect(appleAfter).toBeNull()
    expect(cherryAfter).toBeNull()
    expect(grapeAfter).toBeNull()
    expect(bananaAfter).toBeOnTheScreen()
    await user.press(screen.getByText('Banana'))

    expect(screen.getByTestId('input-id').props.value).toEqual('Banana')
  })

  it('have default value', async () => {
    render(<AutoComplete placeholder="placeholder" value='toto' data={testItems} />)
    expect(screen.getByPlaceholderText('placeholder')).toBeOnTheScreen()

  })
})
