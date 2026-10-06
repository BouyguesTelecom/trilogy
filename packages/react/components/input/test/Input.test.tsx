import { render } from '@testing-library/react'
import Input from '@/components/input/Input'
import { InputType } from '@/components/input/InputEnum'

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
