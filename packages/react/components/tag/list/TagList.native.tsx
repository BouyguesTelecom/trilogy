import * as React from 'react'
import { TagListNativeRef, TagListProps } from '@/components/tag/list/TagListProps'
import { View } from 'react-native'
import { memoStyles } from '@/helpers/memoStyles'
import { ComponentName } from '@/components/enumsComponentsName'

/**
 * Tag List Component
 * @param children {ReactNode} Children Tag List
 * @param id {string} Custom id attribute
 */
const TagList = React.forwardRef<TagListNativeRef, TagListProps>(({ children, ...others }, ref): JSX.Element => {
  const styles = memoStyles({
    tagList: {
      width: '100%',
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 4,
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
