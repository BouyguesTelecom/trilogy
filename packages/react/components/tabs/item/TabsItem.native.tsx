import React, { useEffect, useState } from "react"
import { StyleSheet, TouchableOpacity, View } from "react-native"
import { TabsItemProps } from "./TabsItemProps"
import { getColorStyle, TrilogyColor } from "../../../objects/facets/Color"
import { TypographyBold } from "../../../objects"
import { ComponentName } from "../../enumsComponentsName"
import { Icon } from "../../icon"
import { Text, TextLevels } from "../../text"

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
  tabIndex,
  iconName,
  inverted,
  disabled,
  ...others
}: TabsItemProps): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeItem, setActiveItem] = useState<boolean>(active || false)
  const [isPressIn, setInPressIn] = useState<boolean>(false)

  const getIconColor = React.useMemo(() => {
    if (inverted) {
      if (disabled) return TrilogyColor.NEUTRAL_LIGHT
      return TrilogyColor.WHITE
    }
    if (disabled) return TrilogyColor.DISABLED
    if (active) return TrilogyColor.MAIN
    return TrilogyColor.MAIN
  }, [inverted, disabled, active])

  const getBorderColor = React.useMemo(() => {
    if (disabled) return "transparent"
    if (inverted) {
      if (active) return getColorStyle(TrilogyColor.WHITE)
      return getColorStyle(TrilogyColor.FONT, 1)
    }
    if (active) return getColorStyle(TrilogyColor.MAIN)
    return getColorStyle(TrilogyColor.FONT, 1)
  }, [inverted, disabled, active])

  const styles = StyleSheet.create({
    tabsItem: {
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 6,
      paddingHorizontal: 14,
      position: "relative",
      borderBottomWidth: 2,
      height: iconName ? 60 : 44,
      borderBottomColor: getBorderColor,
    },
    text: {
      color: getColorStyle(getIconColor),
      textAlign: "center",
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
          <Icon color={getIconColor} size='small' name={iconName} />
        </View>
      )}

      {children &&
        (typeof children.valueOf() === "string" ? (
          <Text
            typo={
              active
                ? TypographyBold.TEXT_WEIGHT_SEMIBOLD
                : TypographyBold.TEXT_WEIGHT_NORMAL
            }
            style={styles.text}
            level={TextLevels.TWO}
          >
            {String(children)}
          </Text>
        ) : (
          children
        ))}
    </TouchableOpacity>
  )
}

TabsItem.displayName = ComponentName.TabsItem

export default TabsItem
