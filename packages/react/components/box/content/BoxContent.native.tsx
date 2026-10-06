import { BoxContentNativeRef, BoxContentProps } from '@/components/box/content/BoxContentProps'
import { BoxContext } from '@/components/box/context/boxContext'
import { ComponentName } from '@/components/enumsComponentsName'
import { getColorStyle } from '@/objects/facets/Color'
import { forwardRef, useContext } from 'react'
import { ImageBackground, Text, View } from 'react-native'
import { memoStyles } from '@/helpers/memoStyles'
import { Theme } from '@/constants/theme'
import { getPaddingStyle } from '@/objects/facets/Padding'

/**
 * Box Content
 * @param children {ReactNode} Box Content Children
 * @param backgroundColor {TrilogyColor} Box Content Background Color
 * @param backgroundSrc {string} Source of background Image
 * @param id {string} Custom id attribute
 * @param testId {string} Test Id for Test Integration
 */
const BoxContent = forwardRef<BoxContentNativeRef, BoxContentProps>(
  ({ children, backgroundColor, backgroundSrc, testId, ...others }, ref): JSX.Element => {
    const { fullHeight, padding } = useContext(BoxContext)

    const styles = memoStyles({
      boxContent: {
        padding: getPaddingStyle(padding ?? 'md'),
        backgroundColor: (backgroundColor && getColorStyle(backgroundColor)) || 'transparent',
        flex: fullHeight ? 1 : undefined,
      },
    })

    const content = (
      <View testID={testId} ref={ref} style={[styles.boxContent]} {...others}>
        {children && typeof children.valueOf() === 'string' ? <Text>{children}</Text> : children}
      </View>
    )

    if (backgroundSrc) {
      return (
        <ImageBackground
          source={typeof backgroundSrc === 'number' ? backgroundSrc : { uri: backgroundSrc }}
          style={{ flex: 1 }}
          imageStyle={{ borderRadius: Theme.radius.lg }}
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
