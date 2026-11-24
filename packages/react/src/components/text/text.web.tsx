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

import { TextMarkup, TextSize, type TextProps } from "./text.types"

export type TextRef = HTMLElement
type Props = PropsWithChildren<TextProps>

export const Text: ForwardRefExoticComponent<Props & RefAttributes<TextRef>> =
  forwardRef<TextRef, Props>(
    (
      {
        children,
        size = TextSize.xxxxl,
        color,
        fontSize,
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
          `text-size-${safeSize}`,
          fontSize && `font-size-${fontSize}`,
          color && `text-${color}`,
          fontWeight && `font-weight-${fontWeight}`,
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
