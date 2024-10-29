import React from 'react'
import { Box, BoxContent, BoxFooter } from './index'
import { Title, TitleLevels } from '@/components/title'
import { Text } from '@/components/text'
import { Columns, ColumnsItem } from '../columns'
import { Link } from '../link'
import { TrilogyColor } from '@/objects'

const BoxExample = () => (
  <Columns multiline>
    <ColumnsItem size={4}>
      <Box>
        <BoxContent>
          <Title level={TitleLevels.ONE}>Box Title</Title>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.</Text>
        </BoxContent>
      </Box>
    </ColumnsItem>
    <ColumnsItem size={4}>
      <Box flat>
        <BoxContent>
          <Title level={TitleLevels.ONE}>Box Title</Title>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.</Text>
        </BoxContent>
      </Box>
    </ColumnsItem>
    <ColumnsItem size={4}>
      <Box highlighted={TrilogyColor.WARNING}>
        <BoxContent>
          <Title level={TitleLevels.ONE}>Box Title</Title>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.</Text>
        </BoxContent>
      </Box>
    </ColumnsItem>
    <ColumnsItem size={12}>
      <Box>
        <BoxContent>
          <Title level={TitleLevels.ONE}>Box Title</Title>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.</Text>
        </BoxContent>
        <BoxFooter>
          <Link>Link</Link>
        </BoxFooter>
      </Box>
    </ColumnsItem>
  </Columns>
)

export default BoxExample
