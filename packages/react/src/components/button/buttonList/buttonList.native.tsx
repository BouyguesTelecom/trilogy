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
