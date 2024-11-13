// Dependencies
import * as React from 'react'
import { getEnumNames } from '../../../helpers'
import { is } from '../../../services'

// Testing methods
import { render, screen } from '@testing-library/react'

// Component to test
import { Text, TextLevels, TextMarkup } from '..'
import { TypographyAlign, TypographyBold, TypographyColor, TypographyTransform } from '../../../objects'

describe('Text component', () => {
  test('should have "text" className', () => {
    render(<Text>DEFAULT</Text>)

    expect(screen.getByText('DEFAULT')).toHaveClass('text')
  })

  test('should have a correct html tag', () => {
    render(<Text>DEFAULT</Text>)
    expect(screen.getByText('DEFAULT')).toBeTruthy()

    getEnumNames(TextMarkup).forEach((element) => {
      render(<Text markup={element}>{element}</Text>)
      expect(screen.getByText(element)).toBeTruthy()
    })
  })

  test('should have a correct level className', () => {
    render(<Text>DEFAULT</Text>)
    getEnumNames(TextLevels).forEach((element) => {
      render(<Text level={element}>{element}</Text>)
      expect(screen.getByText('DEFAULT')).not.toHaveClass(is(`${element}"`))
      expect(screen.getByText(element)).toHaveClass(is(`level-${element}`))
    })
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

  test('should have a correct typo className', () => {
    getEnumNames(TypographyColor).forEach((element) => {
      render(<Text typo={element}>{element}</Text>)
      expect(screen.getByText(element)).toHaveClass(element)
    })

    getEnumNames(TypographyTransform).forEach((element) => {
      render(<Text typo={element}>{element}</Text>)
      expect(screen.getByText(element)).toHaveClass(element)
    })

    getEnumNames(TypographyBold).forEach((element) => {
      render(<Text typo={element}>{element}</Text>)
      expect(screen.getByText(element)).toHaveClass(element)
    })

    getEnumNames(TypographyAlign).forEach((element) => {
      render(<Text typo={element}>{element}</Text>)
      expect(screen.getByText(element)).toHaveClass(element)
    })
  })

  test('should have "toto" className', () => {
    render(<Text className='toto'>CLASSNAME</Text>)

    expect(screen.getByText('CLASSNAME')).toHaveClass('toto')
  })
})
