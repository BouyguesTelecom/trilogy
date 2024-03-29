import React, { useState, useEffect } from 'react'
import { StyleSheet, Switch as SwitchNative, Platform } from 'react-native'
import { SwitchProps } from './SwitchProps'
import shortid from 'shortid'
import { getAlertStyle } from '../../objects'
import { getColorStyle, TrilogyColor } from '../../objects/facets/Color'
import { ComponentName } from '../enumsComponentsName'

/**
 * Switch Native Component
 * @param id {string} Is auto generate by default
 * @param checked {boolean} Checked switch
 * @param onChange {Function} onChange event
 * @param alert {AlertState} Alert Variant (INFO|SUCCESS|WARNING|ERROR)
 * @param disabled {boolean} Switch disabled
 * @param readonly {boolean} Switch readonly
 * @param name {string} Switch name
 */
const Switch = ({
  id = shortid.generate(),
  checked,
  onChange,
  alert,
  disabled,
  readonly,
  name,
}: SwitchProps): JSX.Element => {
  const [_checked, setChecked] = useState<boolean>(checked || false)

  useEffect(() => {
    if (!readonly) {
      setChecked(checked || false)
    }
  }, [checked, readonly])

  const defaultColor = getColorStyle(TrilogyColor.SECONDARY)
  const backgroundColorOff = getColorStyle(TrilogyColor.GREY_DARK)
  const backgroundColorDisabled = getColorStyle(TrilogyColor.GREY)
  const thumbColor = getColorStyle(TrilogyColor.WHITE)

  const styles = StyleSheet.create({
    switchIos: {
      transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }],
    },
  })

  return (
    <SwitchNative
      testID='switch-id'
      style={Platform.OS === 'ios' ? styles.switchIos : {}}
      trackColor={{
        false: disabled ? backgroundColorDisabled : backgroundColorOff,
        true: disabled ? backgroundColorDisabled : (alert && getAlertStyle(alert)) || defaultColor,
      }}
      thumbColor={thumbColor}
      ios_backgroundColor={disabled ? backgroundColorDisabled : backgroundColorOff}
      onValueChange={(state) => {
        if (onChange) {
          onChange({ switchState: state, switchName: name || '' })
        }
      }}
      nativeID={name ? `${name}_${id}` : id}
      disabled={disabled}
      value={_checked}
    />
  )
}

Switch.displayName = ComponentName.Switch

export default Switch
