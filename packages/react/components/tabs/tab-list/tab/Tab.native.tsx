import { ComponentName } from '@/components/enumsComponentsName'
import { Icon } from '@/components/icon'
import { TabsContext } from '@/components/tabs/context'
import { TabProps } from '@/components/tabs/tab-list/tab/TabProps'
import { Text } from '@/components/text'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import React from 'react'
import { GestureResponderEvent, Linking, StyleSheet, TouchableOpacity, View } from 'react-native'

/**
 * Tabs Item Component
 * @param active {boolean} active tab item
 * @param children {ReactChild} React Child Element
 * @param onClick onClick Event
 * @param iconName {IconNameValues | IconName} add icon name
 * @param disabled {boolean} disable tab item
 * @param label {string} Tab content
 * @param to {string} Link
 * @param href {string} Link
 */
const Tab = ({ active, onClick, to, href, iconName, label, disabled, ...others }: TabProps) => {
  const { index, ...props } = others as any
  const { activeIndex, setActiveIndex, inverted } = React.useContext(TabsContext)
  const isActive = React.useMemo(() => activeIndex === index, [activeIndex, index])

  const handleClick = React.useCallback(
    (e: GestureResponderEvent) => {
      if (!disabled) {
        if (onClick) onClick(e)
        if (!to && !href) setActiveIndex(index)
        if (to || href) Linking.openURL(to || href || '')
      }
    },
    [disabled, onClick, index, setActiveIndex, to, href],
  )

  const styles = React.useMemo(
    () =>
      StyleSheet.create({
        tab: {
          paddingVertical: 4,
          paddingHorizontal: 12,
          borderBottomWidth: 2,
          borderBottomColor: isActive
            ? getColorStyle(disabled ? TrilogyColor.DISABLED : inverted ? TrilogyColor.BACKGROUND : TrilogyColor.MAIN)
            : 'transparent',
        },
        text: {
          textAlign: 'center',
          color: getColorStyle(
            disabled ? TrilogyColor.DISABLED : inverted ? TrilogyColor.BACKGROUND : TrilogyColor.MAIN,
          ),
        },
      }),
    [isActive, disabled, inverted],
  )

  React.useEffect(() => {
    if (active) setActiveIndex(index)
  }, [active, setActiveIndex, index])

  return (
    <TouchableOpacity activeOpacity={1} style={styles.tab} onPress={handleClick} {...props}>
      {iconName && (
        <View style={{ alignSelf: 'center' }}>
          <Icon
            color={disabled ? TrilogyColor.DISABLED : inverted ? TrilogyColor.BACKGROUND : TrilogyColor.MAIN}
            size='small'
            name={iconName}
          />
        </View>
      )}
      <Text style={styles.text}>{label && label}</Text>
    </TouchableOpacity>
  )
}

Tab.displayName = ComponentName.Tab
export default Tab