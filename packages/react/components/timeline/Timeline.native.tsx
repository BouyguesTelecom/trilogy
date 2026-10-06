import { Dispatch, SetStateAction, createContext, forwardRef, useState } from "react"
import { View } from 'react-native'
import { memoStyles } from '@/helpers/memoStyles'
import { TimelineNativeRef, TimelineProps } from "./TimelineProps"
import { ComponentName } from "@/components/enumsComponentsName"

interface IContext {
  height: number;
  setHeight: Dispatch<SetStateAction<number>>;
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
  const styles = memoStyles({
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
