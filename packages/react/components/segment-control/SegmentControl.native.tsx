import React, { useState } from "react"
import { StyleSheet } from "react-native"
import { SegmentControlProps } from "./SegmentControlProps"
import { View } from "@/components/view"
import { Text, TextLevels } from "@/components/text"
import SegmentedControlItem from "./item"
import { getColorStyle, TrilogyColor } from "@/objects/facets/Color"
import { ComponentName } from "@/components/enumsComponentsName"

/**
 * SegmentControl Component
 * @param children {ReactNode} Children for SegmentedControl
 * @param onClick onClick event
 * @param activeIndex {number} default active SegmentedControl index
 * @param disabled {boolean} disabled SegmentedControl
 * @param inverted {boolean} invert color SegmentedControl
 * @param marginless {boolean} delete margin
 */
const SegmentControl = ({
  children,
  onClick,
  activeIndex,
  disabled,
  marginless,
  inverted,
  ...others
}: SegmentControlProps): JSX.Element => {
  const [activateIndex, setActivateIndex] = useState(activeIndex || 0)

  const isActive = (index: number, childPropsActive: React.ReactNode) => {
    if (typeof childPropsActive !== "undefined" && !activateIndex) {
      return childPropsActive
    }
    if (index === activateIndex) {
      return true
    }
  }

  const toggleActive = (e: React.MouseEvent, index: number) => {
    if (disabled) {
      return false
    }
    setActivateIndex(index)
    if (onClick) {
      onClick(e)
    }
  }

  const styles = StyleSheet.create({
    padding: {
      paddingLeft: marginless ? 0 : 10,
      paddingRight: marginless ? 0 : 10,
    },
    segmentedControl: {
      flexDirection: "row",
      width: "100%",
      backgroundColor: getColorStyle(TrilogyColor.NEUTRAL_DARK, 1),
      borderRadius: 4,
      padding: 4,
      paddingRight: -4,
    },
  })

  return (
    <View style={styles.padding}>
      <View style={styles.segmentedControl} {...others}>
        {children &&
          Array.isArray(children) &&
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          children.map((child: any, index: number) => {
            const props = {
              inverted:
                Boolean(isActive(index, child.props.active) && inverted) ||
                false,
              active: Boolean(isActive(index, child.props.active)) || false,
              disabled: child.props.disabled,
              key: index,
              tabIndex: index,
              onClick: (event: React.MouseEvent) => {
                toggleActive(event, index)
                if (child) {
                  if (child.props.onClick) {
                    child.props.onClick(event)
                  }
                }
              },
            }
            if (index < 5) {
              return typeof child.valueOf() === "string" ? (
                <SegmentedControlItem
                  disabled={props.disabled}
                  active={props.active}
                  onClick={(e: unknown) => onClick?.(e)}
                >
                  <Text level={TextLevels.ONE}>{String(child)}</Text>
                </SegmentedControlItem>
              ) : (
                React.cloneElement(child, props)
              )
            }
          })}
      </View>
    </View>
  )
}

SegmentControl.displayName = ComponentName.SegmentControl

export default SegmentControl
