import { ComponentName } from '@/components/enumsComponentsName'
import { RadioProps } from '@/components/radio/RadioProps'
import { Text } from '@/components/text'
import { View } from '@/components/view'
import { getColorStyle, TrilogyColor } from '@/objects'
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

/**
 * radio Component
 * @param checked {boolean} Checked radio
 * @param disabled {boolean} Disabled
 * @param readOnly {boolean} readonly radio
 * @param id {string} Id for button, by default id is generate
 * @param label {string} Label for radio
 * @param onChange {ChangeEvent}
 * @param name {string} Name for radio
 * @param value {string} Value for radio
 */
const Radio = ({
  id = React.useId(),
  checked,
  name,
  onChange,
  disabled,
  readonly,
  label,
  value,
}: RadioProps): JSX.Element => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      paddingBottom: 5,
      justifyContent: 'flex-start',
    },
    radio: {
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: getColorStyle(TrilogyColor.FONT),
      borderWidth: 0.6,
      width: 19,
      height: 19,
      borderRadius: 10,
      marginRight: 10,
      marginLeft: 0,
    },
    icon: {
      position: 'absolute',
      left: 2,
      borderRadius: 30,
      width: 14,
      height: 14,
      backgroundColor: getColorStyle(TrilogyColor.MAIN),
    },
    label: {
      color:
        (disabled && getColorStyle(TrilogyColor.DISABLED)) ||
        (checked && getColorStyle(TrilogyColor.MAIN)) ||
        getColorStyle(TrilogyColor.MAIN),
    },
  })

  const handleClick = (value: any) => {
    if (!readonly) {
      if (onChange) {
        onChange({
          radioId: id,
          radioValue: value,
          radioName: name || '',
          radioChecked: true,
        })
      }
    }
  }

  return (
    <TouchableOpacity disabled={disabled} style={styles.container} onPress={() => handleClick(value || false)}>
      <TouchableOpacity
        style={styles.radio}
        disabled={disabled}
        testID={id}
        onPress={() => handleClick(value || false)}
      >
        {checked && <View style={styles.icon} />}
      </TouchableOpacity>
      {label && typeof label.valueOf() === 'string' ? <Text style={styles.label}>{String(label)}</Text> : label}
    </TouchableOpacity>
  )
}

Radio.displayName = ComponentName.Radio

export default Radio
