// Dependencies
import * as React from 'react'
import renderer from 'react-test-renderer'
import { is } from '../../../services/index'

// Testing methods
import { fireEvent, render, screen } from '@testing-library/react'

// Component to test
import { getEnumNames } from '@/helpers'
import { getButtonVariantClassName } from '@/objects'
import { Button, ButtonMarkup, ButtonVariant } from '../'

describe('Button component', () => {
  test('should have "button" className', () => {
    const { getByRole } = render(<Button />)
    const button = getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('button')
  })

  test('should contain toto as text', () => {
    const { getByText } = render(<Button>toto</Button>)
    expect(getByText('toto')).toBeInTheDocument()
  })

  test('should have a correct html tag', () => {
    const { getByText } = render(<Button>toto</Button>)
    expect(getByText('toto')).toBeTruthy()

    getEnumNames(ButtonMarkup).forEach((element) => {
      const { getByText } = render(<Button markup={element}>{element}</Button>)
      expect(getByText(element)).toBeTruthy()
    })
  })

  test('should have "is-loading" className', () => {
    const { getByText } = render(<Button loading={true}>LOADING</Button>)
    expect(getByText('LOADING')).toHaveClass(is('loading'))
    expect(getByText('LOADING')).not.toHaveClass(is('loaded'))
  })

  test('should have "is-loaded" className', () => {
    const { getByText } = render(<Button>DEFAULT</Button>)
    expect(getByText('DEFAULT')).toHaveClass(is('loaded'))
    expect(getByText('DEFAULT')).not.toHaveClass(is('loading'))
  })

  test('shouldn have "is-loaded" className', () => {
    const { getByText } = render(<Button loading={false}>LOADED</Button>)
    expect(getByText('LOADED')).toHaveClass(is('loaded'))
    expect(getByText('LOADED')).not.toHaveClass(is('loading'))
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
    getEnumNames(ButtonVariant).forEach((element) => {
      render(<Button variant={element}>{element}</Button>)
      expect(screen.getByText(element)).toHaveClass(is(getButtonVariantClassName(element)))
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
          variant={ButtonVariant.PRIMARY}
          fullwidth={true}
        >
          SnapShot
        </Button>,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
