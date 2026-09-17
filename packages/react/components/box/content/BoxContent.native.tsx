import { BoxContentNativeRef, BoxContentProps } from '@/components/box/content/BoxContentProps'
import { BoxContext } from '@/components/box/context/boxContext'
import { ComponentName } from '@/components/enumsComponentsName'
import { forwardRef, useContext, useMemo, useCallback } from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { useThemeRadiusBySize } from '@/hooks/useThemeRadius'
import { Radius } from '@/interfaces/Radius'
import { useThemeBackground } from '@/hooks/useThemeBackground'
import { THEME_TRILOGY } from '@trilogy-ds/react/theme'
import { lightBackgroundStyles, darkBackgroundStyles } from '@/helpers/styles'
import { getThemeBackground } from '@/helpers/getThemeColors'
import { useTheme } from '@/hooks/useTheme'

/**
 * Box Content
 * @param children {React.ReactNode} Box Content Children
 * @param backgroundColor {TrilogyColor} Box Content Background Color
 * @param backgroundSrc {string} Source of background Image
 * @param id {string} Custom id attribute
 * @param testId {string} Test Id for Test Integration
 */
const BoxContent = forwardRef<BoxContentNativeRef, BoxContentProps>(
  ({ children, backgroundColor, backgroundSrc, testId, ...others }, ref): JSX.Element => {
    const { theme, mode } = useTheme()
    const backgroundStyle = mode === 'dark' ? darkBackgroundStyles : lightBackgroundStyles
    const { fullHeight, highlighted, header, numberOfContent, setNumberOfContent } = useContext(BoxContext)
    const borderSmallRadius = useThemeRadiusBySize(Radius.SMALL)
    //const backgroundStyle = useThemeBackground(backgroundColor || 'TRANSPARENT')

    const onLayout = useCallback(() => {
      setNumberOfContent((prev) => prev + 1)
    }, [setNumberOfContent])

    const content = useMemo(
      () => (
        <View
          testID={testId}
          ref={ref}
          style={[
            styles.boxContent,
            backgroundStyle[backgroundColor ?? 'PRIMARY'],
            fullHeight && styles.boxContentFullHeight,
            highlighted && styles.boxContentHighlighted,
            ((highlighted && numberOfContent > 1) || header) && styles.boxContentHighlightedWithContentOrHeader,
            header && styles.boxContentWithHeader,
            numberOfContent > 1 && styles.boxContentWithContent,
          ]}
          {...others}
          onLayout={onLayout}
        >
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

const styles = StyleSheet.create({
  boxContent: {
    padding: 16,
    borderRadius: THEME_TRILOGY.radius.radiusSm,
    marginLeft: 0,
    borderTopLeftRadius: THEME_TRILOGY.radius.radiusSm,
    borderTopRightRadius: THEME_TRILOGY.radius.radiusSm,
    borderBottomLeftRadius: numberOfContent > 1 || highlighted ? 0 : borderSmallRadius,
    borderBottomRightRadius: THEME_TRILOGY.radius.radiusSm,
  },
  boxContentFullHeight: {
    flex: 1,
  },
  boxContentHighlighted: {
    marginLeft: 4,
  },
  boxContentHighlightedWithContentOrHeader: {
    borderTopLeftRadius: 0,
  },
  boxContentWithHeader: {
    borderTopRightRadius: 0,
  },
  boxContentWithContent: {
    borderBottomRightRadius: 0,
  },
})
