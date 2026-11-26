import {
  forwardRef,
  type ComponentRef,
  type ForwardRefExoticComponent,
  type PropsWithChildren,
  type RefAttributes,
} from "react"
import { View, type StyleProp, type ViewStyle } from "react-native"

import { useBadgeAnchorStyles } from "./badgeAnchor.styles.native"
import { BadgeAnchorPosition, type BadgeAnchorProps } from "./badgeAnchor.types"
import { BadgeAnchorPositionProvider } from "./badgeAnchorPosition.native"

export type BadgeAnchorNativeRef = ComponentRef<typeof View>
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
  PropsWithChildren<BadgeAnchorProps> & RefAttributes<BadgeAnchorNativeRef>
> = forwardRef<BadgeAnchorNativeRef, PropsWithChildren<BadgeAnchorProps>>(
  (
    { children, position = BadgeAnchorPosition.topRight, id, testId, style },
    ref
  ) => {
    const styles = useBadgeAnchorStyles()
    return (
      <View
        ref={ref}
        nativeID={id}
        testID={testId}
        style={[styles.base.view, style as StyleProp<ViewStyle>]}
      >
        <BadgeAnchorPositionProvider value={position}>
          {children}
        </BadgeAnchorPositionProvider>
      </View>
    )
  }
)
BadgeAnchor.displayName = "BadgeAnchor"
