import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { TagListNativeRef, TagListProps } from './TagListProps'
import { ComponentName } from '@/components/enumsComponentsName'

/**
 * Tag List Component
 * @param children {ReactNode} Children Tag List
 * @param id {string} Custom id attribute
 */
const TagList = React.forwardRef<TagListNativeRef, TagListProps>(({ children, ...others }, ref): JSX.Element => {
  const styles = StyleSheet.create({
    tagList: {
      width: '100%',
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 4
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
