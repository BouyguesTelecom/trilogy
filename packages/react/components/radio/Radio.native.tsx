import { ComponentName } from '@/components/enumsComponentsName'
import { RadioProps } from '@/components/radio/RadioProps'
import { Text } from '@/components/text'
import { getColorStyle, TrilogyColor } from '@/objects'
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

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
      alignItems: 'center',
    },
    radio: {
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: getColorStyle(disabled ? TrilogyColor.DISABLED : TrilogyColor.FONT),
      borderWidth: 1,
      width: 18,
      height: 18,
      borderRadius: 10,
      marginRight: 10,
    },
    icon: {
      borderRadius: 12,
      width: 12,
      height: 12,
      backgroundColor: getColorStyle(TrilogyColor.MAIN),
    },
    label: {
      paddingTop: 2,
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
      <View style={styles.radio} testID={id}>
        {checked && <View style={styles.icon} />}
      </View>
      {label && typeof label.valueOf() === 'string' ? <Text style={styles.label}>{String(label)}</Text> : label}
    </TouchableOpacity>
  )
}

Radio.displayName = ComponentName.Radio

export default Radio
