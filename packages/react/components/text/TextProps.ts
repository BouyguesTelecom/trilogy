import { TypographyAlign, TypographyAlignValues } from '@/objects/Typography/TypographyAlign'
import { TypographyBold, TypographyBoldValues } from '@/objects/Typography/TypographyBold'
import { TypographyColor, TypographyColorValues } from '@/objects/Typography/TypographyColor'
import { TypographyTransform, TypographyTransformValues } from '@/objects/Typography/TypographyTransform'
import { Accessibility, Dev, Invertable } from '@/objects/facets'
import { Clickable } from '@/objects/facets/Clickable'
import { TextLevels, TextLevelValues, TextMarkup, TextMarkupValues } from './TextEnum'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Styles = { [key: string]: any }

type Typo =
  | TypographyColor
  | TypographyColorValues
  | TypographyTransform
  | TypographyTransformValues
  | TypographyBold
  | TypographyBoldValues
  | TypographyAlign
  | TypographyAlignValues

/**
 * Text Interface
 */
export interface TextProps extends Invertable, Accessibility, Clickable, Dev {
  level?: TextLevels | TextLevelValues
  children?: React.ReactNode
  typo?: Typo | Array<string>
  markup?: TextMarkup | TextMarkupValues
  className?: string
  href?: string
  title?: string
  style?: Styles
  skeleton?: boolean
  htmlContent?: string
  marginless?: boolean
  link?: boolean
  numberOfLines?: number
}
