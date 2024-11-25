import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { BoxContentProps } from '@/components/box/content/BoxContentProps'
import { ComponentName } from '@/components/enumsComponentsName'
import { getColorStyle } from '@/objects/facets/Color'

/**
 * Box Content Component
 * @param children {React.ReactNode} Childrens
 * @param backgroundColor {TrilogyColor} Box Content Background Color
 */
const BoxContent = React.forwardRef(
  ({ children, backgroundColor, ...others }: BoxContentProps, ref: React.Ref<View>): JSX.Element => {
    const styles = StyleSheet.create({
      boxContent: {
        padding: 16,
        justifyContent: 'center',
        backgroundColor: (backgroundColor && getColorStyle(backgroundColor)) || 'transparent',
        borderRadius: 6,
      },
    })

    return (
      <View ref={ref} style={[styles.boxContent]} {...others}>
        {children && typeof children.valueOf() === 'string' ? <Text>{children}</Text> : children}
      </View>
    )
  },
)

BoxContent.displayName = ComponentName.BoxContent
export default BoxContent
