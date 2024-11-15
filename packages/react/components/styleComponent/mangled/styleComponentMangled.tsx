import React, { ReactNode } from 'react'

import '@trilogy-ds/styles/dist/default/trilogy-mangled.css'

const StyleComponentMangled = ({ children }: { children: ReactNode }): JSX.Element => {
  return <>{children}</>
}

export default StyleComponentMangled
