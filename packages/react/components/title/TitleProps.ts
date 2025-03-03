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
} from '../../objects'
import { TitleLevels, TitleLevelValues, TitleMarkup, TitleMarkupValues } from './TitleEnum'
import { CommonProps } from '../../objects/facets/CommonProps'
import { Text } from 'react-native'

type Styles = { [key: string]: unknown }

/**
 * Title Interface
 */
export interface TitleProps extends Invertable, Accessibility, Clickable, Marginless, Dev, CommonProps {
  children?: React.ReactNode
  level?: TitleLevelValues | TitleLevels
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
  markup?: TitleMarkup | TitleMarkupValues
  style?: Styles
  subtitle?: boolean
  overline?: boolean
}

export type TitleRef = HTMLParagraphElement | HTMLHeadingElement | HTMLDivElement
export type TitleNativeRef = Text
