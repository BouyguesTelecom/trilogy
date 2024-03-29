import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Text } from '../text'
import { TileProps } from './TileProps'
import { ComponentName } from '../enumsComponentsName'

/**
 * Tile Component
 * @param children {ReactNode} Tile Children
 * @param onClick {Function} onClick Event
 */
const Tile = ({ children, onClick, ...others }: TileProps): JSX.Element => {
  const styles = StyleSheet.create({
    tile: {
      // alignSelf: 'baseline',
    },
  })
  const tileView = (
    <View style={styles.tile} {...others}>
      {Array.isArray(children) ? (
        children.map((child: React.ReactNode, index: number) =>
          (child && typeof child.valueOf() === 'string' ? <Text key={index}>{String(child)}</Text> : child),
        )
      ) : children && typeof children.valueOf() === 'string' ? (
        <Text>{String(children)}</Text>
      ) : (
        children
      )}
    </View>
  )

  return onClick ? (
    <View>
      <TouchableOpacity onPress={onClick} activeOpacity={0.85}>
        {tileView}
      </TouchableOpacity>
    </View>
  ) : (
    tileView
  )
}

Tile.displayName = ComponentName.Tile

export default Tile
