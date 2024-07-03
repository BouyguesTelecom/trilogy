import React, { useEffect, useState } from "react"
import { Animated, StyleSheet, TouchableOpacity, View } from "react-native"
import { TabsItemProps } from "./TabsItemProps"
import { getColorStyle, TrilogyColor } from "@/objects/facets/Color"
import { ComponentName } from "@/components/enumsComponentsName"
import { Icon } from "@/components/icon"
import { Text, TextLevels } from "@/components/text"

/**
 * Tabs Item Component
 * @param active {boolean} active tab item
 * @param children {ReactChild} React Child Element
 * @param onClick onClick Event
 * @param iconName {IconNameValues | IconName} add icon name
 */
const TabsItem = ({
                    active,
                    children,
                    onClick,
                    iconName,
                    inverted,
                    disabled,
                    ...others
                  }: TabsItemProps): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [, setActiveItem] = useState<boolean>(active || false)
  const [, setInPressIn] = useState<boolean>(false)

  const animatedBorderStyle = {
    borderBottomWidth: active && 2 || 0,
  }

  const getIconColor = React.useMemo(() => {
    if (inverted) {
      if (disabled) return TrilogyColor.NEUTRAL_LIGHT
      return TrilogyColor.BACKGROUND
    }
    if (disabled) return TrilogyColor.DISABLED
    if (active) return TrilogyColor.MAIN
    return TrilogyColor.MAIN
  }, [inverted, disabled, active])

  const getBorderColor = React.useMemo(() => {
    if (disabled) return "transparent"
    if (inverted) {
      if (active) return getColorStyle(TrilogyColor.BACKGROUND)
    }
    if (active) return getColorStyle(TrilogyColor.MAIN)
    return "transparent"
  }, [inverted, disabled, active])

  const styles = StyleSheet.create({
    tabsItem: {
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 6,
      paddingHorizontal: 14,
      position: "relative",
      height: iconName ? 60 : 44,
    },
    text: {
      color: getColorStyle(getIconColor),
      textAlign: "center",
    },
    border: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      borderBottomColor: getBorderColor,
    },
  })

  useEffect(() => {
    setActiveItem(active || false)
  }, [active])

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPressIn={() => setInPressIn(true)}
      onPressOut={() => setInPressIn(false)}
      style={[styles.tabsItem]}
      onPress={(e?: unknown) => {
        if (!disabled) {
          setActiveItem(active || false)
          if (onClick) {
            onClick(e)
          }
        }
      }}
      {...others}
    >
      {iconName && (
        <View>
          <Icon color={getIconColor} size='small' name={iconName}/>
        </View>
      )}

      {children &&
        (typeof children.valueOf() === "string" ? (
          <Text style={styles.text} level={TextLevels.TWO}>
            {String(children)}
          </Text>
        ) : (
          children
        ))}
      <Animated.View style={[styles.border, animatedBorderStyle]}/>
    </TouchableOpacity>
  )
}

TabsItem.displayName = ComponentName.TabsItem

export default TabsItem
