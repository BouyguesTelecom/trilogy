'use client'

import { Countdown } from '@trilogy-ds/react/lib/components/countdown'

export default function CountdownClient() {
  return (
    <div>
      <main>
        <Countdown inverted deadline={new Date('2025-12-24 18:00:00')} />
      </main>
    </div>
  )
}
