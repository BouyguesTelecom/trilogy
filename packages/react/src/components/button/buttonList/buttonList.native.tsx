import {
  forwardRef,
  ForwardRefExoticComponent,
  PropsWithChildren,
  RefAttributes,
} from "react"
import { StyleSheet, View } from "react-native"

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
          alignItems && styles[`align${alignItems}`],
          justifyContent && styles[`justify${justifyContent}`],
          direction && styles[`direction${direction}`],
          wrap && styles[`wrap${wrap}`],
        ]}
      >
        {children}
      </View>
    )
  }
)

ButtonList.displayName = "ButtonList"

const styles = StyleSheet.create({
  ["aligncenter"]: {
    alignItems: "center",
  },
  ["alignflex-start"]: {
    alignItems: "flex-start",
  },
  ["alignflex-end"]: {
    alignItems: "flex-end",
  },
  ["alignstretch"]: {
    alignItems: "stretch",
  },
  ["justifycenter"]: {
    justifyContent: "center",
  },
  ["justifyflex-start"]: {
    justifyContent: "flex-start",
  },
  ["justifyflex-end"]: {
    justifyContent: "flex-end",
  },
  ["justifyspace-between"]: {
    justifyContent: "space-between",
  },
  ["justifyspace-around"]: {
    justifyContent: "space-around",
  },
  ["directionrow"]: {
    flexDirection: "row",
  },
  ["directioncolumn"]: {
    flexDirection: "column",
  },
  ["wrapwrap"]: {
    flexWrap: "wrap",
  },
  ["wrapnowrap"]: {
    flexWrap: "nowrap",
  },
})
