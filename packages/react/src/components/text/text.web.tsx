import {
  forwardRef,
  type ElementType,
  type ForwardRefExoticComponent,
  type PropsWithChildren,
  type Ref,
  type RefAttributes,
} from "react"
import { clsx } from "@/utils/clsx"

import { useHashClass } from "@/hooks/useHashClass.web"

import { TextColor, TextLevel, TextMarkup, type TextProps } from "./text.types"

export type TextRef = HTMLElement
type Props = PropsWithChildren<TextProps>

const levelClasses: Record<TextLevel, string> = {
  [TextLevel.one]: "one",
  [TextLevel.two]: "two",
  [TextLevel.three]: "three",
  [TextLevel.four]: "four",
  [TextLevel.five]: "five",
  [TextLevel.six]: "six",
}

export const Text: ForwardRefExoticComponent<Props & RefAttributes<TextRef>> =
  forwardRef<TextRef, Props>(
    (
      {
        children,
        level = TextLevel.one,
        color = TextColor.primary,
        fontWeight,
        accessibilityLabel,
        className,
        id,
        testId,
        markup = TextMarkup.p,
      },
      ref
    ) => {
      const safeLevel = levelClasses[level] ? level : TextLevel.one
      const Component: ElementType = Object.values(TextMarkup).includes(markup)
        ? markup
        : TextMarkup.p
      const classes = useHashClass(
        clsx(
          "text",
          levelClasses[safeLevel],
          safeLevel === TextLevel.one || safeLevel === TextLevel.two
            ? "font-family-secondary"
            : "font-family-primary",
          `text-${color}`,
          `font-weight-${fontWeight ?? "regular"}`,
          className
        )
      )

      return (
        <Component
          data-testid={testId}
          ref={ref as Ref<any>}
          id={id}
          className={classes}
          aria-label={accessibilityLabel}
        >
          {children}
        </Component>
      )
    }
  )

Text.displayName = "Text"
