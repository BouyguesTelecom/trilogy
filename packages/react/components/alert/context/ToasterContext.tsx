import { ToasterShowContext } from '@/components/alert/context/ToasterContextProps'
import { createContext } from 'react'

const emptyFn = () => 0

const ToasterContext = createContext<{ show: ToasterShowContext; hide: () => void }>({
  show: emptyFn,
  hide: emptyFn,
})

export default ToasterContext
