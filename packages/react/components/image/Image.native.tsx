import * as React from "react"
import { Image as ImageNative, StyleSheet, TouchableOpacity, View, } from "react-native"
import { ImageProps } from "./ImageProps"
import { ComponentName } from "@/components/enumsComponentsName"

/**
 * Image Component
 * @param src {string} Image source
 * @param alt {string} Image alt
 * @param rounded {boolean} Image rounded
 * @param width {number|string} Image width (Number if not percent else string)
 * @param height {number|string} Image height (Number if not percent else string)
 * @param onClick {Function} onClick Event
 * @param style {Object} Additional styles
 * @param flex {boolean} add Flex : 1
 */
const Image = ({
  src,
  alt,
  rounded,
  width,
  height,
  onClick,
  flex,
  ...others
}: ImageProps): JSX.Element => {
  const styles = StyleSheet.create({
    image: {
      width: width ? width : "100%",
      height: height ? height : "100%",
      borderRadius: rounded ? 100 : 0,
      overflow: rounded ? "hidden" : "visible",
      resizeMode: "contain",
      flex: flex ? 1 : 0,
    },
  })

  const image = (
    <ImageNative
      style={styles.image}
      accessibilityLabel={alt}
      source={typeof src === "number" ? src : { uri: src }}
      {...others}
    />
  )

  return onClick ? (
    <View>
      <TouchableOpacity onPress={onClick} activeOpacity={0.85}>
        {image}
      </TouchableOpacity>
    </View>
  ) : (
    image
  )
}

Image.displayName = ComponentName.Image

export default Image
