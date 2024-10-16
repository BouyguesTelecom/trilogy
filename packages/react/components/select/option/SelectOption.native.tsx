import { Columns, ColumnsItem } from '@/components/columns'
import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconSize } from '@/components/icon'
import { Text } from '@/components/text'
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
        },
      }),
    [disabled],
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
    switch (true) {
      case iconName !== undefined && checked !== undefined:
        return 10
      case iconName === undefined && checked !== undefined:
        return 11
      case iconName !== undefined && checked === undefined:
        return 11
      default:
        return 11
    }
  }, [iconName, checked])

  return (
    <TouchableOpacity style={[styles.container]} {...others} onPress={onClick}>
      <Columns {...{ style: { paddingVertical: 16, paddingHorizontal: 8 } }}>
        <ColumnsItem size={12}>
          <Columns>
            {iconName && (
              <ColumnsItem size={1} verticalCenter>
                <Icon size={IconSize.SMALL} name={iconName} color={iconColor} />
              </ColumnsItem>
            )}
            <ColumnsItem verticalCenter size={columnLabelSize}>
              <Text
                typo={[checked && TypographyBold.TEXT_WEIGHT_SEMIBOLD]}
                {...{ style: { paddingLeft: 8, color: textColor } }}
              >
                {children || label}
              </Text>
            </ColumnsItem>
            {checked && (
              <ColumnsItem size={1} verticalCenter>
                <Icon size={IconSize.SMALL} name='tri-check' color={iconColor} />
              </ColumnsItem>
            )}
          </Columns>
        </ColumnsItem>
      </Columns>
    </TouchableOpacity>
  )
}

SelectOption.displayName = ComponentName.SelectOption

export default SelectOption
