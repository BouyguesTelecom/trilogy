import React, { createContext, useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { TimelineHeightContext } from '@/components/timeline/Timeline.native'
import { TimelineItemProps } from './TimelineItemProps'
import { ComponentName } from '@/components/enumsComponentsName'

/**
 * TimelineItem Native Component
 * @param children {ReactNode} Text child
 */

export const TimelineItemContext = createContext({ done: false, active: false, undone: false, cancel: false })

const TimelineItem = ({ children, done, active, undone, cancel }: TimelineItemProps): JSX.Element => {
  const { height, setHeight } = useContext(TimelineHeightContext)

  const styles = StyleSheet.create({
    item: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      height: height != 0 ? height - 8 : undefined,
      marginBottom: 8,
    },
  })

  return (
    <TimelineItemContext.Provider
      value={{ done: done || false, active: active || false, undone: undone || false, cancel: cancel || false }}
    >
      <View
        onLayout={(event) => {
          const { height: heightView } = event.nativeEvent.layout
          setHeight((prev) => {
            if (prev < heightView) return heightView
            return prev
          })
        }}
        style={styles.item}
      >
        {children}
      </View>
    </TimelineItemContext.Provider>
  )
}

TimelineItem.displayName = ComponentName.TimelineItem

export default TimelineItem
