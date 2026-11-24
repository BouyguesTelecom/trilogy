import {
  forwardRef,
  type ComponentRef,
  type ForwardRefExoticComponent,
  type PropsWithChildren,
  type RefAttributes,
} from "react"
import { Text } from "react-native"

import { useTitleStyles } from "./title.styles.native"
import { TitleColor, TitleSize, type TitleProps } from "./title.types"

export type TitleNativeRef = ComponentRef<typeof Text>

/**
 * Title Component
 * @param children {ReactNode} Heading content
 * @param size {TitleSize} Font size: `xs`, `sm`, `base`, `md`, `lg`, `xl`, `xxl`, `xxxl`, or `xxxxl`; defaults to `xxxxl`
 * @param color {TitleColor} Text color; defaults to `primary`
 * @param fontWeight {TitleFontWeight} Font weight; defaults to `medium` for `xxxl`/`xxxxl`, otherwise `semibold`
 * @param accessibilityLabel {string} Accessible label announced by assistive technology
 * @param id {string} Custom native text identifier
 * @param testId {string} Test identifier
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param markup {TitleMarkup} HTML element: `h1`–`h6`, `p`, `span`, or `div`; defaults to `h1`
 * @param className {string} Additional CSS classes
 * - ------------------------- NATIVE PROPERTIES -----------------------------
 * None.
 */
export const Title: ForwardRefExoticComponent<
  PropsWithChildren<TitleProps> & RefAttributes<TitleNativeRef>
> = forwardRef<TitleNativeRef, PropsWithChildren<TitleProps>>(
  (
    {
      children,
      size = TitleSize.xxxxl,
      color,
      fontWeight,
      accessibilityLabel,
      id,
      testId,
    },
    ref
  ) => {
    const styles = useTitleStyles()
    const safeSize = styles.sizes[size] ? size : TitleSize.xxxxl

    return (
      <Text
        ref={ref}
        id={id}
        testID={testId}
        nativeID={testId}
        accessibilityRole="header"
        accessibilityLabel={accessibilityLabel}
        style={[
          styles.sizes[safeSize],
          styles.colors[TitleColor.primary],
          color && styles.colors[color],
          fontWeight && styles.weights[fontWeight],
        ]}
      >
        {children}
      </Text>
    )
  }
)

Title.displayName = "Title"
