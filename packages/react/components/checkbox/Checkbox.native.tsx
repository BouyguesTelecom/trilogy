import React, { useEffect, useState } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { IconName } from '@/components/icon/IconNameEnum'
import { CheckboxProps } from './CheckboxProps'
import shortid from 'shortid'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import { Text } from '@/components/text'
import { Icon, IconSize } from '@/components/icon'
import { ComponentName } from '@/components/enumsComponentsName'

/**
 * Checkbox Native Component
 * @param checked {boolean} Checked Checkbox
 * @param disabled {boolean} Disabled
 * @param readonly {boolean} readonly Checkbox
 * @param id {string} Id for button, by default id is generate
 * @param label {string} Label for Checkbox
 * @param onClick {ClickEvent}
 * @param onChange {ChangeEvent}
 * @param name {string} Name for checkbox
 */
const Checkbox = ({
  id = shortid.generate(),
  checked,
  name,
  onChange,
  disabled,
  readonly,
  label,
}: CheckboxProps): JSX.Element => {
  const [_checked, setChecked] = useState(checked || false)

  useEffect(() => {
    setChecked(checked || false)
  }, [checked])

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      borderColor: 'red',
      borderWidth: 1,
    },
    checkBox: {
      alignItems: 'center',
      justifyContent: 'flex-start',
      borderColor: getColorStyle(TrilogyColor.FONT),
      borderWidth: 0.6,
      width: 19,
      height: 19,
      borderRadius: 4,
      marginRight: 10,
      marginLeft: 0,
      backgroundColor:
        (disabled && getColorStyle(TrilogyColor.DISABLED_FADE)) ||
        (_checked && getColorStyle(TrilogyColor.MAIN)) ||
        'transparent',
    },
    label: {
      marginTop: 2,
      color:
        (disabled && getColorStyle(TrilogyColor.DISABLED)) ||
        (_checked && getColorStyle(TrilogyColor.MAIN)) ||
        getColorStyle(TrilogyColor.MAIN),
    }
  })

  const handleClick = () => {
    if (!readonly) {
      setChecked(!_checked)
      if (onChange) {
        onChange({
          checkboxId: id,
          checkboxValue: '',
          checkboxName: name || '',
          checkboxChecked: !_checked,
        })
      }
    }
  }

  return (
    <TouchableOpacity disabled={disabled} style={styles.container} onPress={() => handleClick()}>
      <TouchableOpacity style={styles.checkBox} disabled={disabled} testID={id} onPressIn={() => handleClick()}>
        {_checked && <Icon size={IconSize.SMALLER} color={TrilogyColor.BACKGROUND} name={IconName.CHECK} />}
      </TouchableOpacity>
      {label && typeof label.valueOf() === 'string' ? <Text style={styles.label}>{String(label)}</Text> : label}
    </TouchableOpacity>
  )
}

Checkbox.displayName = ComponentName.Checkbox

export default Checkbox
