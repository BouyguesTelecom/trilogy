import React, { useMemo } from 'react'
import { StyleSheet, View as ReactView, View } from 'react-native'
import { getColorStyle, TrilogyColor } from '@/objects'
import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconColor, IconName } from '@/components/icon'
import { Text, TextLevels } from '@/components/text'
import { ListItemProps } from './ListItemProps'

/**
 * ListItem Component
 * @param children {React.ReactNode}
 * @param customIcon {IconName | React.ReactNode } Icon name | children
 * @param status {ListIconStatus} Status success|error
 */
const ListItem = ({ children, status, iconName }: ListItemProps): JSX.Element => {
  const styles = StyleSheet.create({
    item: {
      marginBottom: 4,
      flexDirection: 'row',
      alignItems: 'center',
      position: 'relative',
    },
    text: {
      paddingHorizontal: iconName ? 16 : undefined,
    },
    title: {
      paddingHorizontal: iconName ? 16 : undefined,
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
      width: undefined,
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
    if (typeof children === 'object') return <View style={styles.text}>{children}</View>
    if (['string', 'number'].includes(typeof children)) {
      return (
        <Text style={styles.text} level={TextLevels.ONE}>
          {children}
        </Text>
      )
    }
  }, [children])

  const content = useMemo(() => {
    return (
      <View style={styles.container}>
        <ReactView style={styles.content}>
          {iconName && (
            <ReactView>
              <Icon size='small' name={iconName as IconName} color={status || IconColor.MAIN} />
            </ReactView>
          )}
          <ReactView>{getComponent}</ReactView>
        </ReactView>
      </View>
    )
  }, [iconName, status, getComponent])

  return content
}

ListItem.displayName = ComponentName.ListItem

export default ListItem
