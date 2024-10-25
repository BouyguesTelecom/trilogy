import React from 'react'

import { Box } from '@/components/box'
import { Text } from '@/components/text'
import { Container } from './index'

const ContainerExample: React.ReactNode = (
  <Container>
    <Box>
      <Text>Je suis une box dans un container</Text>
    </Box>
  </Container>
)

export default ContainerExample
