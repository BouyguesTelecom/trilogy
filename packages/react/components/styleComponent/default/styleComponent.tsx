import '@trilogy-ds/styles/dist/default/trilogy.css'
import { ReactNode } from 'react'

const StyleComponent = ({ children }: { children: ReactNode }): JSX.Element => {
  return <>{children}</>
}

export default StyleComponent
