import '@trilogy-ds/styles/dist/default/trilogy-mangled.css'
import { ReactNode } from 'react'

const StyleComponentMangled = ({ children }: { children: ReactNode }): JSX.Element => {
  return <>{children}</>
}

export default StyleComponentMangled
