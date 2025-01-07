'use client'

import { Chips, ChipsList } from '@trilogy-ds/react/lib/components/chips'
import { useState } from 'react'

export default function ChipsClient() {
  const [active, setActive] = useState(1)
  return (
    <div>
      <main>
        <ChipsList>
          <Chips
            onClick={() => {
              setActive(1)
            }}
            active={active === 1}
          >
            Chips 1
          </Chips>
          <Chips
            onClick={() => {
              setActive(2)
            }}
            active={active === 2}
          >
            Chips 2
          </Chips>
          <Chips
            onClick={() => {
              setActive(3)
            }}
            active={active === 3}
          >
            Chips 3
          </Chips>
          <Chips
            onClick={() => {
              setActive(4)
            }}
            active={active === 4}
          >
            Chips 4
          </Chips>
        </ChipsList>
      </main>
    </div>
  )
}
