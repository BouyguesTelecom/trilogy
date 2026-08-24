import { BoxContentNativeRef, BoxContentProps } from '@/components/box/content/BoxContentProps'
import { BoxContext } from '@/components/box/context/boxContext'
import { ComponentName } from '@/components/enumsComponentsName'
import { getColorStyle } from '@/objects/facets/Color'
import * as React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { getRadiusStyle, Radius } from '@/objects/facets/Radius'

/**
 * Box Content
 * @param children {React.ReactNode} Box Content Children
 * @param backgroundColor {TrilogyColor} Box Content Background Color
 * @param backgroundSrc {string} Source of background Image
 * @param id {string} Custom id attribute
 * @param testId {string} Test Id for Test Integration
 */
const BoxContent = React.forwardRef<BoxContentNativeRef, BoxContentProps>(
  ({ children, backgroundColor, backgroundSrc, testId, ...others }, ref): JSX.Element => {
    const { fullHeight, highlighted, header, numberOfContent, setNumberOfContent } = React.useContext(BoxContext)
    const borderSmallRadius = getRadiusStyle(Radius.SMALL)

    const styles = StyleSheet.create({
      boxContent: {
        padding: 16,
        backgroundColor: (backgroundColor && getColorStyle(backgroundColor)) || 'transparent',
        borderRadius: borderSmallRadius,
        flex: fullHeight ? 1 : undefined,
        marginLeft: highlighted ? 4 : 0,
        borderTopLeftRadius: (highlighted && numberOfContent > 1) || header ? 0 : borderSmallRadius,
        borderTopRightRadius: header ? 0 : borderSmallRadius,
        borderBottomLeftRadius: numberOfContent > 1 || highlighted ? 0 : borderSmallRadius,
        borderBottomRightRadius: numberOfContent > 1 ? 0 : borderSmallRadius,
      },
    })

    const content = (
      <View
        testID={testId}
        ref={ref}
        style={[styles.boxContent]}
        {...others}
        onLayout={() => {
          setNumberOfContent((prev) => prev + 1)
        }}
      >
        {children && typeof children.valueOf() === 'string' ? <Text>{children}</Text> : children}
      </View>
    )

    if (backgroundSrc) {
      return (
        <ImageBackground
          source={typeof backgroundSrc === 'number' ? backgroundSrc : { uri: backgroundSrc }}
          style={{ flex: 1 }}
          imageStyle={{ borderRadius: borderSmallRadius }}
        >
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
