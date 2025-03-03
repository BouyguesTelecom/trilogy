import { ComponentName } from '@/components/enumsComponentsName'
import { RadioTilesNativeRef, RadioTilesProps } from '@/components/radio/tiles/RadioTilesProps'
import { SpacerSize } from '@/components/spacer'
import { Alignable } from '@/objects/facets/Alignable'
import React from 'react'
import { StyleSheet, View } from 'react-native'

/**
 * Columns Item Component - Columns Child
 * @param id {string}
 * @param children {ReactNode}
 * @param align { Alignable | AlignableValues} align content
 * @param verticalAlign { Alignable | AlignableValues} align vertical content
 */
const RadioTiles = React.forwardRef<RadioTilesNativeRef, RadioTilesProps>(({ id, children, align, verticalAlign, ...others }, ref): JSX.Element => {
  const styles = StyleSheet.create({
    container: {
      alignItems:
        (verticalAlign === Alignable.ALIGNED_CENTER && 'center') ||
        (verticalAlign === Alignable.ALIGNED_START && 'flex-start') ||
        (verticalAlign === Alignable.ALIGNED_END && 'flex-end') ||
        undefined,
      justifyContent:
        (align === Alignable.ALIGNED_CENTER && 'center') ||
        (align === Alignable.ALIGNED_START && 'flex-start') ||
        (align === Alignable.ALIGNED_END && 'flex-end') ||
        undefined,
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: SpacerSize.TWO,
    },
  })

  return (
    <View ref={ref} id={id} style={[styles.container]} {...others}>
      {children}
    </View>
  )
})

RadioTiles.displayName = ComponentName.RadioTiles

export default RadioTiles
