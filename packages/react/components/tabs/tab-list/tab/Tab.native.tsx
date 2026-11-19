import { ComponentName } from '@/components/enumsComponentsName'
import { Icon } from '@/components/icon'
import { Sticker } from '@/components/sticker'
import { TabsContext } from '@/components/tabs/context'
import { TabNativeRef, TabProps } from '@/components/tabs/tab-list/tab/TabProps'
import { Text } from '@/components/text'
import { TypographyAlign } from '@/objects/Typography/TypographyAlign'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import { forwardRef, useCallback, useContext, useEffect, useMemo } from 'react'
import { GestureResponderEvent, Linking, TouchableOpacity, View } from 'react-native'
import { memoStyles } from '@/helpers/memoStyles'

/**
 * Tabs Item Component
 * @param active {boolean} active tab item
 * @param children {ReactChild} React Child Element
 * @param onClick onClick Event
 * @param iconName {IconNameValues | IconName} add icon name
 * @param disabled {boolean} disable tab item
 * @param label {string} Tab content
 * @param sticker {string | TabSticker} Sticker label, or { label, iconName, variant }, displayed above the tab
 * @param to {string} Link
 * @param href {string} Link
 */
const Tab = forwardRef<TabNativeRef, TabProps>(
  ({ active, onClick, to, href, iconName, label, sticker, disabled, ...others }, ref) => {
    const { index, ...props } = others as any
    const { activeIndex, setActiveIndex, inverted, fullwidth } = useContext(TabsContext)
    const isActive = useMemo(() => activeIndex === index, [activeIndex, index])
    const stickerProps = typeof sticker === 'string' ? { label: sticker } : sticker

    const handleClick = useCallback(
      (e: GestureResponderEvent) => {
        if (!disabled) {
          if (onClick) onClick(e)
          if (!to && !href) setActiveIndex(index)
          if (to || href) Linking.openURL(to || href || '')
        }
      },
      [disabled, onClick, index, setActiveIndex, to, href],
    )

    const styles = memoStyles({
      tab: {
        flex: fullwidth ? 1 : undefined,
        flexBasis: fullwidth ? 0 : undefined,
        minWidth: fullwidth ? 0 : undefined,
        paddingTop: 4,
        // Keep content still when the active border grows from 1px to 2px
        paddingBottom: isActive ? 3 : 4,
        paddingHorizontal: 12,
        justifyContent: 'flex-end',
        borderBottomWidth: isActive ? 2 : 1,
        borderBottomColor: getColorStyle(
          isActive && disabled
            ? TrilogyColor.DISABLED
            : isActive && inverted
            ? TrilogyColor.BACKGROUND
            : isActive
            ? TrilogyColor.MAIN
            : TrilogyColor.STROKE,
        ),
      },
      text: {
        textAlign: 'center',
        alignSelf: 'center',
        color: getColorStyle(disabled ? TrilogyColor.DISABLED : inverted ? TrilogyColor.BACKGROUND : TrilogyColor.MAIN),
      },
    })

    useEffect(() => {
      if (active) setActiveIndex(index)
    }, [active, setActiveIndex, index])

    return (
      <TouchableOpacity ref={ref} activeOpacity={1} style={styles.tab} onPress={handleClick} {...props}>
        {stickerProps && (
          <View style={{ alignSelf: 'center', marginBottom: 12 }}>
            <Sticker small label={stickerProps.label} iconName={stickerProps.iconName} variant={stickerProps.variant} />
          </View>
        )}
        {iconName && (
          <View style={{ alignSelf: 'center' }}>
            <Icon
              color={disabled ? TrilogyColor.DISABLED : inverted ? TrilogyColor.BACKGROUND : TrilogyColor.MAIN}
              size='small'
              name={iconName}
            />
          </View>
        )}
        <Text
          style={styles.text}
          typo={fullwidth ? [TypographyAlign.TEXT_CENTERED] : undefined}
          numberOfLines={fullwidth ? 1 : undefined}
        >
          {label && label}
        </Text>
      </TouchableOpacity>
    )
  },
)

Tab.displayName = ComponentName.Tab
export default Tab
