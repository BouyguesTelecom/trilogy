import { AlertMarkup } from '@/components/alert/AlertEnum'
import { ToasterAlertFloat, ToasterAlertPosition } from '@/components/alert/AlertProps'
import { StatusState } from '@/interfaces/Status'
import { ReactNode } from 'react'

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
  children?: ReactNode
}

function ToasterDocs(props: ToasterDocsProps): JSX.Element {
  return <div {...props} />
}

ToasterDocs.displayName = 'Toaster'

export default ToasterDocs
