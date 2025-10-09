import { Text } from 'react-native'
import { TypographyAlign, TypographyAlignValues } from '../../objects/Typography/TypographyAlign'
import { TypographyBold, TypographyBoldValues } from '../../objects/Typography/TypographyBold'
import { TypographyColor, TypographyColorValues } from '../../objects/Typography/TypographyColor'
import { TypographyTransform, TypographyTransformValues } from '../../objects/Typography/TypographyTransform'
import { Accessibility } from '../../objects/facets/Accessibility'
import { CommonProps } from '../../objects/facets/CommonProps'
import { Dev } from '../../objects/facets/Dev'
import { Invertable } from '../../objects/facets/Invertable'
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
export interface TextProps extends Invertable, Accessibility, Dev, CommonProps {
  level?: TextLevels | TextLevelValues
  children?: React.ReactNode
  typo?: Typo | Array<string>
  markup?: TextMarkup | TextMarkupValues
  style?: Styles
  skeleton?: boolean
  marginless?: boolean
  numberOfLines?: number
}

export type TextRef = HTMLParagraphElement
export type TextNativeRef = Text
