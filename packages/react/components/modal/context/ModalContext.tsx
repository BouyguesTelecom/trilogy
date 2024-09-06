import React from 'react'
import shortid from 'shortid'
import { ModalContextProps } from './ModalContextProps'

const ModalContext = React.createContext<ModalContextProps>({
  idDescription: shortid.generate(),
  idTitle: shortid.generate(),
  visible: false,
  haveTitle: false,
  setHaveTitle: () => {},
  setVisible: () => {},
  pushActionRefs: () => {},
  setTriggerModalRef: () => {},
  tabNavigate: () => {},
  focusTriggerModal: () => {},
  focusFirstCta: () => {},
  handleCloseModal: () => {},
  onKeyDown: () => {},
})

export default ModalContext
