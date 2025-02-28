import { BoxContentNativeRef, BoxContentProps } from '@/components/box/content/BoxContentProps'
import { BoxContext } from '@/components/box/context/boxContext'
import { ComponentName } from '@/components/enumsComponentsName'
import { getColorStyle } from '@/objects/facets/Color'
import * as React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'

/**
 * Box Content Component
 * @param children {React.ReactNode} Childrens
 * @param backgroundColor {TrilogyColor} Box Content Background Color
 * @param backgroundSrc {string} Source of background Image
 */
const BoxContent = React.forwardRef<BoxContentNativeRef, BoxContentProps>(
  ({ children, backgroundColor, backgroundSrc, ...others }, ref): JSX.Element => {
    const { fullHeight } = React.useContext(BoxContext)

    const styles = StyleSheet.create({
      boxContent: {
        padding: 16,
        justifyContent: 'center',
        backgroundColor: (backgroundColor && getColorStyle(backgroundColor)) || 'transparent',
        borderRadius: 6,
        flex: fullHeight ? 1 : undefined,
      },
    })

    const content = (
      <View ref={ref} style={[styles.boxContent]} {...others}>
        {children && typeof children.valueOf() === 'string' ? <Text>{children}</Text> : children}
      </View>
    )

    if (backgroundSrc) {
      return (
        <ImageBackground source={{ uri: backgroundSrc }} style={{ flex: 1 }} imageStyle={{ borderRadius: 6 }}>
          {content}
        </ImageBackground>
      )
    } else {
      return content
    }
  },
)

BoxContent.displayName = ComponentName.BoxContent

export default BoxContent
