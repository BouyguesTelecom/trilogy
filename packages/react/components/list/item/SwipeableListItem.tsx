import React, { ReactNode } from 'react'
import { Animated, StyleSheet, View } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'

interface RightActionsProps {
  dragX: Animated.AnimatedInterpolation<any>
}
interface IProps {
  children?: ReactNode
  actionElement?: ReactNode
}

/**
 * @param children {ReactNode}
 * @param actionElement {ReactNode}
 */
const SwipeableListItem = ({ children, actionElement }: IProps): JSX.Element => {
  const styles = StyleSheet.create({
    rightAction: {
      justifyContent: 'center',
      flex: 1,
      alignItems: 'flex-end',
      paddingLeft: 16,
      paddingRight: 4,
    },
  })

  const RightActions = ({ dragX }: RightActionsProps) => {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1.5, 0.9],
      extrapolate: 'clamp',
    })
    return (
      <View>
        <Animated.View style={[styles.rightAction, { transform: [{ scale }] }]}>
          {actionElement}
        </Animated.View>
      </View>
    )
  }

  return (
    <Swipeable
      renderRightActions={(dragX) => {
        return <RightActions dragX={dragX} />
      }}
    >
      {children}
    </Swipeable>
  )
}

export default SwipeableListItem
