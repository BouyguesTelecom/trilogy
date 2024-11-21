import { render, screen } from '@testing-library/react-native'
import React from 'react'

import Rows from '@/components/rows/Rows'
import RowItem from '@/components/rows/item'
import { Text } from '@/components/text'

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
