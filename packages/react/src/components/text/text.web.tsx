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

/**
 * Text Component
 * @param children {ReactNode} Text content
 * @param size {TextSize} Font size: `xs`, `sm`, `base`, `md`, `lg`, `xl`, `xxl`, `xxxl`, or `xxxxl`; defaults to `xxxxl`
 * @param color {TextColor} Text color; defaults to `primary`
 * @param fontWeight {TextFontWeight} Font weight: `regular`, `medium`, `semibold`, or `bold`; defaults to `regular`
 * @param accessibilityLabel {string} Accessible label announced by assistive technology
 * @param id {string} Custom element identifier
 * @param testId {string} Test identifier
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param markup {TextMarkup} HTML element: `h1`–`h6`, `p`, `span`, or `div`; defaults to `p`
 * @param className {string} Additional CSS classes
 * - ------------------------- NATIVE PROPERTIES -----------------------------
 * None.
 */
export const Text: ForwardRefExoticComponent<Props & RefAttributes<TextRef>> =
  forwardRef<TextRef, Props>(
    (
      {
        children,
        size = TextSize.xxxxl,
        color,
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
