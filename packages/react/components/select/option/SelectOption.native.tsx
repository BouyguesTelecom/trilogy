import { Column, Columns } from '@/components/columns'
import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconSize } from '@/components/icon'
import { Text } from '@/components/text'
import { TrilogyColor, getColorStyle } from '@/objects/facets/Color/index.native'
import { Alignable } from '@/objects/index.native'
import { TypographyBold } from '@/objects/Typography'
import * as React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { SelectOptionNativeRef, SelectOptionProps } from './SelectOptionProps'

/**
 * Select Option Component
 * @param value {string} Select option value
 * @param label {string} Label value
 * @param children {React.ReactNode}
 */
const SelectOption = React.forwardRef<SelectOptionNativeRef, SelectOptionProps>(
  ({ disabled, children, onClick, label, iconName, ...others }, ref): JSX.Element => {
    const { checked } = others as { checked: string }

    const styles = StyleSheet.create({
      container: {
        backgroundColor: getColorStyle(disabled ? TrilogyColor.DISABLED_FADE : 'transparent'),
        width: '100%',
        paddingVertical: checked && !iconName ? 8.5 : 10,
      },
    })

    const textColor = React.useMemo(() => {
      switch (true) {
        case disabled === true:
          return TrilogyColor.DISABLED
        default:
          return TrilogyColor.MAIN
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
      <TouchableOpacity ref={ref} style={[styles.container]} {...others} onPress={onClick}>
        <Columns verticalAlign={Alignable.ALIGNED_CENTER}>
          {iconName && (
            <Column size={1}>
              <Icon size={IconSize.SMALL} name={iconName} color={iconColor} />
            </Column>
          )}
          <Column size={columnLabelSize}>
            <Text
              typo={[checked && TypographyBold.TEXT_WEIGHT_SEMIBOLD]}
              {...{ style: { paddingLeft: 8, color: getColorStyle(textColor) } }}
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
  },
)

SelectOption.displayName = ComponentName.SelectOption

export default SelectOption
