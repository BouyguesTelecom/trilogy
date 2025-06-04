import { fireEvent, render, screen } from '@testing-library/react'
import * as React from 'react'
import AutoComplete from '../AutoComplete'

const testItems = ['Apple', 'Banana', 'Cherry', 'Grape']

describe('AutoComplete', () => {
  it('renders the component', () => {
    render(<AutoComplete data={testItems} />)
    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()
  })

  it('displays the menu when typing in the input', () => {
    render(<AutoComplete data={testItems} />)
    const input = screen.getByRole('textbox')
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: 'a' } })
    const menu = screen.getByRole('list')
    expect(menu).toBeInTheDocument()
  })

  it('filters the items based on input value', () => {
    render(<AutoComplete data={testItems} />)
    const input = screen.getByRole('textbox')
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: 'a' } })
    const items = screen.getAllByRole('listitem')
    expect(items.length).toBe(3)
    expect(items[0]).toHaveTextContent('Apple')
  })

  it('selects an item from the menu', () => {
    let defaultV
    const handleItemSelected = jest.fn()
    render(
      <AutoComplete
        data={testItems}
        onItemSelected={handleItemSelected}
        onChange={(e) => (defaultV = { label: e.inputValue })}
      />,
    )
    const input = screen.getByRole('textbox')
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: 'Banana' } })
    const items = screen.getAllByRole('listitem')
    fireEvent.click(items[0])
    expect(defaultV).toEqual({ label: 'Banana' })
    expect(handleItemSelected).toHaveBeenCalledWith({
      value: testItems[1],
      index: 1,
    })
    expect(input).toHaveValue('Banana')
  })

  it('should have placeholder', () => {
    render(<AutoComplete data={testItems} placeholder='placeholder test' />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('placeholder', 'placeholder test')
  })

  it('should have placeholder with default value', () => {
    render(<AutoComplete data={testItems} placeholder='placeholder test' />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('placeholder', 'placeholder test')
  })

  it('should have input value, name', () => {
    render(<AutoComplete name='nameTest' data={testItems} value='value test' />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveValue('value test')
    expect(input).toHaveAttribute('name', 'nameTest')
  })

  it('should be disabled', () => {
    render(<AutoComplete disabled data={testItems} />)
    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled()
  })

  it('should have accessibility label', () => {
    render(<AutoComplete accessibilityLabel='input' data={testItems} />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('aria-label', 'input')
  })

  it('input should  have classname autocomplete', () => {
    render(<AutoComplete data={testItems} />)
    const input = screen.getByRole('textbox')
    expect(input.parentNode?.parentNode).toHaveClass('field')
  })

  it('input should  default status class', () => {
    render(<AutoComplete status='default' data={testItems} />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveClass('is-default')
  })

  it('input should  default error class', () => {
    render(<AutoComplete status='error' data={testItems} />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveClass('is-error')
  })

  it('input should  default success class', () => {
    render(<AutoComplete status='success' data={testItems} />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveClass('is-success')
  })

  it('input should  default warning class', () => {
    render(<AutoComplete status='warning' data={testItems} />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveClass('is-warning')
  })

  it('should have menu displayed', () => {
    render(<AutoComplete displayMenu data={testItems} />)
    const items = screen.getAllByRole('listitem')
    expect(items.length).toBe(4)
  })

  it('should execute keypress up event', () => {
    render(<AutoComplete displayMenu data={testItems} />)
    const input = screen.getByRole('textbox')
    fireEvent.focus(input)
    fireEvent.keyUp(input, { key: 'arrow up', code: 'arrow up', keyCode: 38 })
    const items = screen.getAllByRole('listitem')
    expect(items[0]).toHaveClass('is-active')
  })

  it('should execute keypress down event', () => {
    render(<AutoComplete displayMenu data={testItems} />)
    const input = screen.getByRole('textbox')
    fireEvent.focus(input)
    fireEvent.keyUp(input, {
      key: 'arrow down',
      code: 'arrow down',
      keyCode: 40,
    })
    const items = screen.getAllByRole('listitem')
    expect(items[1]).toHaveClass('is-active')
  })

  it('should execute keypress down up event', () => {
    render(<AutoComplete displayMenu data={testItems} />)
    const input = screen.getByRole('textbox')
    fireEvent.focus(input)
    fireEvent.keyUp(input, {
      key: 'arrow down',
      code: 'arrow down',
      keyCode: 40,
    })
    fireEvent.keyUp(input, { key: 'arrow up', code: 'arrow up', keyCode: 38 })
    const items = screen.getAllByRole('listitem')
    expect(items[0]).toHaveClass('is-active')
  })

  it('should execute keypress enter event', () => {
    render(<AutoComplete displayMenu data={testItems} />)
    const input = screen.getByRole('textbox')
    fireEvent.focus(input)
    fireEvent.keyUp(input, {
      key: 'arrow down',
      code: 'arrow down',
      keyCode: 40,
    })
    fireEvent.keyUp(input, {
      key: 'arrow down',
      code: 'arrow down',
      keyCode: 40,
    })
    fireEvent.keyUp(input, { key: 'Enter', code: 'Enter', keyCode: 13 })
    expect(input).toHaveValue('Cherry')
  })

  it('should execute keypress max down event', () => {
    render(<AutoComplete displayMenu data={testItems} />)
    const input = screen.getByRole('textbox')
    fireEvent.focus(input)
    fireEvent.keyUp(input, {
      key: 'arrow down',
      code: 'arrow down',
      keyCode: 40,
    })
    fireEvent.keyUp(input, {
      key: 'arrow down',
      code: 'arrow down',
      keyCode: 40,
    })
    fireEvent.keyUp(input, {
      key: 'arrow down',
      code: 'arrow down',
      keyCode: 40,
    })
    fireEvent.keyUp(input, {
      key: 'arrow down',
      code: 'arrow down',
      keyCode: 40,
    })
    const items = screen.getAllByRole('listitem')
    expect(items[items.length - 1]).toHaveClass('is-active')
  })

  it('should execute blur event', () => {
    render(<AutoComplete displayMenu data={testItems} />)
    const input = screen.getByRole('textbox')
    fireEvent.focus(input)
    fireEvent.blur(input)
    expect(input).not.toHaveClass('is-focused')
  })

  it('should dont have autocomplete item', () => {
    render(<AutoComplete displayMenu data={[]} />)
    const list = screen.queryAllByRole('list')
    expect(list.length).toBe(0)
  })

  it('should autocomplete items be active on hover', () => {
    render(<AutoComplete displayMenu data={testItems} />)
    const items = screen.getAllByRole('listitem')
    fireEvent.mouseOver(items[1])
    expect(items[1]).toHaveClass('is-active')
  })

  it('should items be not active on blur autocompleteIem', () => {
    render(<AutoComplete displayMenu data={testItems} />)
    const items = screen.getAllByRole('listitem')
    fireEvent.mouseOver(items[1])
    fireEvent.mouseOut(items[1])
    expect(items[1]).not.toHaveClass('is-active')
  })

  it('should add value input onclick autocompleteItem', () => {
    render(<AutoComplete displayMenu data={testItems} />)
    const items = screen.getAllByRole('listitem')
    const input = screen.getByRole('textbox')
    fireEvent.click(items[1])
    expect(input).toHaveValue('Banana')
  })
})
