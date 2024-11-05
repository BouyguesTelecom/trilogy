import { ButtonMarkup, ButtonMarkupValues, ButtonVariant, ButtonVariantValues, } from "@/components/button/ButtonEnum"
import { TitleLevels, TitleLevelValues } from "@/components/title/TitleEnum"
import { TextLevelValues } from "@/components/text/TextEnum"
import { ClickEvent } from "@/events/OnClickEvent"
import { Accessibility, Clickable, TrilogyColor } from "@/objects"

/**
 * Card Content Interface
 */
export interface CardContentProps extends Accessibility {
  children?: React.ReactNode;
  className?: string;
}
