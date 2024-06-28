// Dependencies
import * as React from 'react'

// Testing methods
import { fireEvent, render, screen } from '@testing-library/react'

// Component to test
import { is } from '@/services'
import { Text, TextMarkup } from '../'

describe('Text component', () => {
  test('should have "text" className', () => {
    render(<Text>DEFAULT</Text>)
    expect(screen.getByText('DEFAULT')).toHaveClass('text')
  })

  test('should have a correct html tag', () => {
    render(<Text markup='a'>{'a'}</Text>)
    expect(screen.getByText('a')).toBeTruthy()
  })

  test('should have a correct html tag', () => {
    render(<Text markup='div'>{'div'}</Text>)
    expect(screen.getByText('div')).toBeTruthy()
  })

  test('should have a correct html tag', () => {
    render(<Text markup='p'>{'p'}</Text>)
    expect(screen.getByText('p')).toBeTruthy()
  })

  test('should have a correct html tag', () => {
    render(<Text markup='span'>{'span'}</Text>)
    expect(screen.getByText('span')).toBeTruthy()
  })

  test('should contain toto as text', () => {
    render(<Text>toto</Text>)
    expect(screen.getByText('toto')).toBeInTheDocument()
  })

  test('should have "is-inverted" className', () => {
    render(<Text inverted={true}>INVERTED</Text>)
    expect(screen.getByText('INVERTED')).toHaveClass(is('inverted'))
  })

  test('should not have "is-inverted" className', () => {
    render(<Text>DEFAULT</Text>)
    render(<Text inverted={false}>INVERTED</Text>)
    expect(screen.getByText('DEFAULT')).not.toHaveClass(is('inverted'))
    expect(screen.getByText('INVERTED')).not.toHaveClass(is('inverted'))
  })

  test('should have "toto" className', () => {
    render(<Text className='toto'>CLASSNAME</Text>)
    expect(screen.getByText('CLASSNAME')).toHaveClass('toto')
  })

  test('should have "toto" title', () => {
    render(<Text title='toto'>TITLE</Text>)
    expect(screen.getByText('TITLE').title).toBe('toto')
  })

  test('should have href', () => {
    render(<Text href='https://www.test.com'>DEFAULT</Text>)
    render(
      <Text href='https://www.test.com' markup={TextMarkup.A}>
        HREF
      </Text>,
    )
    expect(screen.getByText('DEFAULT')).not.toHaveAttribute('href', 'https://www.test.com')
    expect(screen.getByText('HREF')).toHaveAttribute('href', 'https://www.test.com')
  })

  test('should have "is-loading" className', () => {
    render(<Text skeleton={true}>DEFAULT</Text>)
    expect(screen.getByText('DEFAULT')).toHaveClass(is('loading'))
    expect(screen.getByText('DEFAULT')).not.toHaveClass(is('loaded'))
  })

  test('should have "is-loaded" className', () => {
    render(<Text>DEFAULT</Text>)
    render(<Text skeleton={false}>SKELETON</Text>)
    expect(screen.getByText('DEFAULT')).toHaveClass(is('loaded'))
    expect(screen.getByText('DEFAULT')).not.toHaveClass(is('loading'))
    expect(screen.getByText('SKELETON')).toHaveClass(is('loaded'))
    expect(screen.getByText('SKELETON')).not.toHaveClass(is('loading'))
  })

  test('should have a href', () => {
    render(<Text>DEFAULT</Text>)
    render(<Text href={'https://www.test.com/'}>HREF</Text>)
    render(
      <Text href={'https://www.test.com/'} markup={TextMarkup.A}>
        HREF_A
      </Text>,
    )
    expect(screen.getByText('DEFAULT')).not.toHaveAttribute('href', 'https://www.test.com/')
    expect(screen.getByText('HREF')).not.toHaveAttribute('href', 'https://www.test.com/')
    expect(screen.getByText('HREF_A')).toHaveAttribute('href', 'https://www.test.com/')
  })

  test('should onClick attribut work', () => {
    const mockCallBack = jest.fn()
    const { getByText } = render(<Text onClick={mockCallBack}>DEFAULT</Text>)
    fireEvent.click(getByText('DEFAULT'))
    expect(mockCallBack).toHaveBeenCalled()
  })
})
