import React, { useContext, useEffect, useState } from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'

import { CardContext } from '@/components/card/Card.native'
import { CardImageProps } from '@/components/card/image/CardImageProps'
import { ComponentName } from '@/components/enumsComponentsName'

/**
 * Card Image Component
 * @param src Image source
 * @param size Image Card size on horizontal align
 * @param alt Alt attribute
 * @param onClick {Function} onClick Event
 * @param horizontal {boolean} Horizontal Card orientation
 * @param contain {boolean} Resize mode contain
 */
const CardImage = (
  { src, size, alt, onClick, contain, ...others }: CardImageProps,
  ref: React.Ref<Image>,
): JSX.Element => {
  const { horizontal, reversed, active } = useContext(CardContext)
  const maxSize = horizontal ? '50%' : '100%'
  const [ratio, setRatio] = useState(1)

  const getBorderRadius = (isHorizontal: boolean, isReversed: boolean, isActive: boolean) => ({
    borderBottomRightRadius: (isHorizontal && 1) || (isReversed && 8) || 0,
    borderBottomLeftRadius: (isHorizontal && 8) || (isReversed && 8) || 0,
    borderTopRightRadius: (isHorizontal && 1) || (isReversed && 1) || (isActive && 5) || 8,
    borderTopLeftRadius: (isHorizontal && 1) || (isReversed && 1) || (isActive && 5) || 8,
  })

  const styles = StyleSheet.create({
    cardImage: {
      width: size ? `${size}0%` : maxSize,
      aspectRatio: ratio,
      resizeMode: contain ? 'contain' : 'cover',
      alignSelf: contain ? 'flex-end' : 'auto',
      marginBottom: 0,
      ...getBorderRadius(horizontal, reversed, active),
    },
  })

  useEffect(() => {
    if (!horizontal) {
      typeof src === 'string'
        ? Image.getSize(
            src,
            (w, h) => {
              h && setRatio(w / h)
            },
            () => setRatio(1),
          )
        : setRatio(1)
    }
  }, [src, horizontal])

  const image = (
    <Image
      ref={ref}
      accessibilityLabel={alt}
      style={styles.cardImage}
      source={typeof src === 'number' ? src : { uri: src }}
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

CardImage.displayName = ComponentName.CardImage

export default React.forwardRef(CardImage)
