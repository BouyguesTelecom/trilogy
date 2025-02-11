import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconName } from '@/components/icon'
import { ListContext } from '@/components/list/context'
import { ListItemProps } from '@/components/list/item/ListItemProps'
import { Text, TextLevels } from '@/components/text'
import { getColorStyle, TrilogyColor, TypographyBold } from '@/objects'
import React, { useContext, useEffect, useId, useMemo } from 'react'
import { StyleSheet, View } from 'react-native'

/**
 * ListItem Component
 * @param children {React.ReactNode}
 * @param customIcon {IconName | React.ReactNode } Icon name | children
 * @param status {ListIconStatus} Status success|error
 */
const ListItem = ({ children, status, iconName }: ListItemProps): JSX.Element => {
  const id = useId()
  const { ordered, chilIndexes, setChildIndexes, divider } = useContext(ListContext)
  const isLastItem = chilIndexes[chilIndexes.length - 1] === id

  useEffect(() => {
    setChildIndexes((prev) => [...prev, id])
  }, [id])

  const styles = StyleSheet.create({
    text: {
      paddingHorizontal: 16,
    },
    content: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: iconName ? 8 : 2,
      borderBottomWidth: divider && !isLastItem ? 1 : 0,
      borderBottomColor: getColorStyle(TrilogyColor.NEUTRAL),
    },
    disc: {
      alignSelf: 'center',
      width: 4,
      height: 4,
      backgroundColor: getColorStyle(TrilogyColor.MAIN),
      borderRadius: 4,
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

  return (
    <View style={[styles.content]}>
      {ordered && !iconName && (
        <View>
          <Text typo={[TypographyBold.TEXT_WEIGHT_SEMIBOLD]}>{chilIndexes.indexOf(id) + 1}.</Text>
        </View>
      )}
      {!iconName && !ordered && (
        <View>
          <View style={styles.disc} />
        </View>
      )}
      {iconName && (
        <View>
          <Icon size='small' name={iconName as IconName} color={status} />
        </View>
      )}
      <View>{getComponent}</View>
    </View>
  )
}

ListItem.displayName = ComponentName.ListItem

export default ListItem
