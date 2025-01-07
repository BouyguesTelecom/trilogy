'use client'

import { Fab } from '@trilogy-ds/react/lib/components/fab'
export default function FabSSR() {
  const onClick = () => {
    console.log('click')
  }
  return (
    <div>
      <main>
        <Fab iconName='tri-alert' right={20} bottom={15} onClick={onClick}>
          New Conversation
        </Fab>
      </main>
    </div>
  )
}
