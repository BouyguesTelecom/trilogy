import {
  forwardRef,
  type CSSProperties,
  type ForwardRefExoticComponent,
  type PropsWithChildren,
  type RefAttributes,
} from "react"
import { clsx } from "@/utils/clsx"

import { useHashClass } from "@/hooks/useHashClass.web"

import type { CardProps } from "./card.types"

/** Card Component
 * @param children {ReactNode} Card sections: CardHeader, CardImage and CardContent
 * @param appearance {CardAppearance} Surface treatment: `shadow`, `outlined` or `accent-start`; omitted adds none
 * @param orientation {CardOrientation} Layout direction: `vertical` or `horizontal`; defaults to vertical
 * @param borderRadius {CardBorderRadius} Corner radius token (`full`, `lg`, `md`, `sm`, `xs`, `none`); omitted keeps `lg`
 * @param padding {CardPadding} Padding spacing token (`xxxl` to `none`); omitted adds none
 * @param id {string} Element identifier
 * @param testId {string} Test identifier
 * @param style {CSSProperties | StyleProp<ViewStyle | TextStyle>} Style override
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS classes
 * - ------------------------- NATIVE PROPERTIES -----------------------------
 * None.
 */
export const Card: ForwardRefExoticComponent<
  PropsWithChildren<CardProps> & RefAttributes<HTMLDivElement>
> = forwardRef<HTMLDivElement, PropsWithChildren<CardProps>>(
  (
    {
      children,
      appearance,
      orientation = "vertical",
      borderRadius,
      padding,
      id,
      testId,
      className,
      style,
    },
    ref
  ) => {
    const classes = useHashClass(
      clsx(
        "card",
        appearance && `card-${appearance}`,
        `card-${orientation}`,
        borderRadius && `radius-${borderRadius}`,
        padding && `spacing-${padding}`,
        className
      )
    )
    return (
      <div
        ref={ref}
        id={id}
        data-testid={testId}
        className={classes}
        style={style as CSSProperties}
      >
        {children}
      </div>
    )
  }
)
Card.displayName = "Card"
