import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconSize } from '@/components/icon'
import { IconName } from '@/components/icon/IconNameEnum'
import { Text } from '@/components/text'
import React, { useEffect, useState } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { CheckboxNativeRef, CheckboxProps } from '@/components/checkbox/CheckboxProps'
import { getColorStyle } from "@/helpers/color";
import { TrilogyColor } from "@/interfaces/Color";
import { getRadiusStyle } from "@/helpers/radius";
import { Radius } from "@/interfaces/Radius";

/**
 * Checkbox Component
 * @param checked {boolean} Checked Checkbox
 * @param disabled {boolean} Disabled
 * @param readOnly {boolean} readonly Checkbox
 * @param id {string} Id for button, by default id is generate
 * @param label {string} Label for Checkbox // Incompatible with children
 * @param onChange {ChangeEvent}
 * @param name {string} Name for checkbox
 * @param testId {string} Test Id for Test Integration
 */
const Checkbox = React.forwardRef<CheckboxNativeRef, CheckboxProps>(
  ({ id = React.useId(), checked, name, onChange, disabled, readonly, label, testId }, ref): JSX.Element => {
    const [_checked, setChecked] = useState(checked || false)
    const borderSmallerRadius = getRadiusStyle(Radius.SMALLER)

    useEffect(() => {
      setChecked(checked || false)
    }, [checked])

    const styles = StyleSheet.create({
      container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
      },
      checkBox: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderColor: getColorStyle(
          disabled ? TrilogyColor.DISABLED : _checked ? TrilogyColor.MAIN : TrilogyColor.STROKE,
        ),
        borderWidth: 0.6,
        width: 19,
        height: 19,
        borderRadius: borderSmallerRadius,
        marginRight: 10,
        marginLeft: 0,
        backgroundColor: getColorStyle(
          disabled ? TrilogyColor.DISABLED_FADE : _checked ? TrilogyColor.MAIN : 'transparent',
        ),
      },
      label: {
        marginTop: 2,
        color: getColorStyle(disabled ? TrilogyColor.DISABLED : TrilogyColor.MAIN),
      },
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
      <TouchableOpacity ref={ref} disabled={disabled} style={styles.container} onPress={() => handleClick()}>
        <TouchableOpacity
          style={styles.checkBox}
          disabled={disabled}
          testID={testId || id}
          onPressIn={() => handleClick()}
        >
          {_checked && <Icon size={IconSize.SMALLER} color={TrilogyColor.BACKGROUND} name={IconName.CHECK} />}
        </TouchableOpacity>
        {label && typeof label.valueOf() === 'string' ? <Text style={styles.label}>{String(label)}</Text> : label}
      </TouchableOpacity>
    )
  },
)

Checkbox.displayName = ComponentName.Checkbox

export default Checkbox
