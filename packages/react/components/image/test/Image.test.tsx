// Dependencies
import * as React from 'react'
import { is } from '../../../services/'

// Testing methods
import { fireEvent, render, screen } from '@testing-library/react'
// @ts-ignore
import renderer from 'react-test-renderer'

// Component to test
import { Image } from '../'

describe('Image component', () => {
  test('should have "image" className', () => {
    render(<Image testId='image' src={'https://www.test.com'} />)

    expect(screen.getByTestId('image').firstChild).toBeInTheDocument()
    expect(screen.getByRole('figure')).toHaveClass('image')
  })

  test('should have correct lib attribute', () => {
    render(<Image testId='image' src={'https://www.test.com'} />)

    expect(screen.getByTestId('image').firstChild).toHaveAttribute('src', 'https://www.test.com')
  })

  test('should have correct alt attribute', () => {
    render(<Image testId='image' alt={'test'} src={'https://www.test.com'} />)

    expect(screen.getByTestId('image').firstChild).toHaveAttribute('alt', 'test')
  })

  test('should have "is-circled" className', () => {
    render(<Image testId='image' circled={true} src={'https://www.test.com'} />)

    expect(screen.getByTestId('image').firstChild).toHaveClass(is('circled'))
  })

  test('should not have "is-circled" className', () => {
    render(<Image testId='image' circled={false} src={'https://www.test.com'} />)

    expect(screen.getByTestId('image').firstChild).not.toHaveClass(is('circled'))
  })

  test('should onClick attribut work', () => {
    const mockCallBack = jest.fn()
    render(<Image testId='image' onClick={mockCallBack} src={'https://www.test.com'} />)

    fireEvent.click(screen.getByTestId('image').firstChild as HTMLElement)
    expect(mockCallBack).toHaveBeenCalled()
  })

  test('snapshot', () => {
    const tree = renderer
      .create(
        <Image src={'https://www.test.com'} alt={'test'} circled={true} width={400} height={200} onClick={jest.fn()} />,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
