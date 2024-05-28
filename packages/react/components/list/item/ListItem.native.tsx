import React, { useMemo } from 'react'
import { Animated, View as ReactView, StyleSheet, View } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { TrilogyColor, getColorStyle } from '../../../objects'
import { Divider } from '../../divider'
import { ComponentName } from '../../enumsComponentsName'
import { Icon, IconColor, IconName } from '../../icon'
import { Text, TextLevels } from '../../text'
import { Title, TitleLevels } from '../../title'
import { AnimatedInterpolationProps, ListItemProps } from './ListItemProps'

const ListItem = ({
  children,
  customIcon,
  status,
  title,
  description,
  divider,
  action,
  deletable,
}: ListItemProps): JSX.Element => {
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
      backgroundColor: getColorStyle(TrilogyColor.NEUTRAL_LIGHT),
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
    if (typeof children === 'object') return <View style={styles.text}>{children}</View>
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
  }, [children, description])

  const content = useMemo(() => {
    return (
      <View style={styles.container}>
        <ReactView style={styles.content}>
          {customIcon && typeof customIcon === 'string' && (
            <ReactView>
              <Icon size='small' name={customIcon as IconName} color={status || IconColor.MAIN} />
            </ReactView>
          )}

          {customIcon && typeof customIcon !== 'string' && <ReactView>{customIcon}</ReactView>}

          <ReactView>
            {title && (
              <Title style={styles.title} level={TitleLevels.SIX}>
                {title}
              </Title>
            )}
            {getComponent}
          </ReactView>
        </ReactView>

        {action && deletable && (
          <ReactView style={{ flexDirection: 'row', marginLeft: 'auto' }}>
            <View style={styles.badge} />
            <View style={styles.swipeInfo} />
          </ReactView>
        )}
        {action && !deletable && (
          <ReactView style={{ marginLeft: 'auto' }}>
            <View>{action}</View>
          </ReactView>
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
          <Animated.View style={[styles.rightAction, { transform: [{ scale }] }]}>
            {action}
          </Animated.View>
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
}

ListItem.displayName = ComponentName.ListItem

export default ListItem
