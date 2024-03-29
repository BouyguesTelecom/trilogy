// Dependencies
import React from 'react'
import { getEnumNames } from '../../../helpers/index'
import { is } from '../../../services/index'

// Testing methods
import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'

// Component to test
import { Sticker, StickerMarkup } from '../'
import { AlertState, getAlertClassName, getVariantClassName, VariantState } from '../../..'

describe('Sticker component', () => {
  test('should have a Sticker in document', () => {
    render(<Sticker>DEFAULT</Sticker>)

    expect(screen.getByText('DEFAULT')).toBeInTheDocument()
    expect(screen.getByText('DEFAULT')).toHaveClass('sticker')
  })

  test('should have a correct html tag', () => {
    render(<Sticker>DEFAULT</Sticker>)
    expect(screen.getByText('DEFAULT')).toBeTruthy()

    getEnumNames(StickerMarkup).forEach((element) => {
      render(<Sticker markup={element}>{element}</Sticker>)
      expect(screen.getByText(element)).toBeTruthy()
    })
  })

  test('should have a correct variant className', () => {
    getEnumNames(VariantState).forEach((element) => {
      render(<Sticker variant={element}>{element}</Sticker>)
      expect(screen.getByText(element)).toHaveClass(is(getVariantClassName(element)))
    })
  })

  test('should have a correct alert className', () => {
    getEnumNames(AlertState).forEach((element) => {
      render(<Sticker alert={element}>{element}</Sticker>)
      expect(screen.getByText(element)).toHaveClass(is(getAlertClassName(element)))
    })
  })

  test('should have "is-stretched" className', () => {
    render(<Sticker stretched={true}>STRETCHED</Sticker>)

    expect(screen.getByText('STRETCHED')).toHaveClass(is('stretched'))
  })

  test('should not have "is-stretched" className', () => {
    render(<Sticker>DEFAULT</Sticker>)
    render(<Sticker stretched={false}>STRETCHED</Sticker>)

    expect(screen.getByText('DEFAULT')).not.toHaveClass(is('stretched'))
    expect(screen.getByText('STRETCHED')).not.toHaveClass(is('stretched'))
  })

  test('should have "is-small" className', () => {
    render(<Sticker small={true}>SMALL</Sticker>)

    expect(screen.getByText('SMALL')).toHaveClass(is('small'))
  })

  test('should not have "is-small" className', () => {
    render(<Sticker>DEFAULT</Sticker>)
    render(<Sticker small={false}>SMALL</Sticker>)

    expect(screen.getByText('DEFAULT')).not.toHaveClass(is('small'))
    expect(screen.getByText('SMALL')).not.toHaveClass(is('small'))
  })

  test('should have "is-hat" className', () => {
    render(<Sticker hat={true}>HAT</Sticker>)

    expect(screen.getByText('HAT')).toHaveClass(is('hat'))
  })

  test('should not have "is-hat" className', () => {
    render(<Sticker>DEFAULT</Sticker>)
    render(<Sticker hat={false}>HAT</Sticker>)

    expect(screen.getByText('DEFAULT')).not.toHaveClass(is('hat'))
    expect(screen.getByText('HAT')).not.toHaveClass(is('hat'))
  })

  test('should have "is-inverted" className', () => {
    render(<Sticker inverted={true}>INVERTED</Sticker>)

    expect(screen.getByText('INVERTED')).toHaveClass(is('inverted'))
  })

  test('should not have "is-inverted" className', () => {
    render(<Sticker>DEFAULT</Sticker>)
    render(<Sticker inverted={false}>INVERTED</Sticker>)

    expect(screen.getByText('DEFAULT')).not.toHaveClass(is('inverted'))
    expect(screen.getByText('INVERTED')).not.toHaveClass(is('inverted'))
  })

  test('should have "toto" className', () => {
    render(<Sticker className='toto'>CLASSNAME</Sticker>)

    expect(screen.getByText('CLASSNAME')).toHaveClass('toto')
  })

  test('snapshot', () => {
    const tree = renderer
      .create(
        <Sticker
          inverted={true}
          stretched={true}
          small={false}
          hat={false}
          variant={VariantState.SECONDARY}
          alert={AlertState.WARNING}
          markup={StickerMarkup.SPAN}
          className={'test'}
        >
          SnapShot
        </Sticker>,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
