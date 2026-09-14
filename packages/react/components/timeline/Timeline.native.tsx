import { createContext, forwardRef, useState } from 'react'
import { StyleSheet, View } from "react-native"
import { TimelineNativeRef, TimelineProps } from "@/components/timeline/TimelineProps"
import { ComponentName } from "@/components/enumsComponentsName"

interface IContext {
  height: number;
  setHeight: React.Dispatch<React.SetStateAction<number>>;
}

export const TimelineHeightContext = createContext<IContext>({
  height: 0,
  setHeight: () => undefined,
})

/**
 * Timeline Native Component
 * @param children {ReactNode} Text child

 */
const Timeline = forwardRef<TimelineNativeRef, TimelineProps>(({ children }, ref): JSX.Element => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: "column",
    },
  })

  const [height, setHeight] = useState(0)

  return (
    <TimelineHeightContext.Provider
      value={{
        height,
        setHeight,
      }}
    >
      <View ref={ref} style={styles.container}>{children}</View>
    </TimelineHeightContext.Provider>
  )
})

Timeline.displayName = ComponentName.Timeline

export default Timeline
