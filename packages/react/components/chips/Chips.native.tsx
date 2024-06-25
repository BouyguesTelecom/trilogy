import React, {useContext, useEffect, useState} from "react"
import {GestureResponderEvent, StyleSheet, TouchableOpacity,} from "react-native"
import {ChipsProps} from "./ChipsProps"
import {Text, TextLevels} from "@/components/text"
import {getColorStyle, TrilogyColor} from "@/objects/facets/Color"
import {Icon, IconColor, IconName, IconSize} from "../icon"
import {ChipsContext} from "./list/ChipsList.native"
import {Spacer, SpacerSize} from "@/components/spacer"
import {ComponentName} from "@/components/enumsComponentsName"

/**
 * Chips Component - has to be in a ChipsList component
 * @param children {string} Chips content
 * @param id {string} Chips id
 * @param onClick {Function} onClick Event for all Chips
 * @param active {boolean} active Render Chips Active
 * @param disabled {boolean} Disabled chips
 * @param inverted {boolean} Background color
 */

const Chips = ({
                 children,
                 onClick,
                 disabled,
                 active,
                 inverted,
                 ...others
               }: ChipsProps): JSX.Element => {
  const [activeItem, setActiveItem] = useState<boolean>(active || false)
  const chipsContext = useContext(ChipsContext)

  useEffect(() => {
    setActiveItem(active || false)
  }, [active])

  const styles = StyleSheet.create({
    chips: {
      backgroundColor:
        (disabled && getColorStyle(TrilogyColor.NEUTRAL_LIGHT)) ||
        (activeItem && getColorStyle(TrilogyColor.MAIN)) ||
        (inverted && getColorStyle(TrilogyColor.BACKGROUND)) ||
        getColorStyle(TrilogyColor.BACKGROUND),
      borderRadius: 30,
      paddingLeft: 12,
      paddingRight: 12,
      paddingTop: 6,
      paddingBottom: 6,
      margin: 6,
      borderColor: active ? getColorStyle(TrilogyColor.MAIN) : getColorStyle(TrilogyColor.FONT, 1),
      borderWidth: 1,
      flexDirection: "row",
    },
    text: {
      alignSelf: "center",
      color:
        (disabled && getColorStyle(TrilogyColor.DISABLED, 1)) ||
        (active && getColorStyle(TrilogyColor.BACKGROUND)) ||
        getColorStyle(TrilogyColor.MAIN),
      paddingTop: 1,
    }
  })

  return (
    <TouchableOpacity
      disabled={disabled}
      style={styles.chips}
      onPress={(e?: GestureResponderEvent) => {
        setActiveItem(active || false)
        if (onClick) {
          onClick(e)
        }
      }}
      {...others}
    >
      {chipsContext.isMultiple && active && (
        <>
          <Icon
            size={IconSize.SMALLER}
            color={IconColor.WHITE}
            name={IconName.CHECK}
          />
          <Spacer horizontal size={SpacerSize.SMALLER}/>
        </>
      )}
      <Text level={TextLevels.TWO} style={styles.text}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}

Chips.displayName = ComponentName.Chips

export default Chips
