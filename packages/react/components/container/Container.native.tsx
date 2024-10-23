import * as React from "react"
import { StyleSheet, View } from "react-native"
import { ContainerProps } from "./ContainerProps"
import { getColorStyle, StickyPosition, TrilogyColor, } from "@/objects"
import { ComponentName } from "@/components/enumsComponentsName"

/**
 * Container Native Component
 * @param autolayout {boolean} Apply auto-layout rules
 * @param centered {boolean} Center all childrens of container
 * @param verticalCentered {boolean} Align center vertically all content
 * @param children {React.ReactNode}
 * @param sticky {StickyPosition} Container sticky top / bottom
 * @param stickyOffSetTop {Number | string} Set top of sticky container
 * @param stickyOffSetBottom {Number | string} Set bottom of sticky container
 * @param backgroundColor {TrilogyColor} Container sticky Background Color
 * @param pulledRight {Boolean} Container pulled to right
 * @param pulledLeft {Boolean} Container pulled to left
 * @param paddingless {boolean} remove padding
 * @param verticalPaddingless {boolean} remove vertical padding
 */

const Container = ({
  children,
  centered,
  verticalCentered,
  paddingless,
  verticalPaddingless,
  pulledLeft,
  pulledRight,
  backgroundColor,
  sticky,
  stickyOffSetTop,
  stickyOffSetBottom,
  ...others
}: ContainerProps): JSX.Element => {

  const styles = StyleSheet.create({
    container: {
      width: "100%",
      paddingTop: paddingless || verticalPaddingless ? 0 : 24,
      paddingBottom: paddingless || verticalPaddingless ? 0 : 24,
      paddingRight: paddingless ? 0 : 24,
      paddingLeft: paddingless ? 0 : 24,
      alignItems:
        (centered && "center") ||
        (pulledLeft && "flex-start") ||
        (pulledRight && "flex-end") ||
        "stretch",
      justifyContent: verticalCentered ? "center" : "flex-start",
      flex: verticalCentered ? 1 : 0,
      backgroundColor: backgroundColor && getColorStyle(backgroundColor),
    },

    stickyTop: {
      position: "absolute",
      backgroundColor: backgroundColor
        ? getColorStyle(backgroundColor)
        : getColorStyle(TrilogyColor.BACKGROUND),
      left: 0,
      right: 0,
      top: stickyOffSetTop ? stickyOffSetTop : 0,
      marginTop: 0,
      zIndex: 999,
    },
    stickyBottom: {
      backgroundColor: backgroundColor
        ? getColorStyle(backgroundColor)
        : getColorStyle(TrilogyColor.BACKGROUND),
      width: "100%",
      position: "absolute",
      left: 0,
      right: 0,
      bottom: stickyOffSetBottom ? stickyOffSetBottom : 0,
      zIndex: 999,
    },
  })

  return (
    <View
      style={
        (sticky === StickyPosition.TOP && styles.stickyTop) ||
        (sticky === StickyPosition.BOTTOM && styles.stickyBottom) ||
        styles.container
      }
      {...others}
    >
      {children}
    </View>
  )
}

Container.displayName = ComponentName.Container

export default Container
