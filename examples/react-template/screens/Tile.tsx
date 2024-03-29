import React from 'react'
import { Section, Title, TitleLevels, Tile, Box, Text } from '@trilogy-ds/react/components'

export const TileScreen = (): JSX.Element => {
  return (
    <Section>
      <Tile className='is-ancestor'>
        <Tile className='is-parent'>
          <Box className='tile is-child'>
            <Title level={TitleLevels.THREE}>My Tile</Title>
            <Text>Lorem ipsum</Text>
          </Box>
        </Tile>
        <Tile className='is-parent'>
          <Box className='tile is-child'>
            <Title level={TitleLevels.THREE}>My Tile</Title>
            <Text>Lorem ipsum</Text>
          </Box>
        </Tile>
        <Tile className='is-parent'>
          <Box className='tile is-child'>
            <Title level={TitleLevels.THREE}>My Tileo</Title>
            <Text>Lorem ipsum</Text>
          </Box>
        </Tile>
      </Tile>
    </Section>
  )
}
