import * as React from "react"
import { StyleSheet, View } from "react-native"
import { TimelineProps } from "./TimelineProps"
import { ComponentName } from "../enumsComponentsName"

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
const Timeline = ({ children }: TimelineProps): JSX.Element => {
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
      <View style={styles.container}>{children}</View>
    </TimelineHeightContext.Provider>
  )
}

Timeline.displayName = ComponentName.Timeline

export default Timeline
