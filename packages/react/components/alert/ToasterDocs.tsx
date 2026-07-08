import { StatusState } from '@/objects/facets/Status'
import React from 'react'
import { AlertMarkup } from './AlertEnum'
import { ToasterAlertFloat, ToasterAlertPosition } from './AlertProps'

export interface ToasterDocsProps {
  title?: string
  description?: string
  status?: StatusState
  position?: ToasterAlertPosition
  float?: ToasterAlertFloat
  duration?: number
  offset?: number
  markup?: AlertMarkup
  closable?: boolean
  children?: React.ReactNode
}

function ToasterDocs(props: ToasterDocsProps): JSX.Element {
  return <div {...props} />
}

ToasterDocs.displayName = 'Toaster'

export default ToasterDocs
