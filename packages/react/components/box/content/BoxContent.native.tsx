import { BoxContentNativeRef, BoxContentProps } from '@/components/box/content/BoxContentProps'
import { BoxContext } from '@/components/box/context/boxContext'
import { ComponentName } from '@/components/enumsComponentsName'
import { getColorStyle } from '@/objects/facets/Color'
import * as React from 'react'
import { ImageBackground, Text, View } from 'react-native'
import { memoStyles } from '@/helpers/memoStyles'
import { Theme } from '@/constants/theme'

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
    const { fullHeight, highlighted } = React.useContext(BoxContext)

    const styles = memoStyles({
      boxContent: {
        padding: 16,
        backgroundColor: (backgroundColor && getColorStyle(backgroundColor)) || 'transparent',
        flex: fullHeight ? 1 : undefined,
        marginLeft: highlighted ? 4 : 0,
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
