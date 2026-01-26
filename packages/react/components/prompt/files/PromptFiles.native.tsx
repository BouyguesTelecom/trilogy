import { GapSize } from '@/components/columns'
import { ComponentName } from '@/components/enumsComponentsName'
import React, { useContext, useEffect, useMemo } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { PromptContext } from '../context'
import { PromptFilesNativeRef, PromptFilesProps } from './PromptFilesProps'

const PromptFiles = React.forwardRef<PromptFilesNativeRef, PromptFilesProps>(({ children }, ref) => {
  const { setFiles } = useContext(PromptContext)
  const childrenLength = useMemo(() => React.Children.count(children), [children])

  const styles = StyleSheet.create({
    scrollViewContainer: {
      flexDirection: 'row',
      gap: GapSize.EIGHT * 2,
      padding: childrenLength ? GapSize.EIGHT * 2 : undefined,
    },
  })

  useEffect(() => {
    setFiles(childrenLength)
  }, [childrenLength])

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} ref={ref}>
      <View style={styles.scrollViewContainer}>{children}</View>
    </ScrollView>
  )
})

PromptFiles.displayName = ComponentName.PromptFiles
export default PromptFiles
