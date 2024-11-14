import * as React from 'react'
import { StyleSheet, View } from 'react-native'

import { ComponentName } from '@/components/enumsComponentsName'
import { TagListProps } from '@/components/tag/list/TagListProps'

/**
 * Tag List Component
 * @param children {ReactNode} Children Tag List
 * @param centered {boolean} Center tags
 * @param gapless {boolean} Delete margins between tags
 */
const TagList = ({ children, centered, gapless, ...others }: TagListProps, ref: React.Ref<View>): JSX.Element => {
  const styles = StyleSheet.create({
    tagList: {
      width: '100%',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    centered: {
      alignSelf: 'center',
    },
    gapless: {
      margin: 0,
      padding: 0,
    },
  })

  return (
    <View ref={ref} style={[styles.tagList, centered && styles.centered, gapless && styles.gapless]} {...others}>
      {children}
    </View>
  )
}

TagList.displayName = ComponentName.TagList

export default React.forwardRef(TagList)
