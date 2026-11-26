import {
  forwardRef,
  type CSSProperties,
  type ForwardRefExoticComponent,
  type PropsWithChildren,
  type RefAttributes,
} from "react"
import { theme } from "@/constants/theme"
import { clsx } from "@/utils/clsx"
import { getBackgroundThemeKey } from "@/utils/getBackgroundThemeKey"
import { getTextColorFromBackground } from "@/utils/getTextColorFromBackground"

import { useHashClass } from "@/hooks/useHashClass.web"

import { BadgeSize, type BadgeProps } from "./badge.types"

/** Badge Component.
 * @param children {ReactNode} Short content: a count, a word or an icon; never wraps
 * @param size {BadgeSize} Fixed size: `default` (24px high) or `small` (16px high); defaults to `default`
 * @param background {BackgroundColors} Semantic background color; defaults to `secondary`; the text is the default color on a light background, white otherwise
 * @param id {string} Element identifier
 * @param testId {string} Test identifier
 * @param style {CSSProperties | StyleProp<ViewStyle | TextStyle>} Style override
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS classes
 * - ------------------------- NATIVE PROPERTIES -----------------------------
 * None.
 */
export const Badge: ForwardRefExoticComponent<
  PropsWithChildren<BadgeProps> & RefAttributes<HTMLSpanElement>
> = forwardRef<HTMLSpanElement, PropsWithChildren<BadgeProps>>(
  (
    {
      children,
      size = BadgeSize.default,
      background = "secondary",
      id,
      testId,
      className,
      style,
    },
    ref
  ) => {
    // Web has no JS theme mode, so the text color is computed from the light theme colors.
    const textColor = getTextColorFromBackground(
      theme.colors.light[getBackgroundThemeKey(background)]
    )
    const classes = useHashClass(
      clsx(
        "badge",
        `badge-${size}`,
        background === "background" ? "bg" : `bg-${background}`,
        `text-${textColor}`,
        className
      )
    )
    return (
      <span
        ref={ref}
        id={id}
        data-testid={testId}
        className={classes}
        style={style as CSSProperties}
      >
        {children}
      </span>
    )
  }
)
Badge.displayName = "Badge"
