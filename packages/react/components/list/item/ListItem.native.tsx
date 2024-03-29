import React, { useMemo } from 'react'
import { StyleSheet, View as ReactView } from 'react-native'
import { Icon, IconColor } from '../../icon'
import { Text, TextLevels } from '../../text'
import { View } from '../../view'
import { ListItemProps } from './ListItemProps'
import { ComponentName } from '../../enumsComponentsName'

const ListItem = ({ children, customIcon, status, title, description }: ListItemProps): JSX.Element => {
  const styles = StyleSheet.create({
    item: {
      marginBottom: 4,
      flexDirection: 'row',
      alignItems: 'center',
      position: 'relative',
    },
    puce: {
      fontWeight: 'bold',
      position: 'absolute',
      fontSize: 18,
      top: -3.5,
    },
    text: {
      marginLeft: customIcon ? 4 : 12,
    },
    icon: {
      marginLeft: -4,
    },
    title: {
      marginLeft: 12,
      fontWeight: 'bold',
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      position: 'relative',
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

  if (customIcon) {
    return (
      <View style={styles.item}>
        <ReactView style={styles.icon}>
          <Icon size='small' name={customIcon} color={status || IconColor.TERTIARY} />
        </ReactView>
        {getComponent}
      </View>
    )
  }
  if (title || description) {
    return (
      <View style={{ marginBottom: 12 }}>
        <View style={styles.titleContainer}>
          <Text style={styles.puce} level={TextLevels.ONE}>
            .
          </Text>
          <Text style={styles.title} level={TextLevels.ONE}>
            {title}
          </Text>
        </View>
        {getComponent}
      </View>
    )
  }
  return (
    <View style={styles.item}>
      <Text style={styles.puce}>.</Text>
      {getComponent}
    </View>
  )
}
ListItem.displayName = ComponentName.ListItem

export default ListItem
