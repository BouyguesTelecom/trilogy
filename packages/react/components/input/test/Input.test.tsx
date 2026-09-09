import { fireEvent, render } from '@testing-library/react'
import Input from '@/components/input/Input'
import { InputStatus, InputType } from '@/components/input/InputEnum'
import * as React from 'react'
import { IconName } from '@/components/icon'
import { Link } from '@/components/link'
import { getEnumNames } from '@/helpers/enumHelpers'
import { TrilogyColor } from "@/interfaces/Color";

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
