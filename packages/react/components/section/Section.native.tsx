import { ComponentName } from '@/components/enumsComponentsName'
import { getColorStyle, TrilogyColor } from '@/objects'
import * as React from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'
import { SectionProps } from './SectionProps'

/**
 * Section Component - Manages the main margins of the page and takes up all the available width.
 * @param children {React.ReactNode}
 * @param backgroundColor {TrilogyColor} Section Background Color
 * @param backgroundSrc {string} Source of background Image
 * @param paddingless {boolean} remove padding
 **/
const Section = ({ backgroundColor, backgroundSrc, children, style, ...others }: SectionProps): JSX.Element => {
  const colorBgc = getColorStyle(TrilogyColor.BACKGROUND)

  const styles = StyleSheet.create({
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
        <View style={[styles.container, style]} {...others}>
          {children}
        </View>
      </ImageBackground>
    )
  }

  return (
    <View style={[styles.container, style]} {...others}>
      {children}
    </View>
  )
}

Section.displayName = ComponentName.Section
export default Section
