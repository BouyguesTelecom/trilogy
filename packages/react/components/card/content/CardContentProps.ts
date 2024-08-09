import { ButtonMarkup, ButtonMarkupValues, ButtonVariant, ButtonVariantValues, } from "@/components/button/ButtonEnum"
import { TitleLevels, TitleLevelValues } from "@/components/title/TitleEnum"
import { TextLevelValues } from "@/components/text/TextEnum"
import { ClickEvent } from "@/events/OnClickEvent"
import { Accessibility, Clickable, TrilogyColor } from "@/objects"

/**
 * Card Content Interface
 */
export interface CardContentProps extends Clickable, Accessibility {
  children?: React.ReactNode;
  titleSup?: string;
  titleSupLevel?: TextLevelValues;
  title?: string;
  titleLevel?: TitleLevels | TitleLevelValues;
  buttonText?: string;
  text?: string;
  textLevel?: TextLevelValues;
  buttonVariant?: ButtonVariant | ButtonVariantValues;
  buttonClick?: ClickEvent;
  className?: string;
  buttonMarkup?: ButtonMarkup | ButtonMarkupValues;
  onClick?: ClickEvent;
  backgroundColor?: TrilogyColor.BACKGROUND | "transparent";
}
