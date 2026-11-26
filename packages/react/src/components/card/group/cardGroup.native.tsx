import {
  forwardRef,
  type ComponentRef,
  type ForwardRefExoticComponent,
  type PropsWithChildren,
  type RefAttributes,
} from "react"
import { View, type StyleProp, type ViewStyle } from "react-native"

import type { CardGroupProps } from "./cardGroup.types"

export type CardGroupNativeRef = ComponentRef<typeof View>
/** CardGroup Component.
 * @param children {ReactNode} A Card and its CardGroupAddOn siblings
 * @param id {string} Element identifier
 * @param testId {string} Test identifier
 * @param style {CSSProperties | StyleProp<ViewStyle | TextStyle>} Style override
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS classes
 * - ------------------------- NATIVE PROPERTIES -----------------------------
 * None.
 */
export const CardGroup: ForwardRefExoticComponent<
  PropsWithChildren<CardGroupProps> & RefAttributes<CardGroupNativeRef>
> = forwardRef<CardGroupNativeRef, PropsWithChildren<CardGroupProps>>(
  ({ children, id, testId, style }, ref) => (
    <View
      ref={ref}
      nativeID={id}
      testID={testId}
      style={style as StyleProp<ViewStyle>}
    >
      {children}
    </View>
  )
)
CardGroup.displayName = "CardGroup"
