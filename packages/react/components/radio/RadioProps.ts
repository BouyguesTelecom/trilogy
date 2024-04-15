import {IconName, IconNameValues} from '../icon/IconNameEnum'
import {Accessibility} from '../../objects/facets/Accessibility'

type RadioChangeEventHandler = (event: {
  radioChecked: boolean
  radioId: string | undefined
  radioName: string
  radioValue: string
}) => void

type RadioClickEventHandler = (event: {
  radioChecked: boolean
  radioId: string | undefined
  radioName: string
  radioValue: string
}) => void

/**
 * Radio Interface
 */
export interface RadioProps extends Accessibility {
  children?: React.ReactNode
  checked?: boolean
  disabled?: boolean
  readonly?: boolean
  id?: string
  label?: string | React.ReactNode
  onClick?: RadioClickEventHandler
  onChange?: RadioChangeEventHandler
  className?: string
  name?: string
  value?: string
  /**
   * @deprecated
   */
  inverted?: boolean
  tile?: boolean
  description?: string | React.ReactNode
  iconTile?: IconName | IconNameValues
  horizontalTile?: boolean
  narrow?: boolean
  marginless?: boolean
}
