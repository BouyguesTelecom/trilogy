import {
  forwardRef,
  type CSSProperties,
  type ForwardRefExoticComponent,
  type PropsWithChildren,
  type RefAttributes,
} from "react"
import { clsx } from "@/utils/clsx"

import { useHashClass } from "@/hooks/useHashClass.web"

import { BadgeAnchorPosition, type BadgeAnchorProps } from "./badgeAnchor.types"

/** BadgeAnchor Component.
 * @param children {ReactNode} The element that receives the badge, followed by the Badge
 * @param position {BadgeAnchorPosition} Corner where the Badge sits: `top-left`, `top-right`, `bottom-left` or `bottom-right`; defaults to `top-right`
 * @param id {string} Element identifier
 * @param testId {string} Test identifier
 * @param style {CSSProperties | StyleProp<ViewStyle | TextStyle>} Style override
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS classes
 * - ------------------------- NATIVE PROPERTIES -----------------------------
 * None.
 */
export const BadgeAnchor: ForwardRefExoticComponent<
  PropsWithChildren<BadgeAnchorProps> & RefAttributes<HTMLDivElement>
> = forwardRef<HTMLDivElement, PropsWithChildren<BadgeAnchorProps>>(
  (
    {
      children,
      position = BadgeAnchorPosition.topRight,
      id,
      testId,
      className,
      style,
    },
    ref
  ) => {
    const classes = useHashClass(
      clsx("badgeAnchor", `badgeAnchor-${position}`, className)
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
BadgeAnchor.displayName = "BadgeAnchor"
