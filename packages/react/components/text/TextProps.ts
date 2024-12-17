import { TypographyAlign, TypographyAlignValues } from '../../objects/Typography/TypographyAlign'
import { TypographyBold, TypographyBoldValues } from '../../objects/Typography/TypographyBold'
import { TypographyColor, TypographyColorValues } from '../../objects/Typography/TypographyColor'
import { TypographyTransform, TypographyTransformValues } from '../../objects/Typography/TypographyTransform'
import { Accessibility, Dev, Invertable, Loadable } from '../../objects/facets'
import { TextLevels, TextLevelValues, TextMarkup, TextMarkupValues } from './TextEnum'
import { CommonProps } from '../../objects/facets/CommonProps'

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
export interface TextProps extends Invertable, Accessibility, Dev, Loadable, CommonProps {
  level?: TextLevels | TextLevelValues
  children?: React.ReactNode
  typo?: Typo | Array<string>
  markup?: TextMarkup | TextMarkupValues
  style?: Styles
  marginless?: boolean
  numberOfLines?: number
}
