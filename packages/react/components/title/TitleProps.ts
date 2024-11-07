import {
  Accessibility,
  Clickable,
  Dev,
  Invertable,
  Marginless,
  TypographyAlign,
  TypographyAlignValues,
  TypographyBold,
  TypographyBoldValues,
  TypographyColor,
  TypographyColorValues,
  TypographyTransform,
  TypographyTransformValues,
} from '@/objects'
import { TitleLevels, TitleLevelValues, TitleMarkup, TitleMarkupValues } from './TitleEnum'
import { CommonProps } from '@/objects/facets/CommonProps'

type Styles = { [key: string]: unknown }

/**
 * Title Interface
 */
export interface TitleProps extends Invertable, Accessibility, Clickable, Marginless, Dev, CommonProps {
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
  href?: string
  markup?: TitleMarkup | TitleMarkupValues
  style?: Styles
  htmlContent?: string
  subtitle?: boolean
  overline?: boolean
}
