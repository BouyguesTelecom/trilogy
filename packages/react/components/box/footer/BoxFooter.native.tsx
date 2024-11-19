import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { BoxFooterProps } from '@/components/box/footer/BoxFooterProps'
import { ComponentName } from '@/components/enumsComponentsName'
import { getColorStyle } from '@/objects/facets/Color'

/**
 * Box Footer Component
 * @param children {React.ReactNode} Childrens
 * @param backgroundColor {TrilogyColor} Background for BoxFooter
 */
const BoxFooter = ({ children, backgroundColor, ...others }: BoxFooterProps, ref: React.Ref<View>): JSX.Element => {
  const boxRadius = 6

  const styles = StyleSheet.create({
    boxFooter: {
      padding: 12,
      justifyContent: 'center',
      backgroundColor: backgroundColor ? getColorStyle(backgroundColor) : 'transparent',
      borderBottomLeftRadius: boxRadius,
      borderBottomRightRadius: boxRadius,
    },
  })

  return (
    <View style={[styles.boxFooter]} ref={ref} {...others}>
      {children && typeof children.valueOf() === 'string' ? <Text>{String(children)}</Text> : children}
    </View>
  )
}

BoxFooter.displayName = ComponentName.BoxFooter

export default React.forwardRef(BoxFooter)
