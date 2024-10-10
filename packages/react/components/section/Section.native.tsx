import * as React from "react"
import { ImageBackground, StyleSheet, View } from "react-native"
import { SectionProps } from "./SectionProps"
import { AutoLayoutWrapper } from "@/components/autolayout"
import { getColorStyle, TrilogyColor } from "@/objects"
import { ComponentName } from "@/components/enumsComponentsName"

/**
 * Section Component - Manages the main margins of the page and takes up all the available width.
 * @param children {ReactNode} Section children
 * @param autolayout {boolean} Apply auto-layout rules
 * @param className {string} Additionnal CSS Classes
 * @param backgroundColor {TrilogyColor} Section Background Color
 * @param backgroundSrc {string} Source of background Image
 * @param paddingless {boolean} remove padding
 * @param verticalPaddingless {boolean} remove vertical padding
 */
const Section = ({
  autolayout = true,
  backgroundColor,
  backgroundSrc,
  children,
  paddingless,
  verticalPaddingless,
  fullwidth,
}: SectionProps): JSX.Element => {
  const colorBgc = getColorStyle(TrilogyColor.BACKGROUND)

  const styles = StyleSheet.create({
    section: {
      backgroundColor: backgroundColor ? getColorStyle(backgroundColor) : colorBgc,
      paddingTop: paddingless || verticalPaddingless ? 0 : 32,
      paddingBottom: paddingless || verticalPaddingless ? 0 : 32,
      paddingRight: paddingless ? 0 : 24,
      paddingLeft: paddingless ? 0 : 24,
      width: fullwidth ? "100%" : "auto",
    },
    sectionImage: {
      width: "100%",
      minHeight: 100,
      height: "auto",
    },
  })

  return (
    <View style={styles.section}>
      {backgroundSrc ? (
        <ImageBackground
          style={styles.sectionImage}
          source={
            typeof backgroundSrc === "number"
              ? backgroundSrc
              : { uri: backgroundSrc }
          }
        >
          <AutoLayoutWrapper {...{ autolayout }}>{children}</AutoLayoutWrapper>
        </ImageBackground>
      ) : (
        <AutoLayoutWrapper {...{ autolayout }}>{children}</AutoLayoutWrapper>
      )}
    </View>
  )
}

Section.displayName = ComponentName.Section

export default Section
