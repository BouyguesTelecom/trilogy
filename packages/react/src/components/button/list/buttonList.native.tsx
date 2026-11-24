import {
  forwardRef,
  ForwardRefExoticComponent,
  PropsWithChildren,
  RefAttributes,
} from "react"
import { View } from "react-native"

import { buttonListStyles } from "./buttonList.styles.native"
import { ButtonListProps } from "./buttonList.types"

export type ButtonListRef = React.ComponentRef<typeof View>
type Props = PropsWithChildren<ButtonListProps>

/**
 * ButtonList Component
 * @param children {ReactNode} Actions arranged in the list
 * @param alignItems {ButtonListAlignItems} Cross-axis alignment; React Native default is `stretch`
 * @param justifyContent {ButtonListJustifyContent} Main-axis distribution; React Native default is `flex-start`
 * @param direction {ButtonListDirection} Layout direction: `column` or `row`; defaults to `column`
 * @param wrap {"wrap" | "nowrap"} Whether children wrap; defaults to `nowrap`
 * @param accessibilityLabel {string} Accepted by the type but not forwarded on either platform
 * @param id {string} Custom native view identifier
 * @param testId {string} Test identifier
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS classes
 * - ------------------------- NATIVE PROPERTIES -----------------------------
 * None.
 */
export const ButtonList: ForwardRefExoticComponent<
  Props & RefAttributes<ButtonListRef>
> = forwardRef<ButtonListRef, Props>(
  (
    { alignItems, direction, justifyContent, id, testId, children, wrap },
    ref
  ) => {
    return (
      <View
        ref={ref}
        id={id}
        testID={testId}
        nativeID={testId}
        style={[
          alignItems && buttonListStyles[`align${alignItems}`],
          justifyContent && buttonListStyles[`justify${justifyContent}`],
          direction && buttonListStyles[`direction${direction}`],
          wrap && buttonListStyles[`wrap${wrap}`],
        ]}
      >
        {children}
      </View>
    )
  }
)

ButtonList.displayName = "ButtonList"
