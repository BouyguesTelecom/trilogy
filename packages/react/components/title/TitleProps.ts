import { Accessibility } from '@/objects/facets/Accessibility'
import { Clickable } from '@/objects/facets/Clickable'
import { Dev } from '@/objects/facets/Dev'
import { Invertable } from '@/objects/facets/Invertable'
import { Marginless } from '@/objects/facets/Marginless'
import { TypographyAlign, TypographyAlignValues } from '@/objects/Typography/TypographyAlign'
import { TypographyBold, TypographyBoldValues } from '@/objects/Typography/TypographyBold'
import { TypographyColor, TypographyColorValues } from '@/objects/Typography/TypographyColor'
import { TypographyTransform, TypographyTransformValues } from '@/objects/Typography/TypographyTransform'
import { TitleLevels, TitleLevelValues, TitleMarkup, TitleMarkupValues } from '@/components/title/TitleEnum'
import { CommonProps } from '@/objects/facets/CommonProps'
import { Text } from 'react-native'
import { ReactNode } from 'react'

type Styles = { [key: string]: unknown }

/**
 * Title Interface
 */
export interface TitleProps extends Invertable, Accessibility, Clickable, Marginless, Dev, CommonProps {
  children?: ReactNode
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
