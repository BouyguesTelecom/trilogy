import React from 'react'
import { StyleSheet, View } from 'react-native'

import { ComponentName } from '@/components/enumsComponentsName'
import { TimelineProps } from '@/components/timeline/TimelineProps'

interface IContext {
  height: number
  setHeight: React.Dispatch<React.SetStateAction<number>>
}

export const TimelineHeightContext = React.createContext<IContext>({
  height: 0,
  setHeight: () => undefined,
})

/**
 * Timeline Native Component
 * @param children {ReactNode} Text child

 */
const Timeline = ({ children }: TimelineProps, ref: React.Ref<View>): JSX.Element => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
    },
  })

  const [height, setHeight] = React.useState(0)

  return (
    <TimelineHeightContext.Provider
      value={{
        height,
        setHeight,
      }}
    >
      <View style={styles.container} ref={ref}>
        {children}
      </View>
    </TimelineHeightContext.Provider>
  )
}

Timeline.displayName = ComponentName.Timeline

export default React.forwardRef(Timeline)
