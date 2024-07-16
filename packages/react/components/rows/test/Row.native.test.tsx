import { render, screen } from '@testing-library/react-native'
import * as React from 'react'
import { Text } from '../../text'
import Rows from '../Rows'
import RowItem from '../item'

describe('Rows', () => {
  it('renders children', () => {
    render(
      <Rows>
        <RowItem>
          <Text>1</Text>
        </RowItem>
        <RowItem>
          <Text>2</Text>
        </RowItem>
      </Rows>,
    )

    expect(screen.getByText('1')).toBeOnTheScreen()
    expect(screen.getByText('2')).toBeOnTheScreen()
  })
})
