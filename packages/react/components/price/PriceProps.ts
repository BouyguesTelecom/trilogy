import { PriceLevel, PriceLevelValues } from "./PriceEnum"
import { Invertable } from "../../objects/facets/Invertable"
import { Accessibility, AlertProps, AlignableProps } from "../../objects"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Styles = { [key: string]: any }

/**
 * Price Interface
 */
export interface PriceProps
  extends Invertable,
    Accessibility,
    AlignableProps,
    AlertProps {
  children?: React.ReactNode;
  amount: number;
  mention?: string;
  period?: string;
  showCents?: boolean;
  inline?: boolean;
  level?: PriceLevel | PriceLevelValues;
  className?: string;
  striked?: boolean;
  suptitle?: string;
  style?: Styles;
  tagAmount?: number
  tagSymbol?: '€' | '%' | string
}
