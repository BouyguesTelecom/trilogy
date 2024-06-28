// Dependencies
import React from 'react'
import { getEnumNames } from '../../../helpers'
import { is } from '../../../services'

// Testing methods
import { fireEvent, render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'

// Component to test
import { Text, TextLevels, TextMarkup } from '../'
import { TypographyAlign, TypographyBold, TypographyColor, TypographyTransform } from '../../..'

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
    let level = 1
    getEnumNames(TextLevels).forEach((element) => {
      render(<Text level={element}>{element}</Text>)
      expect(screen.getByText('DEFAULT')).not.toHaveClass(is(`${element}"`))
      expect(screen.getByText(element)).toHaveClass(is(`level-${level}`))
      level++
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
    render(<Text onClick={mockCallBack}>DEFAULT</Text>)

    fireEvent.click(screen.getByText('DEFAULT'))
    expect(mockCallBack).toHaveBeenCalled()
  })

  test('snapshot', () => {
    const tree = renderer
      .create(
        <Text
          level={TextLevels.FOUR}
          inverted={true}
          typo={TypographyColor.TEXT_ACCENT}
          onClick={jest.fn()}
          skeleton={false}
          markup={TextMarkup.SPAN}
          className={'test'}
          href={'https://www.test.com'}
          title={'testTitle'}
        >
          SnapShot
        </Text>,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
