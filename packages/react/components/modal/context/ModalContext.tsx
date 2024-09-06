import React from 'react'
import shortid from 'shortid'
import { ModalContextProps } from './ModalContextProps'

const ModalContext = React.createContext<ModalContextProps>({
  idDescription: shortid.generate(),
  idTitle: shortid.generate(),
  pushActionRefs: () => {},
  setTriggerModalRef: () => {},
  tabNavigate: () => {},
  focusTriggerModal: () => {},
  focusFirstCta: () => {},
})

export default ModalContext
