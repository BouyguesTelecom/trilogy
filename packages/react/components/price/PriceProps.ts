import { PriceLevel, PriceLevelValues } from "./PriceEnum"
import { Invertable } from "@/objects/facets/Invertable"
import { Accessibility, StatusProps, AlignableProps } from "@/objects"
import { Styles } from "@/types"

/**
 * Price Interface
 */
export interface PriceProps
  extends Invertable,
    Accessibility,
    AlignableProps,
    StatusProps {
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
