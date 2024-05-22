import { Small } from "../../objects/facets/Small"
import { VariantProps } from "../../objects/facets"
import { Hat } from "../../objects/facets/Hat"
import { StickerMarkup, StickerMarkupValues } from "./StickerEnum"

export interface StickerProps extends Small, VariantProps, Hat {
  children: React.ReactNode;
  className?: string;
  markup?: StickerMarkup | StickerMarkupValues;
  outlined?: boolean;
}
