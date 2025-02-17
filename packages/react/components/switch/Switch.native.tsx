import React, { useEffect, useState } from 'react'
import { Platform, StyleSheet, Switch as SwitchNative } from 'react-native'
import { SwitchProps } from './SwitchProps'
import shortid from 'shortid'
import { getStatusStyle } from '@/objects'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import { ComponentName } from '@/components/enumsComponentsName'
import { isIOS } from '@/helpers'

/**
 * Switch Component
 * @param id {string} Is auto generate by default
 * @param checked {boolean} Checked switch
 * @param onChange {Function} onChange event
 * @param status {StatusState} Status Variant (INFO|SUCCESS|WARNING|ERROR)
 * @param disabled {boolean} Switch disabled
 * @param readonly {boolean} Switch readonly
 * @param name {string} Switch name
 */

const Switch = ({
  id = shortid.generate(),
  checked,
  onChange,
  status,
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

  const backgroundColorOff = getColorStyle(TrilogyColor.NEUTRAL)
  const backgroundColorDisabled = getColorStyle(TrilogyColor.DISABLED)
  const thumbColor = getColorStyle(TrilogyColor.BACKGROUND)

  const styles = StyleSheet.create({
    switchIos: {
      transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }],
    },
  })

  return (
    <SwitchNative
      testID='switch-id'
      style={isIOS ? styles.switchIos : {}}
      trackColor={{
        false: disabled ? backgroundColorDisabled : backgroundColorOff,
        true: disabled ? backgroundColorDisabled : getStatusStyle(status).color,
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
