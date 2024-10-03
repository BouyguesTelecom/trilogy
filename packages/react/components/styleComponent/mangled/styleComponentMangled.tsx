import '@trilogy-ds/styles/dist/default/trilogy-mangled.css'
import React, { ReactNode } from 'react'

const StyleComponentMangled = ({ children }: { children: ReactNode }): JSX.Element => {
  return <>{children}</>
}

export default StyleComponentMangled
