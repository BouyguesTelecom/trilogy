import { ButtonMarkup, ButtonMarkupValues, ButtonColor, ButtonColorValues } from '../../button/ButtonEnum'
import { TitleLevels, TitleLevelValues } from '../../title/TitleEnum'
import { TextLevelValues } from '../../text/TextEnum'
import { ClickEvent } from '../../../events/OnClickEvent'
import { Accessibility, Clickable, TrilogyColor } from '../../../objects'

/**
 * Card Content Interface
 */
export interface CardContentProps extends Clickable, Accessibility {
  children?: React.ReactNode
  titleSup?: string
  titleSupLevel?: TextLevelValues
  title?: string
  titleLevel?: TitleLevels | TitleLevelValues
  buttonText?: string
  text?: string
  textLevel?: TextLevelValues
  buttonVariant?: ButtonColor | ButtonColorValues
  buttonClick?: ClickEvent
  className?: string
  buttonMarkup?: ButtonMarkup | ButtonMarkupValues
  onClick?: ClickEvent

  floating?: boolean
  backgroundColor?: TrilogyColor.WHITE | 'transparent'
}
