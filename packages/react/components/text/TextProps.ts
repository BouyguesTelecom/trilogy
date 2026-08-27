import { TextLevels, TextLevelValues, TextMarkup, TextMarkupValues } from '@/components/text/TextEnum'
import { Text } from 'react-native'
import { TypographyAlign, TypographyAlignValues } from "@/interfaces/TypographyAlign";
import { TypographyBold, TypographyBoldValues } from "@/interfaces/TypographyBold";
import { TypographyColor, TypographyColorValues } from "@/interfaces/TypographyColor";
import { TypographyTransform, TypographyTransformValues } from "@/interfaces/TypographyTransform";
import { Accessibility } from "@/interfaces/Accessibility";
import { Dev } from "@/interfaces/Dev";
import { Invertable } from "@/interfaces/Invertable";
import { CommonProps } from "@/interfaces/CommonProps";

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
