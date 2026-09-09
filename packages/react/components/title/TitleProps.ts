import { TitleLevels, TitleLevelValues, TitleMarkup, TitleMarkupValues } from '@/components/title/TitleEnum'
import { Text } from 'react-native'
import { Accessibility } from "@/interfaces/Accessibility";
import { Clickable } from "@/interfaces/Clickable";
import { Dev } from "@/interfaces/Dev";
import { Invertable } from "@/interfaces/Invertable";
import { Marginless } from "@/interfaces/Marginless";
import { TypographyAlign, TypographyAlignValues } from "@/interfaces/TypographyAlign";
import { TypographyBold, TypographyBoldValues } from "@/interfaces/TypographyBold";
import { TypographyColor, TypographyColorValues } from "@/interfaces/TypographyColor";
import { TypographyTransform, TypographyTransformValues } from "@/interfaces/TypographyTransform";
import { CommonProps } from "@/interfaces/CommonProps";

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
