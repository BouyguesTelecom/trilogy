import { ComponentName } from '@/components/enumsComponentsName'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import { forwardRef } from 'react'
import { ImageBackground, View } from 'react-native'
import { memoStyles } from '@/helpers/memoStyles'
import { SectionNativeRef, SectionProps } from '@/components/section/SectionProps'

/**
 * Section Component - Manages the main margins of the page and takes up all the available width.
 * @param children {ReactNode} Section child elements
 * @param backgroundColor {TrilogyColor} Section Background Color
 * @param backgroundSrc {string} Source of background image
 * @param inverted {boolean} Inverted Section Color
 * @param id {string} Custom id attribute
 */
const Section = forwardRef<SectionNativeRef, SectionProps>(({ backgroundColor, backgroundSrc, children, style, ...others }, ref): JSX.Element => {
  const colorBgc = getColorStyle(TrilogyColor.BACKGROUND)

  const styles = memoStyles({
    container: {
      backgroundColor: backgroundSrc ? undefined : backgroundColor ? getColorStyle(backgroundColor) : colorBgc,
      paddingVertical: 32,
      paddingHorizontal: 24,
    },
  })

  if (backgroundSrc) {
    return (
      <ImageBackground
        resizeMode='cover'
        source={typeof backgroundSrc === 'number' ? backgroundSrc : { uri: backgroundSrc }}
      >
        <View ref={ref} style={[styles.container, style]} {...others}>
          {children}
        </View>
      </ImageBackground>
    )
  }

  return (
    <View ref={ref} style={[styles.container, style]} {...others}>
      {children}
    </View>
  )
})

Section.displayName = ComponentName.Section
export default Section
