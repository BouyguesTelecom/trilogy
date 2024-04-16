import { TitleLevels, TitleLevelValues, TitleMarkup, TitleMarkupValues } from './TitleEnum'
import { TypographyColor, TypographyColorValues } from '../../objects/Typography/TypographyColor'
import { TypographyTransform, TypographyTransformValues } from '../../objects/Typography/TypographyTransform'
import { TypographyBold, TypographyBoldValues } from '../../objects/Typography/TypographyBold'
import { TypographyAlign, TypographyAlignValues } from '../../objects/Typography/TypographyAlign'
import { Accessibility } from '../../objects/facets/Accessibility'
import { Invertable } from '../../objects/facets/Invertable'
import { Marginless } from '../../objects/facets/Marginless'
import { Clickable } from '../../objects/facets/Clickable'

type Styles = { [key: string]: unknown }

/**
 * Title Interface
 */
export interface TitleProps extends Invertable, Accessibility, Clickable, Marginless {
  children?: React.ReactNode
  level?: TitleLevelValues | TitleLevels
  loading?: boolean
  typo?:
    | TypographyColor
    | TypographyColorValues
    | TypographyTransform
    | TypographyTransformValues
    | TypographyBold
    | TypographyBoldValues
    | TypographyAlign
    | TypographyAlignValues
    | Array<string>
    | string
  skeleton?: boolean
  className?: string
  href?: string
  markup?: TitleMarkup | TitleMarkupValues
  style?: Styles
  htmlContent?: string
  subtitle?: boolean
  overline?: boolean
}
