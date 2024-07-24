import React from 'react'
import { Box, BoxContent } from './index'
import { Title } from '@/components/title'
import { Text } from '@/components/text'

const BoxExample: React.ReactNode = <Box onClick={function noRefCheck(){}}>
  <BoxContent>
    <Title level="ONE">
      Box Title
    </Title>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
    </Text>
  </BoxContent>
</Box>

export default BoxExample
