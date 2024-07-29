import React from 'react'
import { Text } from '@/components/text'
import {Chips, ChipsList} from './index'

const ChipsExample: React.ReactNode = <>
  <Text>
    Exemple de selection unique :
  </Text>
  <ChipsList>
    <Chips
      active
    >
      Chips du panel de controls
    </Chips>
    <Chips
    >
      Chips 2
    </Chips>
    <Chips
      active
    >
      Chips 3
    </Chips>
    <Chips >
      Chips 4
    </Chips>
    <Chips
      active
      disabled
    >
      Chips disabled
    </Chips>
  </ChipsList>
</>

export default ChipsExample;
