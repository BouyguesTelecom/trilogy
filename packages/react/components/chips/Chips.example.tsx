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
      onClick={function noRefCheck(){}}
    >
      Chips du panel de controls
    </Chips>
    <Chips
      onClick={function noRefCheck(){}}
    >
      Chips 2
    </Chips>
    <Chips
      active
      onClick={function noRefCheck(){}}
    >
      Chips 3
    </Chips>
    <Chips onClick={function noRefCheck(){}}>
      Chips 4
    </Chips>
    <Chips
      active
      disabled
      onClick={function noRefCheck(){}}
    >
      Chips disabled
    </Chips>
  </ChipsList>
</>

export default ChipsExample;
