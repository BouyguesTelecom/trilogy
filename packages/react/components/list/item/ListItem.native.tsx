import React, { useMemo } from 'react'
import { View as ReactView, StyleSheet } from 'react-native'
import { TrilogyColor, getColorStyle } from '../../../objects'
import { Divider } from '../../divider'
import { ComponentName } from '../../enumsComponentsName'
import { Icon, IconColor, IconName } from '../../icon'
import { Text, TextLevels } from '../../text'
import { Title, TitleLevels } from '../../title'
import { View } from '../../view'
import { ListItemProps } from './ListItemProps'
import SwipeableListItem from './SwipeableListItem'

const ListItem = ({
  children,
  customIcon,
  status,
  title,
  description,
  divider,
  action,
  inputAction,
}: ListItemProps): JSX.Element => {
  const styles = StyleSheet.create({
    item: {
      marginBottom: 4,
      flexDirection: 'row',
      alignItems: 'center',
      position: 'relative',
    },
    text: {
      marginLeft: customIcon ? 16 : 0,
    },
    title: {
      marginLeft: customIcon ? 16 : 0,
      marginBottom: 8,
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      position: 'relative',
      paddingVertical: 8,
      backgroundColor: getColorStyle(TrilogyColor.BACKGROUND),
    },
    badge: {
      alignSelf: 'center',
      width: 10,
      height: 10,
      marginRight: 8,
      marginLeft: 8,
      backgroundColor: getColorStyle(TrilogyColor.ERROR),
      borderRadius: 30,
    },
    swipeInfo: {
      backgroundColor: getColorStyle(TrilogyColor.NEUTRAL_LIGHT),
      width: 2,
      height: 20,
      borderRadius: 6,
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
      <View style={styles.titleContainer}>
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
        {action && (
          <ReactView style={{ flexDirection: 'row', marginLeft: 'auto' }}>
            <View style={styles.badge} />
            <View style={styles.swipeInfo} />
          </ReactView>
        )}
        {inputAction && (
          <ReactView style={{ flexDirection: 'row', marginLeft: 'auto' }}>{inputAction}</ReactView>
        )}
      </View>
    )
  }, [customIcon, status, title, getComponent, action])

  if (action) {
    return (
      <>
        <SwipeableListItem actionElement={action}>{content}</SwipeableListItem>
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
