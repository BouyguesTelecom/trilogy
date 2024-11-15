import React, { ReactNode } from 'react'

import '@trilogy-ds/styles/dist/default/trilogy.css'

const StyleComponent = ({ children }: { children: ReactNode }): JSX.Element => {
  return <>{children}</>
}

export default StyleComponent
