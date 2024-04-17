import * as React from "react"
import { StyleSheet, View } from "react-native"
import { Image } from "../../image"
import { SliceImageProps } from "./SliceImageProps"
import { ComponentName } from "../../enumsComponentsName"

/**
 * Slice Image Component
 * @param children {ReactNode} Custom children for Slice Image
 * @param src {string} Image source
 * @param alt {string} Image alt
 */
const SliceImage = ({
  children,
  src,
  alt,
  ...others
}: SliceImageProps): JSX.Element => {
  const styles = StyleSheet.create({
    sliceImage: {},
  })

  if (children) {
    return (
      <View style={styles.sliceImage} {...others}>
        {children}
      </View>
    )
  }

  return (
    <Image rounded width={60} height={60} src={src || ""} alt={alt || ""} />
  )
}

SliceImage.displayName = ComponentName.SliceImage

export default SliceImage
