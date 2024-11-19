import { ButtonMarkup, ButtonMarkupValues, ButtonVariant, ButtonVariantValues } from '@/components/button/ButtonEnum'
import { TextLevelValues } from '@/components/text/TextEnum'
import { TitleLevels, TitleLevelValues } from '@/components/title/TitleEnum'
import { ClickEvent } from '@/events/OnClickEvent'
import { Accessibility } from '@/objects/facets/Accessibility'
import { Clickable } from '@/objects/facets/Clickable'
import { TrilogyColor } from '@/objects/facets/Color'
import { Dev } from '@/objects/facets/Dev'

/**
 * Card Content Interface
 */
export interface CardContentProps extends Clickable, Accessibility, Dev {
  children?: React.ReactNode
  titleSup?: string
  titleSupLevel?: TextLevelValues
  title?: string
  titleLevel?: TitleLevels | TitleLevelValues
  buttonText?: string
  text?: string
  textLevel?: TextLevelValues
  buttonVariant?: ButtonVariant | ButtonVariantValues
  buttonClick?: ClickEvent
  className?: string
  buttonMarkup?: ButtonMarkup | ButtonMarkupValues
  onClick?: ClickEvent
  backgroundColor?: TrilogyColor.BACKGROUND | 'transparent'
}
