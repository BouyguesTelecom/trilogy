import * as React from "react"
import { ImageBackground, StyleSheet, TouchableOpacity, View as ViewNative, } from "react-native"
import { getAlignStyle, getJustifyStyle, TrilogyColor } from "@/objects"
import { getColorStyle } from "@/objects/facets/Color"
import { ViewProps } from "./ViewProps"
import { ComponentName } from "@/components/enumsComponentsName"

/**
 * View Component (DIV EQUIVALENT)
 * @param children {ReactNode} View child
 * @param style {object} View custom style
 * @param onClick {Function} Click Event
 * @param flexable {boolean} Flexable view
 * @param bottom {boolean} Bottom position
 * @param backgroundColor {TrilogyColor} View backgroud color
 * @param backgroundSrc {string} Source of background Image
 * @param id {string} Id for Web / TestID for Native
 * @param justify {JustifiableProps.justify?} Justifiable | "JUSTIFIED_CENTER" | "JUSTIFIED_START" | "JUSTIFIED_END" | "SPACE_BETWEEN" | undefined
 * @param align {AlignableProps.center?} AlignableProps | "ALIGNED_CENTER" | "ALIGNED_START" | "ALIGNED_END" | undefined
 * @param fullwidth {boolean} true by default
 * @param others
 */

const View = ({
  children,
  style,
  onClick,
  flexable,
  bottom,
  backgroundColor,
  backgroundSrc,
  id,
  justify,
  fullwidth = true,
  align,
  ...others
}: ViewProps): JSX.Element => {
  const viewColor =
    (backgroundColor && getColorStyle(backgroundColor as TrilogyColor)) || "transparent"

  const styles = StyleSheet.create({
    view: {
      flex: flexable ? 1 : 0,
      backgroundColor: viewColor,
      width: fullwidth ? "100%" : "auto",
      ...(justify && { justifyContent: getJustifyStyle(justify) }),
      ...(align && { alignItems: getAlignStyle(align) }),
    },
    bottom: {
      position: "absolute",
      bottom: 0,
      width: fullwidth ? "100%" : "auto",
    },
    sectionImage: {
      flex: flexable ? 1 : 0,
      width: "100%",
      height: "auto",
    },
  })

  let returnView = (
    <ViewNative
      testID={id}
      nativeID={id}
      style={[styles.view, bottom && styles.bottom, style]}
      {...others}
    >
      {children}
    </ViewNative>
  )
  if (!children) {
    returnView = (
      <ViewNative
        testID={id}
        nativeID={id}
        style={[styles.view, bottom && styles.bottom, style]}
        {...others}
      />
    )
  }

  if (onClick) {
    returnView = (
      <ViewNative
        testID={id}
        nativeID={id}
        style={[styles.view, bottom && styles.bottom, style]}
        {...others}
      >
        <TouchableOpacity activeOpacity={1} onPress={onClick}>
          {children}
        </TouchableOpacity>
      </ViewNative>
    )
  }

  return backgroundSrc ? (
    <ImageBackground
      style={styles.sectionImage}
      source={
        typeof backgroundSrc === "number"
          ? backgroundSrc
          : { uri: backgroundSrc }
      }
    >
      {returnView}
    </ImageBackground>
  ) : (
    returnView
  )
}

View.displayName = ComponentName.View

export default View
