import {
  forwardRef,
  type CSSProperties,
  type ElementType,
  type ForwardRefExoticComponent,
  type PropsWithChildren,
  type Ref,
  type RefAttributes,
} from "react"
import { clsx } from "@/utils/clsx"

import { useHashClass } from "@/hooks/useHashClass.web"

import { TitleSize, type TitleProps } from "./title.types"

export type TitleRef = HTMLHeadingElement
type Props = PropsWithChildren<TitleProps>

/**
 * Title Component
 * @param children {ReactNode} Heading content
 * @param size {TitleSize} Font size: `xs`, `sm`, `base`, `md`, `lg`, `xl`, `xxl`, `xxxl`, or `xxxxl`; defaults to `xxxxl`
 * @param color {TitleColor} Text color; defaults to `primary`
 * @param fontWeight {TitleFontWeight} Font weight; defaults to `medium` for `xxxl`/`xxxxl`, otherwise `semibold`
 * @param accessibilityLabel {string} Accessible label announced by assistive technology
 * @param id {string} Custom element identifier
 * @param testId {string} Test identifier
 * @param style {CSSProperties | StyleProp<ViewStyle | TextStyle>} Inline CSS style on Web or React Native style on Native
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param markup {TitleMarkup} HTML element: `h1`–`h6`, `p`, `span`, or `div`; defaults to `h1`
 * @param className {string} Additional CSS classes
 * - ------------------------- NATIVE PROPERTIES -----------------------------
 * None.
 */
export const Title: ForwardRefExoticComponent<Props & RefAttributes<TitleRef>> =
  forwardRef<TitleRef, Props>(
    (
      {
        children,
        size = TitleSize.xxxxl,
        color,
        fontWeight,
        accessibilityLabel,
        className,
        style,
        id,
        testId,
        markup,
      },
      ref
    ) => {
      const safeSize = Object.values(TitleSize).includes(size)
        ? size
        : TitleSize.xxxxl
      const Component: ElementType = markup ?? "h1"
      const classes = useHashClass(
        clsx(
          "title",
          `title-size-${safeSize}`,
          color && `text-${color}`,
          fontWeight && `font-weight-${fontWeight}`,
          className
        )
      )

      return (
        <Component
          data-testid={testId}
          ref={ref as Ref<HTMLHeadingElement>}
          id={id}
          className={classes}
          style={style as CSSProperties}
          aria-label={accessibilityLabel}
        >
          {children}
        </Component>
      )
    }
  )

Title.displayName = "Title"
