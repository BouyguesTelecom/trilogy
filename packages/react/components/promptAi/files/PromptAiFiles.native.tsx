import { GapSize } from '@/components/columns'
import { ComponentName } from '@/components/enumsComponentsName'
import React, { useContext, useEffect, useMemo } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { PromptAiContext } from '../context'
import { PromptAiFilesNativeRef, PromptAiFilesProps } from './PromptAiFilesProps'

const PromptAiFiles = React.forwardRef<PromptAiFilesNativeRef, PromptAiFilesProps>(({ children }, ref) => {
  const { setFiles } = useContext(PromptAiContext)
  const childrenLength = useMemo(() => React.Children.count(children), [children])

  const styles = StyleSheet.create({
    scrollViewContainer: {
      flexDirection: 'row',
      gap: GapSize.EIGHT,
      padding: childrenLength ? GapSize.EIGHT : undefined,
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

PromptAiFiles.displayName = ComponentName.PromptAiFiles
export default PromptAiFiles
