import { ComponentName } from '@/components/enumsComponentsName'
import { Spacer, SpacerSize } from '@/components/spacer'
import { Text, TextLevels } from '@/components/text'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import { useContext, useEffect, useState, forwardRef, Ref } from 'react'
import { Theme } from '@/constants/theme'
import { GestureResponderEvent, View } from 'react-native'
import { memoStyles } from '@/helpers/memoStyles'
import { Icon, IconColor, IconName, IconSize } from '@/components/icon'
import { ChipsNativeRef, ChipsProps } from '@/components/chips/ChipsProps'
import { ChipsContext } from '@/components/chips/list/ChipsList.native'
import { useAnimatedPressable } from '@/hooks/useAnimatedPressable'
import { AnimatedPressable } from '@/components/animatedPressable/AinmatedPressable.native'

/**
 * Chips Component - has to be in a ChipsList component
 * @param children {string} Chips content
 * @param id {string} Chips id
 * @param onClick {Function} onClick Event for all Chips
 * @param active {boolean} active Render Chips Active
 * @param disabled {boolean} Disabled chips
 * @param testId {string} Test Id for Test Integration
 */
const Chips = forwardRef<ChipsNativeRef, ChipsProps>(
  ({ children, onClick, disabled, active, testId, ...others }, ref): JSX.Element => {
    const [activeItem, setActiveItem] = useState<boolean>(active || false)
    const chipsContext = useContext(ChipsContext)
    const { animatedStyle, handleAnimate } = useAnimatedPressable()

    useEffect(() => {
      setActiveItem(active || false)
    }, [active])

    const styles = memoStyles({
      chips: {
        backgroundColor:
          (disabled && getColorStyle(TrilogyColor.NEUTRAL_FADE)) ||
          (activeItem && getColorStyle(TrilogyColor.MAIN)) ||
          getColorStyle(TrilogyColor.BACKGROUND),
        borderRadius: Theme.radius.full,
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 6,
        paddingBottom: 5,
        margin: 6,
        borderColor: active ? getColorStyle(TrilogyColor.MAIN) : getColorStyle(TrilogyColor.STROKE),
        borderWidth: 1,
        flexDirection: 'row',
      },
      text: {
        alignSelf: 'center',
        color:
          (disabled && getColorStyle(TrilogyColor.DISABLED)) ||
          (active && getColorStyle(TrilogyColor.BACKGROUND)) ||
          getColorStyle(TrilogyColor.MAIN),
        paddingTop: 1,
      },
    })

    return (
      <AnimatedPressable
        testID={testId}
        ref={ref as Ref<View>}
        disabled={disabled}
        style={[styles.chips, animatedStyle]}
        onPress={(e?: GestureResponderEvent) => {
          handleAnimate()
          setActiveItem(active || false)
          if (onClick) {
            onClick(e)
          }
        }}
        {...others}
      >
        {chipsContext.isMultiple && active && (
          <>
            <Icon size={IconSize.SMALLER} color={IconColor.WHITE} name={IconName.CHECK} />
            <Spacer horizontal size={SpacerSize.ONE} />
          </>
        )}
        <Text level={TextLevels.TWO} style={styles.text}>
          {children}
        </Text>
      </AnimatedPressable>
    )
  },
)

Chips.displayName = ComponentName.Chips
export default Chips
