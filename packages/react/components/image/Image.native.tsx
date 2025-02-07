import { ComponentName } from '@/components/enumsComponentsName'
import * as React from 'react'
import { Image as ImageNative, StyleSheet, TouchableOpacity, View } from 'react-native'
import { ImageProps } from './ImageProps'

/**
 * Image Component
 * @param src {string} Image source
 * @param alt {string} Image alt
 * @param rounded {boolean} Image rounded
 * @param width {number|string} Image width (Number if not percent else string)
 * @param height {number|string} Image height (Number if not percent else string)
 * @param onClick {Function} onClick Event
 */
const Image = ({ src, alt = '', circled, width, height, onClick, ...others }: ImageProps): JSX.Element => {
  const styles = StyleSheet.create({
    image: {
      width: width ? width : '100%',
      height: height ? height : '100%',
      borderRadius: circled ? 100 : 0,
      overflow: circled ? 'hidden' : 'visible',
      resizeMode: 'contain',
    },
  })

  const image = (
    <ImageNative
      style={styles.image}
      accessibilityLabel={alt}
      source={typeof src === 'number' ? src : { uri: src }}
      {...others}
      alt={alt}
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
