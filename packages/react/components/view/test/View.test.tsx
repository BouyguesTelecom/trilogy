import React from 'react'

import View from '@/components/view/View'
import { ViewMarkup } from '@/components/view/ViewProps'
import { render, screen } from '@testing-library/react'

describe('Modal component', () => {
  test('should View keep className with content', () => {
    render(
      <View data-testid={'DEFAULT'} className={'testClassName'}>
        With Content
      </View>,
    )
    const view = screen.getByTestId('DEFAULT')
    expect(view).toHaveClass('testClassName')
  })

  test('should View keep className without content', () => {
    render(<View data-testid={'DEFAULT'} className={'testClassName'} />)
    const view = screen.getByTestId('DEFAULT')
    expect(view).toHaveClass('testClassName')
  })

  test('should View accept ul/button markup', () => {
    render(
      <>
        <View markup={'ul'} data-testid={'DEFAULTUL'} className={'testClassName'}>
          <li>Liste</li>
        </View>
        <View markup={ViewMarkup.BUTTON} data-testid={'DEFAULTBUTTON'} className={'testClassName'} />
      </>,
    )
    const viewul = screen.getByTestId('DEFAULTUL')
    expect(viewul.tagName).toBe('UL')
    const viewbutton = screen.getByTestId('DEFAULTBUTTON')
    expect(viewbutton.tagName).toBe('BUTTON')
  })
})
