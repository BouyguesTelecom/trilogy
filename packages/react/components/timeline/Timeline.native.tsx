import * as React from "react"
import { StyleSheet, View } from "react-native"
import { TimelineNativeRef, TimelineProps } from "./TimelineProps"
import { ComponentName } from "@/components/enumsComponentsName"

interface IContext {
  height: number;
  setHeight: React.Dispatch<React.SetStateAction<number>>;
}

export const TimelineHeightContext = React.createContext<IContext>({
  height: 0,
  setHeight: () => undefined,
})

/**
 * Timeline Native Component
 * @param children {ReactNode} Text child

 */
const Timeline = React.forwardRef<TimelineNativeRef, TimelineProps>(({ children }, ref): JSX.Element => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: "column",
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
      <View ref={ref} style={styles.container}>{children}</View>
    </TimelineHeightContext.Provider>
  )
})

Timeline.displayName = ComponentName.Timeline

export default Timeline
