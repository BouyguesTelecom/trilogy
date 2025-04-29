import { ComponentName } from '@/components/enumsComponentsName'
import * as React from 'react'
import { Image as ImageNative, StyleSheet, TouchableOpacity, View } from 'react-native'
import { ImageNativeRef, ImageProps } from './ImageProps'

/**
 * Image Component
 * @param src {string} Image source
 * @param alt {string} Image alt
 * @param radius {RadiusValues} Image border radius size
 * @param width {number|string} Image width (Number if not percent else string)
 * @param height {number|string} Image height (Number if not percent else string)
 * @param onClick {Function} onClick Event
 * @param circled {boolean} Circled Image
 */
const Image = React.forwardRef<ImageNativeRef, ImageProps>(({ src, alt = '', circled, width, height, onClick, ...others }, ref): JSX.Element => {
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
      ref={ref}
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
})

Image.displayName = ComponentName.Image

export default Image
