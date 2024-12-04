import { fireEvent, render } from '@testing-library/react'
import Input from '../Input'
import { InputStatus, InputType } from '../InputEnum'
import * as React from 'react'
import { IconName } from '../../icon'
import { Link } from '../../link'
import { getEnumNames } from '../../../helpers'
import { TrilogyColor } from '../../../objects'

describe('Input', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(
      <Input
        data-testid='input'
        defaultValue='Input, sans placeholder (et sans padding en haut)'
        help="N'affiche pas de padding supérieur quand il n'y a pas de placeholder"
        type={InputType.TEXT}
      />,
    )
    const input = getByTestId('input')
    expect(input).toBeInTheDocument()
  })
})
