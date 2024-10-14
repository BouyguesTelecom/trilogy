import React from 'react'
import { Modal } from './index'

const ModalExample: React.ReactNode =
  <Modal
  closeIcon
  content='Contenu de ma modal'
  ctaContent='Action'
  iconName='tri-alert'
  title='title modal'
  triggerClassNames='button is-primary'
  triggerContent='Open modal'
  triggerMarkup='a'
/>

export default ModalExample
