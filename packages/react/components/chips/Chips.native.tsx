import { ComponentName } from '@/components/enumsComponentsName'
import { Spacer, SpacerSize } from '@/components/spacer'
import { Text, TextLevels } from '@/components/text'
import React, { useContext, useEffect, useState } from 'react'
import { GestureResponderEvent, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon, IconColor, IconName, IconSize } from '@/components/icon/index'
import { ChipsNativeRef, ChipsProps } from '@/components/chips/ChipsProps'
import { ChipsContext } from '@/components/chips/list/ChipsList.native'
import { getColorStyle } from "@/helpers/color";
import { TrilogyColor } from "@/interfaces/Color";
import { getRadiusStyle } from "@/helpers/radius";
import { Radius } from "@/interfaces/Radius";

/**
 * Chips Component - has to be in a ChipsList component
 * @param children {string} Chips content
 * @param id {string} Chips id
 * @param onClick {Function} onClick Event for all Chips
 * @param active {boolean} active Render Chips Active
 * @param disabled {boolean} Disabled chips
 * @param testId {string} Test Id for Test Integration
 */
const Chips = React.forwardRef<ChipsNativeRef, ChipsProps>(
  ({ children, onClick, disabled, active, testId, ...others }, ref): JSX.Element => {
    const [activeItem, setActiveItem] = useState<boolean>(active || false)
    const chipsContext = useContext(ChipsContext)
    const borderFullRadius = getRadiusStyle(Radius.FULL)

    useEffect(() => {
      setActiveItem(active || false)
    }, [active])

    const styles = StyleSheet.create({
      chips: {
        backgroundColor:
          (disabled && getColorStyle(TrilogyColor.NEUTRAL_FADE)) ||
          (activeItem && getColorStyle(TrilogyColor.MAIN)) ||
          getColorStyle(TrilogyColor.BACKGROUND),
        borderRadius: borderFullRadius,
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 6,
        paddingBottom: 5,
        margin: 6,
        borderColor: active ? getColorStyle(TrilogyColor.MAIN) : getColorStyle(TrilogyColor.STROKE),
        borderWidth: 1,
        flexDirection: 'row',
      },
      text: {
        alignSelf: 'center',
        color:
          (disabled && getColorStyle(TrilogyColor.DISABLED)) ||
          (active && getColorStyle(TrilogyColor.BACKGROUND)) ||
          getColorStyle(TrilogyColor.MAIN),
        paddingTop: 1,
      },
    })

    return (
      <TouchableOpacity
        testID={testId}
        ref={ref}
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
            <Icon size={IconSize.SMALLER} color={IconColor.WHITE} name={IconName.CHECK} />
            <Spacer horizontal size={SpacerSize.ONE} />
          </>
        )}
        <Text level={TextLevels.TWO} style={styles.text}>
          {children}
        </Text>
      </TouchableOpacity>
    )
  },
)

Chips.displayName = ComponentName.Chips
export default Chips
