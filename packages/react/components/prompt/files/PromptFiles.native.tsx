import { GapSize } from '@/components/columns'
import { ComponentName } from '@/components/enumsComponentsName'
import { useContext, useEffect, useMemo, forwardRef, Children } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { PromptContext } from '@/components/prompt/context'
import { PromptFilesNativeRef, PromptFilesProps } from '@/components/prompt/files/PromptFilesProps'

const PromptFiles = forwardRef<PromptFilesNativeRef, PromptFilesProps>(({ children }, ref) => {
  const { setFiles } = useContext(PromptContext)
  const childrenLength = useMemo(() => Children.count(children), [children])

  const styles = StyleSheet.create({
    scrollViewContainer: {
      flexDirection: 'row',
      gap: GapSize.EIGHT * 2,
      paddingHorizontal: childrenLength ? GapSize.EIGHT * 2 : undefined,
      paddingTop: childrenLength ? GapSize.EIGHT * 2 : undefined,
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
