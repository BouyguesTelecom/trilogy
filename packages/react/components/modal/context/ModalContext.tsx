import React from 'react'
import { ModalContextProps } from './ModalContextProps'

export const ModalContext = React.createContext<ModalContextProps>({
  scrollViewRef: null,
  handleOnScroll: () => null,
  isFooter: false,
  setIsFooter: () => false,
})
