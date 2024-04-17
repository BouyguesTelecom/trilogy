import * as React from "react"
import { View, StyleSheet } from "react-native"
import { SliderItemProps } from "./SliderItemProps"
import { ComponentName } from "../../enumsComponentsName"

/**
 * Slider Item component
 * @param children {ReactNode} Slider Item child
 * @param testId
 * @param accessibilityLabel
 * @param others
 */
const SliderItem = ({
  children,
  testId,
  accessibilityLabel,
  ...others
}: SliderItemProps): JSX.Element => {
  const styles = StyleSheet.create({
    height: {
      height: "100%",
    },
  })

  return (
    <View
      testID={testId}
      accessibilityLabel={accessibilityLabel}
      accessible={!!accessibilityLabel}
      {...others}
    >
      {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        React.Children.map(children, (child: any) =>
          React.cloneElement(child, {
            style: [styles.height, child.props.style],
          })
        )
      }
    </View>
  )
}

SliderItem.displayName = ComponentName.SliderItem

export default SliderItem
