import { Picker } from '@react-native-picker/picker'
import React, { useCallback, useEffect, useState } from 'react'
import { Platform, StyleSheet, View } from 'react-native'
import { TrilogyColor, getColorStyle } from '../../objects'
import { ComponentName } from '../enumsComponentsName'
import { IconName } from '../icon'
import { Input } from '../input'
import { Modal } from '../modal'
import { SelectProps } from './SelectProps'

/**
 * Select Component
 * @param id {string} Select id
 * @param name {string} Select name
 * @param selected {string} Selected value
 * @param children {React.ReactNode} Children for Select
 * @param label {string} label for select
 * @param iconName {IconName} icon for left of selector
 * @param placeholder {string} Select Placeholder
 */
const Select = ({
  children,
  name,
  id,
  selected,
  label,
  iconName,
  onChange,
  placeholder,
  disabled,
  ...others
}: SelectProps): JSX.Element => {
  const [selectedValue, setSelectedValue] = useState<string | number>(selected as string)
  const [display, setDisplay] = useState<boolean>(false)

  useEffect(() => {
    setSelectedValue((selected as string) || '')
  }, [selected])

  const styles = StyleSheet.create({
    select: {
      width: '100%',
      backgroundColor: disabled ? getColorStyle(TrilogyColor.DISABLED, 1) : TrilogyColor.BACKGROUND,
      borderColor: disabled ? getColorStyle(TrilogyColor.DISABLED, 1) : getColorStyle(TrilogyColor.FONT, 1),
      borderWidth: 1,
      borderRadius: 4,
      zIndex: 3, // works on ios
      overflow: 'hidden',
      flexDirection: 'row',
      alignItems: 'center',
      height: 50,
    },
  })

  const handleOpenCloseModal = useCallback(() => {
    setDisplay((prev) => !prev)
  }, [])

  if (Platform.OS === 'ios') {
    return (
      <>
        <Input
          placeholder={label}
          hasIcon={!!iconName}
          customIconLeft={iconName}
          {...{ editable: false, onPressIn: handleOpenCloseModal }}
        />
        <Modal active={display} onClose={handleOpenCloseModal} closeIcon swipable={false}>
          {children}
        </Modal>
      </>
    )
  }

  return (
    <View style={styles.select}>
      <Picker
        placeholder={placeholder}
        selectedValue={selectedValue}
        style={{ width: '100%', height: '100%' }}
        onValueChange={(itemValue: number | string) => {
          if (onChange) {
            onChange(itemValue)
          }
          setSelectedValue(itemValue)
          setDisplay(false)
        }}
        mode={'dialog'}
      >
        {children}
      </Picker>
    </View>
  )
}

Select.displayName = ComponentName.Select

export default Select
