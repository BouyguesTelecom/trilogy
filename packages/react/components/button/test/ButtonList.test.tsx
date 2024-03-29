// Dependencies
import React from 'react'

// Testing methods
import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'

// Component to test
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

  test('should have "has-text-centered" className', () => {
    render(
      <ButtonList centered={true}>
        <Button />
      </ButtonList>,
    )

    expect(screen.getByRole('button').closest('div')).toHaveClass('has-text-centered')
  })

  test('should not have "has-text-centered" className', () => {
    render(
      <ButtonList centered={false}>
        <Button />
      </ButtonList>,
    )

    expect(screen.getByRole('button').closest('div')).not.toHaveClass('has-text-centered')
  })

  test('should have correct className', () => {
    render(
      <ButtonList className={'className'}>
        <Button />
      </ButtonList>,
    )

    expect(screen.getByRole('button').closest('div')).toHaveClass('className')
  })

  test('snapshot', () => {
    const tree = renderer
      .create(
        <ButtonList centered={true} className={'className'}>
          <Button>1</Button>
          <Button>2</Button>
        </ButtonList>,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
