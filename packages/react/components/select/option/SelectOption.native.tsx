import { Column, Columns } from '@/components/columns'
import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconSize } from '@/components/icon'
import { Text } from '@/components/text'
import { Alignable } from '@/objects/facets/Alignable'
import { TypographyBold } from '@/objects/Typography/TypographyBold'
import { TrilogyColor, getColorStyle } from '@/objects/facets/Color'
import { forwardRef, Ref, useMemo } from 'react'
import { useAnimatedPressable } from '@/hooks/useAnimatedPressable'
import { View } from 'react-native'
import { memoStyles } from '@/helpers/memoStyles'
import { SelectOptionNativeRef, SelectOptionProps } from '@/components/select/option/SelectOptionProps'
import { AnimatedPressable } from '@/components/animatedPressable/AinmatedPressable.native'

/**
 * Select Option Component
 * @param value {string} Select option value
 * @param label {string} Label value
 * @param children {ReactNode}
 */
const SelectOption = forwardRef<SelectOptionNativeRef, SelectOptionProps>(
  ({ disabled, children, onClick, label, iconName, ...others }, ref): JSX.Element => {
    const { checked } = others as { checked: string }
    const { animatedStyle, handleAnimate } = useAnimatedPressable()

    const styles = memoStyles({
      container: {
        backgroundColor: getColorStyle(disabled ? TrilogyColor.DISABLED_FADE : 'transparent'),
        width: '100%',
        paddingVertical: checked && !iconName ? 8.5 : 10,
      },
    })

    const textColor = useMemo(() => {
      switch (true) {
        case disabled === true:
          return TrilogyColor.DISABLED
        default:
          return TrilogyColor.MAIN
      }
    }, [disabled])

    const iconColor = useMemo(() => {
      switch (true) {
        case disabled === true:
          return TrilogyColor.DISABLED
        default:
          return TrilogyColor.MAIN
      }
    }, [disabled])

    const columnLabelSize = useMemo(() => {
      return iconName ? (checked && 10) || 11 : (checked && 11) || 12
    }, [iconName, checked])

    return (
      <AnimatedPressable
        ref={ref as Ref<View>}
        style={[styles.container, animatedStyle]}
        {...others}
        onPress={(e?: unknown) => {
          handleAnimate()
          if (onClick) {
            onClick(e)
          }
        }}
      >
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
      </AnimatedPressable>
    )
  },
)

SelectOption.displayName = ComponentName.SelectOption

export default SelectOption
