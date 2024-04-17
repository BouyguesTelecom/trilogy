import React, {useContext, useEffect, useState} from 'react'
import {GestureResponderEvent, StyleSheet, TouchableOpacity} from 'react-native'
import {ChipsProps} from './ChipsProps'
import {Text, TextLevels} from '../text'
import {getColorStyle, TrilogyColor} from '../../objects/facets/Color'
import {Icon, IconColor, IconName, IconSize} from '../icon'
import {ChipsContext} from './list/ChipsList.native'
import {Spacer, SpacerSize} from '../spacer'
import {ComponentName} from '../enumsComponentsName'

/**
 * Chips Component - has to be in a ChipsList component
 * @param children {string} Chips content
 * @param id {string} Chips id
 * @param onClick {Function} onClick Event for all Chips
 * @param active {boolean} active Render Chips Active
 * @param disabled {boolean} Disabled chips
 * @param inverted {boolean} Background color
 */

const Chips = ({children, onClick, disabled, active, inverted, ...others}: ChipsProps): JSX.Element => {
  const [activeItem, setActiveItem] = useState<boolean>(active || false)
  const chipsContext = useContext(ChipsContext)

  useEffect(() => {
    setActiveItem(active || false)
  }, [active])

  const styles = StyleSheet.create({
    chips: {
      backgroundColor:
        (disabled && getColorStyle(TrilogyColor.BG_DISABLED)) ||
        (activeItem && getColorStyle(TrilogyColor.MAIN)) ||
        (inverted && getColorStyle(TrilogyColor.WHITE)) ||
        getColorStyle(TrilogyColor.GREY_LIGHT),
      borderRadius: 30,
      paddingLeft: 12,
      paddingRight: 12,
      paddingTop: 6,
      paddingBottom: 6,
      margin: 6,
      borderColor: '#dce1e5',
      borderWidth: !active ? 1 : 0,
      flexDirection: 'row',
    },
    text: {
      fontWeight: active ? 'bold' : 'normal',
      fontSize: 16,
      color:
        (disabled && getColorStyle(TrilogyColor.GREY_DARK)) ||
        (active && getColorStyle(TrilogyColor.WHITE)) ||
        getColorStyle(TrilogyColor.MAIN),
    },
    icon: {
      top: 3,
    },
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
          <Icon style={styles.icon} size={IconSize.SMALL} color={IconColor.WHITE} name={IconName.CHECK}/>
          <Spacer horizontal size={SpacerSize.SMALL}/>
        </>
      )}
      <Text level={TextLevels.ONE} style={styles.text}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}

Chips.displayName = ComponentName.Chips

export default Chips
