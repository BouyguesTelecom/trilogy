import {
  forwardRef,
  type ComponentRef,
  type ForwardRefExoticComponent,
  type PropsWithChildren,
  type RefAttributes,
} from "react"
import { View, type StyleProp, type ViewStyle } from "react-native"

import {
  AccordionItemContext,
  useAccordionItemState,
} from "../accordionContext"
import { useAccordionItemStyles } from "./accordionItem.styles.native"
import type { AccordionItemProps } from "./accordionItem.types"

export type AccordionItemNativeRef = ComponentRef<typeof View>

/**
 * AccordionItem Component
 * @param children {ReactNode} Header and expandable body
 * @param open {boolean} Controlled open state
 * @param defaultOpen {boolean} Initial uncontrolled open state; defaults to false
 * @param onOpenChange {(open: boolean) => void} Called when the user requests a state change
 * @param disabled {boolean} Prevents activation; defaults to false
 * @param testId {string} Test identifier
 * @param id {string} Element identifier
 * @param style {CSSProperties | StyleProp<ViewStyle | TextStyle>} Inline style override
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS classes
 * - ------------------------- NATIVE PROPERTIES -----------------------------
 * None.
 */
export const AccordionItem: ForwardRefExoticComponent<
  PropsWithChildren<AccordionItemProps> & RefAttributes<AccordionItemNativeRef>
> = forwardRef<AccordionItemNativeRef, PropsWithChildren<AccordionItemProps>>(
  (
    { children, id, testId, style, open, defaultOpen, onOpenChange, disabled },
    ref
  ) => {
    const state = useAccordionItemState({
      open,
      defaultOpen,
      onOpenChange,
      disabled,
    })
    const styles = useAccordionItemStyles()
    return (
      <AccordionItemContext.Provider value={state}>
        <View
          ref={ref}
          nativeID={id}
          testID={testId}
          style={[
            styles.item.view,
            state.disabled && styles.item.disabled,
            style as StyleProp<ViewStyle>,
          ]}
        >
          {children}
        </View>
      </AccordionItemContext.Provider>
    )
  }
)
AccordionItem.displayName = "AccordionItem"
