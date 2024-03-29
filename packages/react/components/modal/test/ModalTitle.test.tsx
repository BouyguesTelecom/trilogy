// Dependencies
import React from 'react'

// Testing methods
import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'

// Component to test
import { ModalTitle } from '../'
import { IconColor, IconName } from '../../icon'

describe('ModalTitle component', () => {
  test('should ModalTitle have "modal-title" className', () => {
    render(<ModalTitle>DEFAULT</ModalTitle>)

    expect(screen.getByText('DEFAULT')).toHaveClass('modal-title')
  })

  test('should ModalTitle have correct className', () => {
    render(<ModalTitle className={'className'}>CLASSNAME</ModalTitle>)

    expect(screen.getByText('CLASSNAME')).toHaveClass('className')
  })

  test('snapshot', () => {
    const tree = renderer
      .create(
        <ModalTitle className={'className'} iconName={IconName.CHECK} iconColor={IconColor.SUCCESS}>
          SnapShot
        </ModalTitle>,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
