import React from 'react'

import { Meta, Story } from '@storybook/react'

import Tile from './Tile'
import { TileProps } from './TileProps'
import { Box } from '../box'
import { Title, TitleLevels } from '../title'
import { Text } from '../text'

export default {
  title: 'Components/Tile',
  component: Tile,
} as Meta

export const Base: Story<TileProps> = (args) => (
  <Tile ancestor>
    <Tile {...args}>
      <Box className='tile is-child'>
        <Title level={TitleLevels.THREE}>Mon mobile</Title>
        <Text>Gérer, dépanner</Text>
      </Box>
    </Tile>
  </Tile>
)
Base.args = {
  parent: true,
}
