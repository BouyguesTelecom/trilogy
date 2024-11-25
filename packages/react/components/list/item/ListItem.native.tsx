import React, { useMemo } from 'react'
import { Animated, StyleSheet, View } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'

import { Divider } from '@/components/divider'
import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconColor, IconName } from '@/components/icon'
import { AnimatedInterpolationProps, ListItemProps } from '@/components/list/item/ListItemProps'
import { Text, TextLevels } from '@/components/text'
import { Title, TitleLevels } from '@/components/title'
import { TrilogyColor, getColorStyle } from '@/objects/facets/Color'

/**
 * ListItem Component
 * @param children {React.ReactNode}
 * @param customIcon {IconName | React.ReactNode } Icon name | children
 * @param status {ListIconStatus} Status success|error
 * @param title {string} List item title
 * @param description {string} List item description
 * @param action {React.ReactNode} children
 * @param divider {boolean} Display divider
 * @param deletable {boolean}
 */
const ListItem = React.forwardRef(
  (
    { children, customIcon, status, title, description, divider, action, deletable }: ListItemProps,
    ref: React.Ref<View>,
  ): JSX.Element => {
    const styles = StyleSheet.create({
      item: {
        marginBottom: 4,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
      },
      text: {
        paddingHorizontal: customIcon ? 16 : undefined,
      },
      title: {
        paddingHorizontal: customIcon ? 16 : undefined,
        marginBottom: children ? 8 : undefined,
      },
      container: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        paddingVertical: 8,
        backgroundColor: getColorStyle(TrilogyColor.BACKGROUND),
      },
      content: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        paddingVertical: 8,
        width: action ? '85%' : undefined,
      },
      badge: {
        alignSelf: 'center',
        width: 10,
        height: 10,
        marginRight: 8,
        backgroundColor: getColorStyle(TrilogyColor.ERROR),
        borderRadius: 30,
      },
      swipeInfo: {
        backgroundColor: getColorStyle(TrilogyColor.NEUTRAL_FADE),
        width: 2,
        height: 20,
        borderRadius: 6,
      },
      rightAction: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'flex-end',
        paddingLeft: 16,
        paddingRight: 4,
      },
    })

    const getComponent = useMemo(() => {
      if (typeof children === 'object') {
        return <View style={styles.text}>{children}</View>
      }
      if (typeof children === 'undefined' && description) {
        return (
          <Text style={styles.text} level={TextLevels.ONE}>
            {description}
          </Text>
        )
      }
      if (['string', 'number'].includes(typeof children)) {
        return (
          <Text style={styles.text} level={TextLevels.ONE}>
            {children}
          </Text>
        )
      }
      return <></>
    }, [children, description])

    const content = useMemo(() => {
      return (
        <View style={styles.container} ref={ref}>
          <View style={styles.content}>
            {customIcon && typeof customIcon === 'string' && (
              <View>
                <Icon size='small' name={customIcon as IconName} color={status || IconColor.MAIN} />
              </View>
            )}

            {customIcon && typeof customIcon !== 'string' && <View>{customIcon}</View>}

            <View>
              {title && (
                <Title style={styles.title} level={TitleLevels.SIX}>
                  {title}
                </Title>
              )}
              {getComponent}
            </View>
          </View>

          {action && deletable && (
            <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
              <View style={styles.badge} />
              <View style={styles.swipeInfo} />
            </View>
          )}
          {action && !deletable && (
            <View style={{ marginLeft: 'auto' }}>
              <View>{action}</View>
            </View>
          )}
        </View>
      )
    }, [customIcon, status, title, getComponent, action, deletable])

    if (action && deletable) {
      const RightActions = (_: AnimatedInterpolationProps, dragX: AnimatedInterpolationProps) => {
        const scale = dragX.interpolate({
          inputRange: [-100, 0],
          outputRange: [1.5, 0.9],
          extrapolate: 'clamp',
        })

        return (
          <View>
            <Animated.View style={[styles.rightAction, { transform: [{ scale }] }]}>{action}</Animated.View>
          </View>
        )
      }

      return (
        <>
          <Swipeable renderRightActions={RightActions}>{content}</Swipeable>
          {divider && <Divider />}
        </>
      )
    }

    return (
      <>
        {content}
        {divider && <Divider />}
      </>
    )
  },
)

ListItem.displayName = ComponentName.ListItem
export default ListItem
