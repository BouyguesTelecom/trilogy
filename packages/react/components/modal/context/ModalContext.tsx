import { createContext } from 'react'
import { ModalContextProps } from '@/components/modal/context/ModalContextProps'

export const ModalContext = createContext<ModalContextProps>({
  scrollViewRef: null,
  handleOnScroll: () => null,
  isFooter: false,
  setIsFooter: () => false,
})
