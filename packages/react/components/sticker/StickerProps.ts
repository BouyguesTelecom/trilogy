import { Small } from "@/objects/facets/Small"
import { VariantProps } from "@/objects/facets"
import { Hat } from "@/objects/facets/Hat"
import { StickerMarkup, StickerMarkupValues } from "./StickerEnum"
import { CommonProps } from '@/objects/facets/CommonProps'

export interface StickerProps extends Small, VariantProps, Hat, CommonProps {
  children: React.ReactNode;
  markup?: StickerMarkup | StickerMarkupValues;
  outlined?: boolean;
}
