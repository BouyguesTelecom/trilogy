// Dependencies
import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { Button, ButtonList } from '..'

describe('ButtonList component', () => {
  test('should have "buttons" className', () => {
    render(
      <ButtonList>
        <Button />
      </ButtonList>,
    )

    expect(screen.getByRole('button').closest('div')).toBeInTheDocument()
    expect(screen.getByRole('button').closest('div')).toHaveClass('buttons')
  })
})
