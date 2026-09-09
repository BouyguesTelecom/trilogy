import { render, screen } from '@testing-library/react-native'
import * as React from 'react'
import { Text } from '@/components/text'
import Rows from '@/components/rows/Rows'
import Row from '@/components/rows/row'

describe('Rows', () => {
  it('renders children', () => {
    render(
      <Rows>
        <Row>
          <Text>1</Text>
        </Row>
        <Row>
          <Text>2</Text>
        </Row>
      </Rows>,
    )

    expect(screen.getByText('1')).toBeOnTheScreen()
    expect(screen.getByText('2')).toBeOnTheScreen()
  })
})
