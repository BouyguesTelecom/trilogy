import {Columns, ColumnsItem} from '@/components/columns'
import {ComponentName} from '@/components/enumsComponentsName'
import {Icon, IconSize} from '@/components/icon'
import {Text} from '@/components/text'
import {TypographyBold} from '@/objects/Typography'
import {getColorStyle, TrilogyColor} from '@/objects/facets/Color'
import * as React from 'react'
import {Dimensions, StyleSheet, TouchableOpacity} from 'react-native'
import {SelectOptionProps} from './SelectOptionProps'
import {Alignable} from "@/objects";

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
          width: Dimensions.get('screen').width-40,
          paddingHorizontal: 16,
          paddingVertical: 8
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
   return iconName ? checked && 10 || 11 :  checked && 11 || 12
  }, [iconName, checked])

  return (
    <TouchableOpacity style={[styles.container]} {...others} onPress={onClick}>
          <Columns gap={0} verticalAlign={Alignable.ALIGNED_CENTER}>
            {iconName && (
              <ColumnsItem size={1} >
                <Icon size={IconSize.SMALL} name={iconName} color={iconColor} />
              </ColumnsItem>
            )}
            <ColumnsItem size={columnLabelSize} >
              <Text
                typo={[checked && TypographyBold.TEXT_WEIGHT_SEMIBOLD]}
                {...{ style: { paddingLeft: 8, color: textColor, } }}
              >
                {children || label}
              </Text>
            </ColumnsItem>
            {checked && (
              <ColumnsItem size={1} >
                <Icon size={IconSize.SMALL} name='tri-check' color={iconColor} />
              </ColumnsItem>
            )}
          </Columns>

    </TouchableOpacity>
  )
}

SelectOption.displayName = ComponentName.SelectOption

export default SelectOption
