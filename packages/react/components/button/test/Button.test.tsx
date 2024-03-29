// Dependencies
import React from 'react'
import { getEnumNames } from '../../../helpers/index'
import { is } from '../../../services/index'

// Testing methods
import { fireEvent, render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'

// Component to test
import { Button, ButtonColor, ButtonMarkup } from '../'
import { getColorClassName } from '../../..'

describe('Button component', () => {
  test('should have "button" className', () => {
    render(<Button />)

    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByRole('button')).toHaveClass('button')
  })

  test('should contain toto as text', () => {
    render(<Button>toto</Button>)

    expect(screen.getByText('toto')).toBeInTheDocument()
  })

  test('should have a correct html tag', () => {
    render(<Button>DEFAULT</Button>)
    expect(screen.getByText('DEFAULT')).toBeTruthy()

    getEnumNames(ButtonMarkup).forEach((element) => {
      render(<Button markup={element}>{element}</Button>)
      expect(screen.getByText(element)).toBeTruthy()
    })
  })

  test('should have "is-loading" className', () => {
    render(<Button loading={true}>LOADING</Button>)

    expect(screen.getByText('LOADING')).toHaveClass(is('loading'))
    expect(screen.getByText('LOADING')).not.toHaveClass(is('loaded'))
  })

  test('should have "is-loaded" className', () => {
    render(<Button>DEFAULT</Button>)
    render(<Button loading={false}>LOADED</Button>)

    expect(screen.getByText('DEFAULT')).toHaveClass(is('loaded'))
    expect(screen.getByText('DEFAULT')).not.toHaveClass(is('loading'))

    expect(screen.getByText('LOADED')).toHaveClass(is('loaded'))
    expect(screen.getByText('LOADED')).not.toHaveClass(is('loading'))
  })

  test('should have disabled attribut', () => {
    render(<Button disabled>DISABLED</Button>)
    render(<Button disabled={true}>DISABLED_BIS</Button>)

    expect(screen.getByText('DISABLED')).toBeDisabled()
    expect(screen.getByText('DISABLED_BIS')).toBeDisabled()
  })

  test('should not have disabled attribut', () => {
    render(<Button>DEFAULT</Button>)
    render(<Button disabled={false}>DISABLED</Button>)

    expect(screen.getByText('DEFAULT')).not.toBeDisabled()
    expect(screen.getByText('DISABLED')).not.toBeDisabled()
  })

  test('should have a correct variant className', () => {
    getEnumNames(ButtonColor).forEach((element) => {
      render(<Button variant={element}>{element}</Button>)
      expect(screen.getByText(element)).toHaveClass(is(getColorClassName(element)))
    })
  })

  test('should have "is-fullwidth" className', () => {
    render(<Button fullwidth={true}>FULLWIDTH</Button>)

    expect(screen.getByText('FULLWIDTH')).toHaveClass(is('fullwidth'))
  })

  test('should not have "is-fullwidth" className', () => {
    render(<Button>DEFAULT</Button>)
    render(<Button fullwidth={false}>FULLWIDTH</Button>)

    expect(screen.getByText('DEFAULT')).not.toHaveClass(is('fullwidth'))
    expect(screen.getByText('FULLWIDTH')).not.toHaveClass(is('fullwidth'))
  })

  test('should onClick attribut work', () => {
    const mockCallBack = jest.fn()
    render(<Button onClick={mockCallBack}>DEFAULT</Button>)

    fireEvent.click(screen.getByText('DEFAULT'))
    expect(mockCallBack).toHaveBeenCalled()
  })

  test('should be disabled', () => {
    const mockCallBack = jest.fn()
    render(
      <Button disabled onClick={mockCallBack}>
        DEFAULT
      </Button>,
    )
    fireEvent.click(screen.getByText('DEFAULT'))
    expect(screen.getByText('DEFAULT')).toBeDisabled()
    expect(mockCallBack).not.toHaveBeenCalled()
  })

  test('should be disabled with input tag', () => {
    const mockCallBack = jest.fn()
    const { getByTestId } = render(
      <Button testId='btn' markup='input' disabled onClick={mockCallBack}>
        DEFAULT
      </Button>,
    )
    const btn = getByTestId('btn')
    fireEvent.click(btn)
    expect(btn).toBeDisabled()
    expect(mockCallBack).not.toHaveBeenCalled()
  })

  test('should be disabled with <a> tag', () => {
    const mockCallBack = jest.fn()
    const { getByTestId } = render(
      <Button testId='btn' markup='a' disabled onClick={mockCallBack}>
        DEFAULT
      </Button>,
    )
    const btn = getByTestId('btn')
    fireEvent.click(btn)
    expect(mockCallBack).not.toHaveBeenCalled()
  })

  test('should execute onclick with input tag', () => {
    const mockCallBack = jest.fn()
    const { getByTestId } = render(
      <Button testId='btn' markup='input' onClick={mockCallBack}>
        DEFAULT
      </Button>,
    )
    const btn = getByTestId('btn')
    fireEvent.click(btn)
    expect(mockCallBack).toHaveBeenCalled()
  })

  test('should be routerlink', () => {
    const { getByTestId } = render(
      <Button routerLink='a' to='test' testId='btn' markup='a'>
        DEFAULT
      </Button>,
    )
    const btn = getByTestId('btn')
    expect(btn).toBeInTheDocument()
  })

  test('snapshot', () => {
    const tree = renderer
      .create(
        <Button
          onClick={jest.fn()}
          loading={false}
          markup={ButtonMarkup.INPUT}
          className={'className'}
          id={'id'}
          disabled={false}
          variant={ButtonColor.TERTIARY}
          fullwidth={true}
        >
          SnapShot
        </Button>,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
