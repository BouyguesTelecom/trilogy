import { BoxContentNativeRef, BoxContentProps } from '@/components/box/content/BoxContentProps'
import { BoxContext } from '@/components/box/context/boxContext'
import { ComponentName } from '@/components/enumsComponentsName'
import * as React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { getColorStyle } from '@/helpers/color'
import { getRadiusStyle } from '@/helpers/radius'
import { Radius } from '@/interfaces/Radius'

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
    const backgroundStyle = getColorStyle(backgroundColor || 'transparent')

    const styles = React.useMemo(
      () =>
        StyleSheet.create({
          boxContent: {
            padding: 16,
            backgroundColor: backgroundStyle,
            borderRadius: borderSmallRadius,
            flex: fullHeight ? 1 : undefined,
            marginLeft: highlighted ? 4 : 0,
            borderTopLeftRadius: (highlighted && numberOfContent > 1) || header ? 0 : borderSmallRadius,
            borderTopRightRadius: header ? 0 : borderSmallRadius,
            borderBottomLeftRadius: numberOfContent > 1 || highlighted ? 0 : borderSmallRadius,
            borderBottomRightRadius: numberOfContent > 1 ? 0 : borderSmallRadius,
          },
        }),
      [backgroundStyle, borderSmallRadius, fullHeight, highlighted, header, numberOfContent],
    )

    const onLayout = React.useCallback(() => {
      setNumberOfContent((prev) => prev + 1)
    }, [setNumberOfContent])

    const content = React.useMemo(
      () => (
        <View testID={testId} ref={ref} style={[styles.boxContent]} {...others} onLayout={onLayout}>
          {children && typeof children.valueOf() === 'string' ? <Text>{children}</Text> : children}
        </View>
      ),
      [testId, ref, styles.boxContent, others, onLayout, children],
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
    }
    return content
  },
)

BoxContent.displayName = ComponentName.BoxContent

export default BoxContent
