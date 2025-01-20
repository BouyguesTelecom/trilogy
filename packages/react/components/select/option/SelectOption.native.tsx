import { Column, Columns } from '@/components/columns'
import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconSize } from '@/components/icon'
import { Text } from '@/components/text'
import { Alignable } from '@/objects'
import { TypographyBold } from '@/objects/Typography'
import { TrilogyColor, getColorStyle } from '@/objects/facets/Color'
import * as React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { SelectOptionProps } from './SelectOptionProps'

/**
 * Select Option Component
 * @param value {string} Select option value
 * @param label {string} Label value
 * @param children {React.ReactNode}
 */
const SelectOption = ({ disabled, children, onClick, label, iconName, ...others }: SelectOptionProps): JSX.Element => {
  const { checked } = others as { checked: string }

  const styles = React.useMemo(
    () =>
      StyleSheet.create({
        container: {
          backgroundColor: (disabled && getColorStyle(TrilogyColor.DISABLED_FADE)) || undefined,
          width: '100%',
          paddingVertical: checked && !iconName ? 8.5 : 10,
        },
      }),
    [disabled, checked],
  )

  const textColor = React.useMemo(() => {
    switch (true) {
      case disabled === true:
        return getColorStyle(TrilogyColor.DISABLED)
      default:
        return getColorStyle(TrilogyColor.MAIN)
    }
  }, [disabled])

  const iconColor = React.useMemo(() => {
    switch (true) {
      case disabled === true:
        return TrilogyColor.DISABLED
      default:
        return TrilogyColor.MAIN
    }
  }, [disabled])

  const columnLabelSize = React.useMemo(() => {
    return iconName ? (checked && 10) || 11 : (checked && 11) || 12
  }, [iconName, checked])

  return (
    <TouchableOpacity style={[styles.container]} {...others} onPress={onClick}>
      <Columns verticalAlign={Alignable.ALIGNED_CENTER}>
        {iconName && (
          <Column size={1}>
            <Icon size={IconSize.SMALL} name={iconName} color={iconColor} />
          </Column>
        )}
        <Column size={columnLabelSize}>
          <Text
            typo={[checked && TypographyBold.TEXT_WEIGHT_SEMIBOLD]}
            {...{ style: { paddingLeft: 8, color: textColor } }}
          >
            {children || label}
          </Text>
        </Column>
        {checked && (
          <Column size={1}>
            <Icon size={IconSize.SMALL} name='tri-check' color={iconColor} />
          </Column>
        )}
      </Columns>
    </TouchableOpacity>
  )
}

SelectOption.displayName = ComponentName.SelectOption

export default SelectOption
