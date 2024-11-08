import * as React from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'
import { SectionProps } from './SectionProps'
import { getColorStyle, TrilogyColor } from '@/objects'
import { ComponentName } from '@/components/enumsComponentsName'

/**
 * Section Component - Manages the main margins of the page and takes up all the available width.
 * @param children {React.ReactNode}
 * @param backgroundColor {TrilogyColor} Section Background Color
 * @param backgroundSrc {string} Source of background Image
 * @param paddingless {boolean} remove padding
 **/
const Section = ({ backgroundColor, backgroundSrc, children }: SectionProps): JSX.Element => {
  const colorBgc = getColorStyle(TrilogyColor.BACKGROUND)

  const styles = StyleSheet.create({
    section: {
      backgroundColor: backgroundColor ? getColorStyle(backgroundColor) : colorBgc,
      paddingTop: 32,
      paddingBottom: 32,
      paddingRight: 24,
      paddingLeft: 24,
      width: 'auto',
    },
    sectionImage: {
      width: '100%',
      minHeight: 100,
      height: 'auto',
    },
  })

  return (
    <View style={styles.section}>
      {backgroundSrc ? (
        <ImageBackground
          style={styles.sectionImage}
          source={typeof backgroundSrc === 'number' ? backgroundSrc : { uri: backgroundSrc }}
        >
          {children}
        </ImageBackground>
      ) : (
        children
      )}
    </View>
  )
}

Section.displayName = ComponentName.Section

export default Section
