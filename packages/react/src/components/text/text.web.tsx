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

import { TextColor, TextMarkup, TextSize, type TextProps } from "./text.types"

export type TextRef = HTMLElement
type Props = PropsWithChildren<TextProps>

export const Text: ForwardRefExoticComponent<Props & RefAttributes<TextRef>> =
  forwardRef<TextRef, Props>(
    (
      {
        children,
        size = TextSize.xxxxl,
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
      const safeSize = Object.values(TextSize).includes(size)
        ? size
        : TextSize.xxxxl
      const Component: ElementType = Object.values(TextMarkup).includes(markup)
        ? markup
        : TextMarkup.p
      const classes = useHashClass(
        clsx(
          "text",
          `font-size-${safeSize}`,
          safeSize === TextSize.xxxxl || safeSize === TextSize.xxxl
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
