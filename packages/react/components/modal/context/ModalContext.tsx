import { createContext } from 'react'
import { ModalContextProps } from './ModalContextProps'

export const ModalContext = createContext<ModalContextProps>({
  scrollViewRef: null,
  handleOnScroll: () => null,
  isFooter: false,
  setIsFooter: () => false,
})
