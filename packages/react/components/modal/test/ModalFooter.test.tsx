import { render, screen } from '@testing-library/react'
import React from 'react'
import renderer from 'react-test-renderer'

import { ModalFooter } from '@/components'

describe('ModalFooter component', () => {
  test('should ModalFooter have "modal-footer" className', () => {
    render(<ModalFooter>DEFAULT</ModalFooter>)

    expect(screen.getByText('DEFAULT')).toHaveClass('modal-footer')
  })

  test('should ModalFooter have correct className', () => {
    render(<ModalFooter className={'className'}>CLASSNAME</ModalFooter>)

    expect(screen.getByText('CLASSNAME')).toHaveClass('className')
  })

  test('snapshot', () => {
    const tree = renderer.create(<ModalFooter className={'className'}>SnapShot</ModalFooter>).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
