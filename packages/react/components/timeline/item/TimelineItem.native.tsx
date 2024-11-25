import React, { createContext, useContext } from 'react'
import { StyleSheet, View } from 'react-native'

import { ComponentName } from '@/components/enumsComponentsName'
import { TimelineHeightContext } from '@/components/timeline/Timeline.native'
import { TimelineItemProps } from '@/components/timeline/item/TimelineItemProps'

export const TimelineItemContext = createContext({ done: false, active: false, undone: false, cancel: false })

/**
 * Timeline Item Component
 * @param children {ReactNode}
 * @param done {boolean} Done Timeline Item
 * @param active {boolean} Active Timeline Item
 * @param undone {boolean} Undone Timeline Item
 * @param cancel {boolean} Cancel Timeline Item
 */
const TimelineItem = React.forwardRef(
  ({ children, done, active, undone, cancel }: TimelineItemProps, ref: React.Ref<View>): JSX.Element => {
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
          ref={ref}
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
  },
)

TimelineItem.displayName = ComponentName.TimelineItem
export default TimelineItem
