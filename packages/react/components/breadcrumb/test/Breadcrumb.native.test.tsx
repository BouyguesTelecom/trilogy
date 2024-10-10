import { render, screen } from '@testing-library/react-native'
import * as React from 'react'
import Breadcrumb from '../Breadcrumb.native'

jest.useFakeTimers()

describe('Breadcrumb component', () => {
  it('should render correctly', () => {
    render(<Breadcrumb testId='Breadcrumb' />)

    expect(screen.getByTestId('Breadcrumb')).toBeOnTheScreen()
  })
})
