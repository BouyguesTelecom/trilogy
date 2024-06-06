import * as React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { TrilogyColor, getColorStyle } from '../../../objects/facets/Color'
import { Columns, ColumnsItem } from '../../columns'
import { ComponentName } from '../../enumsComponentsName'
import { Icon, IconSize } from '../../icon'
import { Text } from '../../text'
import { SelectOptionProps } from './SelectOptionProps'

/**
 * Select Option Component
 * @param value {string} Select option value
 * @param label {string} Label value
 * @param children {React.ReactNode}
 */
const SelectOption = ({ value, label, children, iconName, disabled, ...others }: SelectOptionProps): JSX.Element => {
  const styles = React.useMemo(
    () =>
      StyleSheet.create({
        container: {
          backgroundColor: (disabled && getColorStyle(TrilogyColor.DISABLED, 1)) || undefined,
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

  return (
    <TouchableOpacity style={[styles.container]} {...others}>
      <Columns {...{ style: { paddingVertical: 16, paddingHorizontal: 8 } }}>
        <ColumnsItem>
          <Columns>
            {iconName && (
              <ColumnsItem size={1} verticalCenter>
                <Icon size={IconSize.SMALL} name={iconName} color={iconColor} />
              </ColumnsItem>
            )}
            <ColumnsItem verticalCenter>
              <Text {...{ style: { paddingLeft: 8, color: textColor } }}>{children || label}</Text>
            </ColumnsItem>
          </Columns>
        </ColumnsItem>
      </Columns>
    </TouchableOpacity>
  )
}

SelectOption.displayName = ComponentName.SelectOption

export default SelectOption
