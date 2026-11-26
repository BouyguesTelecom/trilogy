import {
  forwardRef,
  type ComponentRef,
  type ForwardRefExoticComponent,
  type PropsWithChildren,
  type RefAttributes,
} from "react"
import { View, type StyleProp, type ViewStyle } from "react-native"

import type { CardGroupAddOnProps } from "../card.types"
import { useCardGroupAddOnStyles } from "./cardGroupAddOn.styles.native"

export type CardGroupAddOnNativeRef = ComponentRef<typeof View>
/** CardGroupAddOn Component.
 * @param children {ReactNode} Content straddling the edge of the adjacent Card
 * @param align {CardGroupAddOnAlign} Logical alignment: `start`, `center` or `end`; defaults to `center`
 * @param id {string} Element identifier
 * @param testId {string} Test identifier
 * @param style {CSSProperties | StyleProp<ViewStyle | TextStyle>} Style override
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS classes
 * - ------------------------- NATIVE PROPERTIES -----------------------------
 * None.
 */
export const CardGroupAddOn: ForwardRefExoticComponent<
  PropsWithChildren<CardGroupAddOnProps> &
    RefAttributes<CardGroupAddOnNativeRef>
> = forwardRef<CardGroupAddOnNativeRef, PropsWithChildren<CardGroupAddOnProps>>(
  ({ children, align = "center", id, testId, style }, ref) => {
    const styles = useCardGroupAddOnStyles()
    return (
      <View
        ref={ref}
        nativeID={id}
        testID={testId}
        style={[
          styles.base.view,
          styles.align[align],
          style as StyleProp<ViewStyle>,
        ]}
      >
        {children}
      </View>
    )
  }
)
CardGroupAddOn.displayName = "CardGroupAddOn"
