import { Invertable } from "../../objects/facets/Invertable"
import { Small } from "../../objects/facets/Small"
import { AlertProps, VariantProps } from "../../objects/facets"
import { Hat } from "../../objects/facets/Hat"
import { StickerMarkup, StickerMarkupValues } from "./StickerEnum"

export interface StickerProps
  extends Small,
    VariantProps,
    AlertProps,
    Hat,
    Invertable {
  children: React.ReactNode;
  /**
   * @deprecated
   */
  stretched?: boolean;
  className?: string;
  markup?: StickerMarkup | StickerMarkupValues;
  outlined?: boolean;
  flag?: boolean;
}
