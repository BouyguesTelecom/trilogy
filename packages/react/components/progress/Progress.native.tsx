import React, { useEffect, useRef } from 'react'
import { Animated, StyleSheet } from 'react-native'
import { ProgressProps } from './ProgressProps'
import { View } from '@/components/view'
import { getColorStyle, getStatusStyle, TrilogyColor } from '@/objects'
import { ComponentName } from '@/components/enumsComponentsName'

/**
 * Progress component
 * @param children {ReactNode} Use Children it only if stacked progress
 * @param value {number} Progress value
 * @param status {StatusState} Progress status variant (SUCCESS|INFO|WARNING|ERROR)
 * @param stacked {boolean} Stacked progress
 */
const Progress = ({ value, status, ...others }: ProgressProps): JSX.Element => {
  const animation = useRef(new Animated.Value(0)).current

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    typeof value === 'number' &&
      Animated.timing(animation, {
        toValue: value,
        duration: 1000,
        useNativeDriver: false,
      }).start()
  }, [animation, value])

  const height = 6
  const width = animation.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp',
  })

  const styles = StyleSheet.create({
    progress: {
      flexDirection: 'row',
      width: '100%',
      height: height,
      backgroundColor: getColorStyle(TrilogyColor.MAIN_FADE),
      borderRadius: 15,
    },
    value: {
      alignSelf: 'flex-start',
      height: height,
      backgroundColor: getStatusStyle(status).color,
      borderRadius: 15,
    },
    progressItemFirst: {
      borderTopStartRadius: 6,
      borderBottomLeftRadius: 6,
    },
    progressItemSecond: {
      borderTopEndRadius: 6,
      borderBottomRightRadius: 6,
    },
    test: {
      width: 20,
      backgroundColor: '#333',
      height: 6,
    },
    uniqueLegend: {
      textAlign: 'center',
      paddingTop: 5,
      fontWeight: '500',
    },
    extremLegend: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: 5,
      fontWeight: '500',
    },
  })

  return (
    <View style={styles.progress} {...others}>
      <Animated.View style={[styles.value, { width }]} />
    </View>
  )
}

Progress.displayName = ComponentName.Progress

export default Progress
