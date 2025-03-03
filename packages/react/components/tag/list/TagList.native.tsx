import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { TagListNativeRef, TagListProps } from './TagListProps'
import { ComponentName } from '@/components/enumsComponentsName'

/**
 * Tag List Component
 * @param children {ReactNode} Children Tag List
 * @param centered {boolean} Center tags
 */
const TagList = React.forwardRef<TagListNativeRef, TagListProps>(({ children, ...others }, ref): JSX.Element => {
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
    <View ref={ref} style={[styles.tagList]} {...others}>
      {children}
    </View>
  )
})

TagList.displayName = ComponentName.TagList

export default TagList
